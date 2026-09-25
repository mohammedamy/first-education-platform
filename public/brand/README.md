# Next Target — Official Brand Assets & Design System
## شركة نكست تارجت للتدريب والاستشارات | Next Target for Training & Consultancy

This directory contains the complete archive of official brand identity assets, logos, and typography lockups for **Next Target (شركة نكست تارجت للتدريب والاستشارات)** permanently preserved in GitHub for future platform expansions, marketing, and multi-track educational collateral.

---

### 📦 Brand Assets Inventory

| File | Type | Target Background | Description |
| :--- | :--- | :--- | :--- |
| [`next_target_logo_dark.png`](./next_target_logo_dark.png) | Primary Logo | Dark / Navy (`#031E3D`) | Official logo with lime green `N` forward-arrow emblem (`#8DC63F`), bold white `EXT` + `®`, and white `TARGET`. |
| [`next_target_logo_light.png`](./next_target_logo_light.png) | Alternate Logo | Light / White (`#FFFFFF`) | Official logo on white background with lime green emblem and dark navy typography. |
| [`next_target_logo_transparent.png`](./next_target_logo_transparent.png) | Transparent Logo | Any surface | Clean alpha-transparent variant of the official Next Target logo for overlays. |
| [`next_target_tagline_dark.png`](./next_target_tagline_dark.png) | Subtitle Banner | Dark / Navy (`#031E3D`) | Official corporate title banner: `TRAINING & CONSULTANCY / شركة نكست تارجت للتدريب والاستشارات` with white typography on navy. |
| [`next_target_tagline_light.png`](./next_target_tagline_light.png) | Subtitle Banner | Light / White (`#FFFFFF`) | Official corporate title banner: `TRAINING & CONSULTANCY / شركة نكست تارجت للتدريب والاستشارات` with dark navy typography on white. |
| [`next_target_showcase_tablet.png`](./next_target_showcase_tablet.png) | UI Showcase | Showcase & Hero | Tablet & iPad device mockup displaying interactive learning metrics and student radar charts. |

---

### 🎨 Color Palette & Design Tokens

- **Brand Deep Navy (Primary Background / Corporate Dark):** `#031E3D` / `#0A192F`
- **Brand Growth Lime (Emblem Accent / Arrow):** `#8DC63F` / `#7BBF34`
- **Brand Vibrant Emerald (UI Accent & Focus States):** `#10B981` / `#059669`
- **Brand Clean White:** `#FFFFFF`
- **Brand Dark Slate (Borders & Muted Text):** `#1E293B` / `#334155`

---

### 💻 Code Integration Pattern

In Vite / React components, reference these assets using the dynamic helper `getAssetUrl` to ensure correct relative pathing across root and GitHub Pages subpath deployments:

```tsx
import { getAssetUrl } from '../../utils/assetUrl';

// In JSX:
<img 
  src={getAssetUrl('brand/next_target_logo_dark.png')} 
  alt="Next Target — نكست تارجت" 
  className="h-10 w-auto object-contain" 
/>
```
