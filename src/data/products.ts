export interface SubCategory {
  id: string;
  name: string;
  image: string;
  description?: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  pdfBrochure?: string;
  subcategories: SubCategory[];
}

export const categories: Category[] = [
  {
    id: "headwear",
    name: "Custom Headwear",
    description: "Custom caps, visors, and beanies to complete your team or corporate look.",
    image: "/images/products/headwear-hero.jpg",
    pdfBrochure: "/documents/ICM-eBrochure-Headwear-2024.pdf",
    subcategories: [
      { id: "trucker-cap", name: "Trucker Cap", image: "/images/products/headwear/trucker-cap.jpg" },
      { id: "baseball-cap", name: "Baseball Cap", image: "/images/products/headwear/baseball-cap.jpg" },
      { id: "flat-brimmed-cap", name: "Flat Brimmed Cap", image: "/images/products/headwear/flat-brimmed-cap.jpg" },
      { id: "running-cap", name: "Running Cap", image: "/images/products/headwear/running-cap.jpg" },
      { id: "cycling-cap", name: "Cycling Cap", image: "/images/products/headwear/cycling-cap.jpg" },
      { id: "visor", name: "Visor", image: "/images/products/headwear/visor.jpg" },
      { id: "beanie", name: "Beanie", image: "/images/products/headwear/beanie.jpg" }
    ]
  },
  {
    id: "mens-and-womens-wear",
    name: "Men's & Women's Wear",
    description: "High-quality corporate apparel, activewear, and casual wear for men and women.",
    image: "/images/products/corporate-hero.jpg",
    pdfBrochure: "/documents/Corporate_Logoed_Apparel.pdf",
    subcategories: [
      { id: "poloshirt", name: "Polo Shirt", image: "/images/products/mens-womens/poloshirt.jpg" },
      { id: "full-button-down-shirt", name: "Full Button Down Shirt", image: "/images/products/mens-womens/full-button-down-shirt.jpg" },
      { id: "t-shirt", name: "T-Shirt", image: "/images/products/mens-womens/t-shirt.jpg" },
      { id: "jacket", name: "Jacket", image: "/images/products/mens-womens/jacket.jpg" },
      { id: "half-zip", name: "Half Zip", image: "/images/products/mens-womens/half-zip.jpg" },
      { id: "pants", name: "Pants", image: "/images/products/mens-womens/pants.jpg" },
      { id: "shorts", name: "Shorts", image: "/images/products/mens-womens/shorts.jpg" },
      { id: "vest", name: "Vest", image: "/images/products/mens-womens/vest.jpg" }
    ]
  },
  {
    id: "golf-resort",
    name: "Golf / Resort",
    description: "Premium custom golf polos and resort apparel focusing on comfort and UV protection.",
    image: "/images/projects/2bu-brand.jpg",
    pdfBrochure: "/documents/Corporate_Logoed_Apparel.pdf",
    subcategories: [
      { id: "golf-shirt", name: "Golf Shirt", image: "/images/products/golf/golf-shirt.jpg" },
      { id: "full-button-down-shirt", name: "Full Button Down", image: "/images/products/golf/full-button-down-shirt.jpg" },
      { id: "visor", name: "Visor", image: "/images/products/golf/visor.jpg" },
      { id: "trucker-cap", name: "Trucker Cap", image: "/images/products/golf/trucker-cap.jpg" },
      { id: "baseball-cap", name: "Baseball Cap", image: "/images/products/golf/baseball-cap.jpg" },
      { id: "laser-cut-cap", name: "Laser Cut Cap", image: "/images/products/golf/laser-cut-cap.jpg" },
      { id: "bucket-hat", name: "Bucket Hat", image: "/images/products/golf/bucket-hat.jpg" },
      { id: "pants", name: "Pants", image: "/images/products/golf/pants.jpg" },
      { id: "shorts", name: "Shorts", image: "/images/products/golf/shorts.jpg" },
      { id: "skorts", name: "Skorts", image: "/images/products/golf/skorts.jpg" },
      { id: "golf-accessories", name: "Accessories", image: "/images/products/golf/golf-accessories.jpg" }
    ]
  },
  {
    id: "cycling",
    name: "Custom Cycling",
    description: "High-performance aerodynamic custom cycling apparel for teams and clubs.",
    image: "/images/products/cycling-hero.jpg",
    pdfBrochure: "/documents/ICM-eBrochure-2025.pdf",
    subcategories: [
      { id: "jerseys", name: "Cycling Jerseys", image: "/images/products/cycling/jerseys.jpg" },
      { id: "bibs-shorts", name: "Bibs & Shorts", image: "/images/products/cycling/bibs.jpg" },
      { id: "jackets-vests", name: "Jackets & Vests", image: "/images/products/cycling/jackets.jpg" },
      { id: "skinsuits", name: "Skinsuits", image: "/images/products/cycling/skinsuits.jpg" }
    ]
  },
  {
    id: "triathlon",
    name: "Custom Triathlon",
    description: "Advanced triathlon suits designed for speed, comfort, and endurance across all three disciplines.",
    image: "/images/products/triathlon-hero.jpg",
    pdfBrochure: "/documents/IRONMAN-COLLECTION.pdf",
    subcategories: [
      { id: "tri-suits", name: "Tri Suits", image: "/images/products/triathlon/suits.jpg" },
      { id: "tri-tops", name: "Tri Tops", image: "/images/products/triathlon/tops.jpg" },
      { id: "tri-shorts", name: "Tri Shorts", image: "/images/products/triathlon/shorts.jpg" }
    ]
  },
  {
    id: "running",
    name: "Custom Running",
    description: "Lightweight and breathable running gear tailored for casual runners and elite marathoners.",
    image: "/images/products/running-hero.jpg",
    subcategories: [
      { id: "singlets", name: "Running Singlets", image: "/images/products/running/singlets.jpg" },
      { id: "tees", name: "Running Tees", image: "/images/products/running/tees.jpg" },
      { id: "shorts", name: "Running Shorts", image: "/images/products/running/shorts.jpg" }
    ]
  }
];

export function getCategoryById(id: string): Category | undefined {
  return categories.find(c => c.id === id);
}

export function getAllCategories(): Category[] {
  return categories;
}
