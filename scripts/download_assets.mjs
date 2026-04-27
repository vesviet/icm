import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch';
import * as cheerio from 'cheerio';
import { pipeline } from 'stream/promises';

const siteUrl = 'https://icmfactorydirect.com/';

const downloadFile = async (url, dest) => {
  if (fs.existsSync(dest)) {
    console.log(`Already exists: ${dest}`);
    return;
  }
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`unexpected response ${response.statusText}`);
    const fileStream = fs.createWriteStream(dest);
    await pipeline(response.body, fileStream);
    console.log(`Downloaded: ${url} -> ${dest}`);
  } catch (e) {
    console.error(`Failed to download ${url}: ${e.message}`);
  }
};

const pdfs = [
  "https://icmfactorydirect.com/wp-content/uploads/2025/01/ICM-eBrochure-2025.pdf",
  "https://icmfactorydirect.com/wp-content/uploads/2024/06/ICM-eBrochure-Headwear-2024.pdf",
  "https://icmfactorydirect.com/wp-content/uploads/2023/06/Corporate_Logoed_Apparel.pdf",
  "https://icmfactorydirect.com/wp-content/uploads/2025/06/IRONMAN-COLLECTION.pdf",
  "https://icmfactorydirect.com/wp-content/uploads/2023/06/Posrche-Collection.pdf",
  "https://icmfactorydirect.com/wp-content/uploads/2023/06/Mercedes-Collection.pdf",
  "https://icmfactorydirect.com/wp-content/uploads/2023/06/Bahrain-Collection.pdf",
  "https://icmfactorydirect.com/wp-content/uploads/2023/06/ICM-Factory-LS21-00228.pdf"
];

async function scrapeImages() {
  console.log('Fetching homepage HTML...');
  const res = await fetch(siteUrl);
  const html = await res.text();
  const $ = cheerio.load(html);

  const imagesToDownload = new Set();

  // Find all images
  $('img').each((i, el) => {
    let src = $(el).attr('data-src') || $(el).attr('src');
    if (src && src.includes('wp-content/uploads')) {
      if (src.startsWith('//')) src = 'https:' + src;
      // Strip WordPress image resize suffixes (e.g. -842x1024, -150x150)
      src = src.replace(/-\d+x\d+(?=\.\w+$)/i, '');
      imagesToDownload.add(src);
    }
  });

  // Find background images
  $('*').each((i, el) => {
    const style = $(el).attr('style');
    if (style && style.includes('background-image')) {
      const match = style.match(/url\(['"]?(.*?)['"]?\)/);
      if (match && match[1] && match[1].includes('wp-content/uploads')) {
        let src = match[1];
        if (src.startsWith('//')) src = 'https:' + src;
        // Strip WordPress image resize suffixes
        src = src.replace(/-\d+x\d+(?=\.\w+$)/i, '');
        imagesToDownload.add(src);
      }
    }
  });

  console.log(`Found ${imagesToDownload.size} images to download from homepage.`);

  for (const url of imagesToDownload) {
    const filename = url.split('/').pop().split('?')[0];
    const dest = path.join(process.cwd(), 'public', 'images', filename);
    await downloadFile(url, dest);
  }
}

async function main() {
  console.log('--- Downloading PDFs ---');
  for (const url of pdfs) {
    const filename = url.split('/').pop();
    const dest = path.join(process.cwd(), 'public', 'documents', filename);
    await downloadFile(url, dest);
  }

  console.log('--- Downloading Homepage Images ---');
  await scrapeImages();
  
  console.log('Done!');
}

main();
