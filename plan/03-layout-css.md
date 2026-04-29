# Layout & CSS Plan — Design System Comparison

> Production: WordPress + Elementor (~2MB CSS)
> Local: Astro + Tailwind CSS 3.4 (utility-first)

---

## Decision: Do NOT Extract Elementor CSS

Production CSS is Elementor-generated, bloated, and non-reusable. Keep local Tailwind.

---

## Color Palette

| Token | Production | Local | Action |
|-------|-----------|-------|--------|
| Primary accent | `#9B5678` | `#A6587C` | Keep local (brighter) |
| Primary hover | ~`#7D405C` | `#7D405C` | ✅ Match |
| Navy dark | `#2D3E50` | `#1D2F40` | Keep local (deeper) |
| Text light | `#F4F4F4` | `#F4F4F4` | ✅ Match |
| Text muted | `#D9D9D9` | `#D9D9D9` | ✅ Match |
| Top bar bg | `#F2F2F2` | `#F2F2F2` | ✅ Match |
| Gold accent | — | `#f0c040` | Local-only, adds premium feel |

---

## Typography

| Element | Production | Local | Action |
|---------|-----------|-------|--------|
| Body | System sans / Open Sans, 16px | Nunito Sans, 17.6px | Keep local |
| Headings | Elementor default | Fira Sans 300–800 | Keep local |
| Navigation | System sans ~14px uppercase | Yantramanav 17.6px | Keep local |

All local fonts self-hosted via `@fontsource`. Intentional upgrade.

---

## Layout

| Property | Production | Local | Match? |
|----------|-----------|-------|--------|
| Max width | 1340px | 1340px | ✅ |
| Side padding | 10px | 10px | ✅ |
| Grid: Services | 3-col | 3-col | ✅ |
| Grid: Factory Numbers | 4-col | 4-col | ✅ |
| Grid: Footer | 3-col | 3-col | ✅ |
| Mega-menu | 3-col | 3-col | ✅ |
| Breakpoints | 768/1024 | md/lg | ✅ |

---

## Animations

| Animation | Production | Local | Status |
|-----------|-----------|-------|--------|
| Scroll reveal | Elementor entrance | `.reveal` + IntersectionObserver | ✅ |
| Counter animation | Elementor widget | Custom JS `data-target` | ✅ |
| Logos marquee | Elementor | `animation: marquee 25s` | ✅ |
| Parallax bg | Elementor motion | `.parallax-bg` | ✅ |
| Dropdown hover | CSS transitions | `transition-all duration-300` | ✅ |

---

## Header

| Feature | Production | Local | Status |
|---------|-----------|-------|--------|
| Top bar | ✅ | ✅ | Match |
| Sticky scroll | ✅ | ✅ | `header-scrolled` class |
| Logo shrink | ✅ | ✅ | 181→120px |
| Mega-menu 3-col | ✅ | ✅ | Match |
| Gold border accent | — | ✅ | Local improvement |
| Mobile hamburger | ✅ | ✅ | `<details>` based |

---

## Performance

| Metric | Production | Local |
|--------|-----------|-------|
| CSS size | ~2MB | ~20KB |
| JS | jQuery + Elementor | Vanilla JS |
| Fonts | Google CDN | Self-hosted |
| SSR | PHP | Astro/Cloudflare |

---

## Action Items

1. **[None]** No Elementor CSS extraction needed
2. **[P2]** Verify mobile mega-menu responsive behavior
3. **[P2]** Add subtle card shadows to match production visual weight
