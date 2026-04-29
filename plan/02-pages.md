# Page Plan — Route Inventory & Gap Analysis

> Compare all routes between production and local

---

## Site Architecture

```
Local (Astro SSR)                    Production (WordPress/Elementor)
├── /                                ├── /
├── /contact-us                      ├── /contact-us/
├── /fabrics                         ├── /fabrics/
├── /sublimation                     ├── /sublimation/
├── /laser-punching                  ├── /laser-punching/
├── /reflective                      ├── /reflective/
├── /hologram-stickers               ├── /hologram-stickers/
├── /hang-tags                       ├── /hang-tags/
├── /3d-configurator                 ├── /3d-configurator/
├── /sizing-charts                   ├── /sizing-charts/
├── /privacy-policy                  ├── /privacy-policy/
├── /terms-of-service                ├── /terms-of-service/
├── /[category]                      │
│   └── /[category]/[subcategory]    │
├── /headwear                        ├── /headwear/
│   ├── /headwear/trucker-cap        │   ├── /headwear/trucker-cap/
│   ├── /headwear/baseball-cap       │   ├── ... (same)
│   └── ...                          │   └── ...
├── /mens-and-womens-wear            ├── /mens-and-womens-wear/
│   └── ...                          │   └── ...
├── /golf-resort                     ├── /golf-resort/
│   └── ...                          │   └── ...
└── (no /gymwear, /sportswear)       └── (404 on these too)
```

---

## Page Status Matrix

### ✅ Working Pages (13 static + dynamic routes)

| Route | Local File | Production Match | Notes |
|-------|-----------|-----------------|-------|
| `/` | `index.astro` | ✅ | Homepage |
| `/contact-us` | `contact-us.astro` | ✅ | Modernized layout |
| `/fabrics` | `fabrics.astro` | ✅ | Clean grid |
| `/sublimation` | `sublimation.astro` | ✅ | |
| `/laser-punching` | `laser-punching.astro` | ✅ | |
| `/reflective` | `reflective.astro` | ✅ | |
| `/hologram-stickers` | `hologram-stickers.astro` | ✅ | |
| `/hang-tags` | `hang-tags.astro` | ✅ | |
| `/3d-configurator` | `3d-configurator.astro` | ✅ | |
| `/sizing-charts` | `sizing-charts.astro` | ✅ | |
| `/privacy-policy` | `privacy-policy.astro` | ✅ | |
| `/terms-of-service` | `terms-of-service.astro` | ✅ | |
| `/[category]` | `[category].astro` | ✅ | Dynamic — headwear, mens-and-womens-wear, golf-resort |
| `/[category]/[subcategory]` | `[category]/[subcategory].astro` | ✅ | Dynamic — all product detail pages |

### ❌ 404 Pages (Same on Both Sites)

| Route | Notes |
|-------|-------|
| `/gymwear` | Not a category in `products.ts` — legacy URL, never existed |
| `/sportswear` | Same — legacy URL |

### 🔗 Navigation Links Pointing to `#` (Placeholder)

| Link | Location | Notes |
|------|----------|-------|
| Labels | Customization dropdown | No dedicated page, links to `#` |
| Buttons | Customization dropdown | No dedicated page, links to `#` |
| Buckle | Customization dropdown | No dedicated page, links to `#` |
| Product Features header | Customization dropdown | Group label, links to `#` |
| Custom Accessories header | Customization dropdown | Group label, links to `#` |

> **Note:** These `#` links also exist on production. They are **intentional** section headers, not broken links. Labels/Buttons/Buckle don't have dedicated pages on either site.

---

## Dynamic Route System

The local site uses Astro dynamic routes with `products.ts` as data source:

```
src/data/products.ts → 3 categories, 26 subcategories
src/pages/[category].astro → Category landing pages
src/pages/[category]/[subcategory].astro → Product detail pages
```

### Categories in `products.ts`

| Category ID | Name | Subcategories |
|-------------|------|---------------|
| `headwear` | Custom Headwear | 7 (trucker-cap, baseball-cap, flat-brimmed-cap, running-cap, cycling-cap, visor, beanie) |
| `mens-and-womens-wear` | Men's & Women's Wear | 8 (poloshirt, full-button-down-shirt, t-shirt, jacket, half-zip, pants, shorts, vest) |
| `golf-resort` | Golf / Resort | 11 (golf-shirt, full-button-down-shirt, visor, trucker-cap, baseball-cap, laser-cut-cap, bucket-hat, pants, shorts, skorts, golf-accessories) |

### Production vs Local — Product Subcategories

| Category | Production | Local | Delta |
|----------|-----------|-------|-------|
| Headwear | 7 items | 7 items | ✅ Match |
| Men's & Women's | 7 items (no Vest) | 8 items (has Vest) | ⚠️ Local has extra "Vest" |
| Golf / Resort | 11 items | 11 items | ✅ Match |

---

## Action Items

1. **[P1]** Verify "Vest" subcategory — local has it in `products.ts` but production does not list it in menu. Keep or remove?
2. **[P2]** Consider creating simple landing pages for Labels, Buttons, Buckle if business wants them
3. **[P2]** Trailing slash consistency — production uses trailing slashes, local does not. Ensure Cloudflare handles redirects correctly
