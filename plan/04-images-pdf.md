# Image & PDF Plan — Asset Inventory & Gap Analysis

> Production assets: `/wp-content/uploads/` (WordPress Media Library)
> Local assets: `/public/images/` + `/public/documents/`

---

## PDF Documents

### ✅ All PDFs Present Locally

| File | Local Path | Production Path | Size | Status |
|------|-----------|----------------|------|--------|
| ICM eBrochure 2025 | `/documents/ICM-eBrochure-2025.pdf` | `/wp-content/uploads/2025/01/ICM-eBrochure-2025.pdf` | 8.8MB | ✅ |
| Headwear 2024 | `/documents/ICM-eBrochure-Headwear-2024.pdf` | `/wp-content/uploads/2024/06/ICM-eBrochure-Headwear-2024.pdf` | 5.5MB | ✅ |
| Corporate Logoed Apparel | `/documents/Corporate_Logoed_Apparel.pdf` | `/wp-content/uploads/2023/06/Corporate_Logoed_Apparel.pdf` | 2.7MB | ✅ |
| IRONMAN Collection | `/documents/IRONMAN-COLLECTION.pdf` | `/wp-content/uploads/2025/06/IRONMAN-COLLECTION.pdf` | 3.3MB | ✅ |
| Porsche Collection | `/documents/Posrche-Collection.pdf` | `/wp-content/uploads/2023/06/Posrche-Collection.pdf` | 4.0MB | ✅ |
| Mercedes Collection | `/documents/Mercedes-Collection.pdf` | `/wp-content/uploads/2023/06/Mercedes-Collection.pdf` | 3.4MB | ✅ |
| Bahrain Collection | `/documents/Bahrain-Collection.pdf` | `/wp-content/uploads/2023/06/Bahrain-Collection.pdf` | 779KB | ✅ |
| ISO 18184 Cert | `/documents/ICM-Factory-LS21-00228.pdf` | `/wp-content/uploads/2023/06/ICM-Factory-LS21-00228.pdf` | 112KB | ✅ |
| JW Marriott Pres. | `/documents/JW-MARRIOTT-PRESENTATION-Final.pdf` | Not in menu (direct link) | 8.8MB | ✅ |

### ⚠️ PDF Issues

| Issue | Details | Priority |
|-------|---------|----------|
| Typo in filename | `Posrche-Collection.pdf` → should be `Porsche` | **P3** |
| E-Brochure 2026 label | Links to 2025 PDF | **P2** |

---

## Images — Inventory by Directory

### `/public/images/` (Root Level) — 54 files

| Category | Count | Key Files |
|----------|-------|-----------|
| Logo | 2 | `logo.webp`, `ICM-Logo-e1742183467169.png` + variant |
| Client logos (full-size) | 12 | `Base-2-*.png`, `COEUR-2-*.png`, `Diamond-Bakery-3-*.png`, etc. |
| Hero/section bgs | 5 | `cropped-image-*.jpg`, `portrait-*.jpg`, etc. |
| Service icons | 3 | `Icon-1-1.png`, `Icon-2-1.png`, `Icon-3-1.png` |
| Service images | 6 | `Service-1-1.png` through `Service-6-1.png` |
| Process steps | 2 | `Step-1-1.png`, `Step-2-1.png` |
| Ticker badge | 1 | `Ticker-Bluesign.png` |
| Fabric hero images | 3 | `sitip-technical-textles-fabrics-{1,2,3}.webp` (large: 2-3MB each) |
| Ad square | 1 | `GOOGLE-ADS-SQUARE-1.jpg` |
| Background | 1 | `BG-2-1.png` |

### `/public/images/brands/` — 7 files

| File | Size | Used In |
|------|------|---------|
| `HardRock.png` | 2.2KB | ClientLogos marquee |
| `IronMan.png` | 879B | ClientLogos marquee |
| `JW-Marriott.png` | 725B | ClientLogos marquee |
| `Base.png` | 1.2KB | ClientLogos marquee |
| `COEUR.png` | 2.6KB | ClientLogos marquee |
| `Newborns-VN.png` | 1.3KB | ClientLogos marquee |
| `Super-League-1.png` | 1.3KB | ClientLogos marquee |

### `/public/images/projects/` — 7 files

| File | Size | Used In |
|------|------|---------|
| `Hard-Rock-Shop.png` | 426KB | Projects section |
| `Marriot.jpg` | 49KB | Projects section |
| `Mercerdes-Benz.png` | 205KB | Projects section |
| `IronMan.jpg` | 50KB | Projects section |
| `2bu-brand.jpg` | 51KB | Projects + Golf hero |
| `Super-League.png` | 355KB | Projects section |
| `PHOTOtoFIT.png` | — | Projects section |

### `/public/images/services/` — 9 files

All service card images and icons present. ✅

### `/public/images/process/` — 4 files

| File | Used In |
|------|---------|
| `Step-1-1.png`, `Step-2-1.png` | Process section |
| `MG_8933-2.png`, `MG_8942.png` | Footer factory images |

### `/public/images/hero/` — 1 file

| File | Notes |
|------|-------|
| `Ticker-Bluesign.png` | Bluesign badge |

### `/public/images/fabrics/` — 3 files

| File | Size | Notes |
|------|------|-------|
| `sitip-technical-textles-fabrics-1.webp` | 2.4MB | ⚠️ Very large |
| `sitip-technical-textles-fabrics-2.webp` | 3.1MB | ⚠️ Very large |
| `sitip-technical-textles-fabrics-3.webp` | 2.3MB | ⚠️ Very large |

### `/public/images/products/` — 3 subcategories

| Directory | File Count | Status |
|-----------|-----------|--------|
| `headwear/` | 7 `.jpg` | ✅ All subcategories covered |
| `mens-womens/` | 8 `.jpg` (incl. vest) | ✅ All subcategories covered |
| `golf/` | 11 `.jpg` | ✅ All subcategories covered |

---

## ❌ Missing Images

| Referenced In | Image Path | Status |
|--------------|-----------|--------|
| `products.ts:22` | `/images/products/headwear-hero.png` | ~~MISSING~~ ✅ **FIXED** — Generated |
| `products.ts:39` | `/images/products/corporate-hero.png` | ~~MISSING~~ ✅ **FIXED** — Generated |

These are used by `[category].astro` as the hero banner for category landing pages. Currently renders as broken image.

---

## ⚠️ Image Optimization Issues

| Issue | Files | Recommendation | Priority |
|-------|-------|---------------|----------|
| Oversized fabric images | `sitip-*.webp` (2-3MB each) | Resize to max 1200px width, compress | **P1** |
| Root-level duplicates | Many images exist in both root `/images/` and subdirs | Clean up unused copies | **P3** |
| No WebP conversion | Most images are PNG/JPG | Convert to WebP for Cloudflare | **P2** |
| No `<img>` width/height | Many `<img>` tags lack dimensions | Add for CLS prevention | **P2** |

---

## Action Items

1. ~~**[P0]** Add missing hero images~~ ✅ **DONE** — Generated `headwear-hero.png` and `corporate-hero.png`, updated `products.ts` refs
2. **[P1]** Compress fabric images from 2-3MB → <500KB each
3. **[P2]** Convert remaining PNG/JPG assets to WebP format
4. **[P2]** Add explicit `width`/`height` attributes to `<img>` tags
5. **[P3]** Fix `Posrche-Collection.pdf` filename typo
6. **[P3]** Audit and remove duplicate root-level images
