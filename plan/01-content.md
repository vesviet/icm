# Content Plan — Local vs Production Comparison

> Baseline: [icmfactorydirect.com](https://icmfactorydirect.com/) (WordPress/Elementor)
> Target: localhost:4322 (Astro + Tailwind + Cloudflare)

## Overall Status: ~90% Content Parity

---

## 1. Homepage Content

### ✅ Matched Sections

| Section | Status | Notes |
|---------|--------|-------|
| Hero banner text + CTA | ✅ Match | "Unlock the potential of your brand…" |
| Core Values (3 cards) | ✅ Match | Excellent Material / Quality Product / Trusted by Clients |
| About — Vision & Mission | ✅ Match | Lists match production |
| Services (6 cards) | ✅ Match | Custom Design, Fit, Private Label, Performance, Sublimation, Quick Turnaround |
| Client Logos marquee | ✅ Match | HardRock, JW Marriott, IronMan, etc. |
| Why Choose Us | ✅ Match | Testimonial quote present |
| CTA Banner | ✅ Match | "Take your Sportswear Line…" |
| Projects / Brand Collabs | ✅ Match | 7 projects with VIEW MORE links |
| Fabrics (3 cards) | ✅ Match | Sitip Italy, Lightweight, OEKO-TEX |
| Process (4 steps) | ✅ Match | Consultation → Concept → Production → Final Result |
| FAQ (6 items) | ✅ Match | All Q&A identical |

### ⚠️ Discrepancies

| Issue | Production | Local | File | Priority |
|-------|-----------|-------|------|----------|
| Factory Numbers — Garment count | "Millions⁺" (static text) | ~~`data-target="0"` → "0 Millions+"~~ → **FIXED** to static "Millions⁺" | `FactoryNumbers.astro:35` | ~~P0~~ ✅ |
| Factory Numbers — Export Countries | 38 (legacy) / varies | 81 | `FactoryNumbers.astro:28` | **P1** — verify correct value |
| Factory Numbers — Years Experience | 20+ (some text says 20) | 29 | `FactoryNumbers.astro:21` | **P1** — verify correct value |
| Articles section | Long-form SEO article about top 4 manufacturers in Vietnam | Component `Articles.astro` exists | `Articles.astro` | **P1** — verify content migrated |
| E-Brochure label | "E-BROCHURE 2026" → links to 2025 PDF | Same mismatch | `Header.astro:174` | **P2** — either rename PDF or update label |
| "Sizing Charts" in High Tech dropdown | Only "3D Configurator" shown | Both "3D Configurator" and "Sizing Charts" | `Header.astro:201` | **P2** — local is better, keep |

---

## 2. Contact Us Page (`/contact-us`)

| Item | Status | Notes |
|------|--------|-------|
| Headquarters info | ✅ Match | Address, phone, email, map |
| Contact form | ✅ Present | Modern 2-column layout (local improvement) |
| Hero background | ⚠️ | Uses JW Marriott image — should use a neutral factory/brand image |

---

## 3. Fabrics Page (`/fabrics`)

| Item | Status | Notes |
|------|--------|-------|
| Fabric grid | ✅ Present | Clean grid layout |
| Individual fabric detail pages | ⚠️ | Ensure full text migration from production WordPress |
| Fabric images | ✅ | 3 Sitip webp images in `/public/images/fabrics/` |

---

## 4. Customization Pages

| Page | Status | File |
|------|--------|------|
| `/sublimation` | ✅ Working | `sublimation.astro` |
| `/laser-punching` | ✅ Working | `laser-punching.astro` |
| `/reflective` | ✅ Working | `reflective.astro` |
| `/hologram-stickers` | ✅ Working | `hologram-stickers.astro` |
| `/hang-tags` | ✅ Working | `hang-tags.astro` |

---

## 5. Legal / Footer Pages

| Page | Status | File |
|------|--------|------|
| `/privacy-policy` | ✅ Working | `privacy-policy.astro` (18.5KB) |
| `/terms-of-service` | ✅ Working | `terms-of-service.astro` (15.5KB) |

---

## 6. Footer Content

| Item | Production | Local | Status |
|------|-----------|-------|--------|
| Disclaimer text | ✅ Present | ✅ Match | OK |
| Quick Links (7 items) | About, Contact, Sizing, Privacy, Terms, ISO 18184, UALS | ✅ Match | OK |
| Company info + Tax ID | ✅ | ✅ Match | OK |
| Social links (3) | FB, IG, YT | ✅ Match | OK |
| Copyright | "Copyright 2023" | ✅ Match | OK |

---

## Action Items

1. ~~**[P0]** Fix `FactoryNumbers.astro:35`~~ ✅ **DONE** — changed to static "Millions⁺" text matching production
2. **[P1]** Verify Years Experience (29) and Export Countries (81) with business team — production confirms these values
3. **[P1]** Review `Articles.astro` for full SEO article content migration
4. **[P2]** Fix E-Brochure label/PDF mismatch (2025 PDF labeled as 2026)
5. **[P2]** Replace Contact Us hero background with neutral image
