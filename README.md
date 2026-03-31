# 🚀 DigiTools — Supercharge Your Digital Workflow

A fully responsive React + Tailwind CSS + DaisyUI web application with cart functionality, product listings, and toast notifications.

---

## 🛠 Tech Stack

| Technology       | Purpose                          |
|------------------|----------------------------------|
| React 18         | UI framework (JSX components)    |
| Vite             | Dev server & build tool          |
| Tailwind CSS     | Utility-first styling            |
| DaisyUI          | Tailwind component library       |
| React-Toastify   | Toast notifications              |

---

## 📁 Project Structure

```
digitools/
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── src/
    ├── main.jsx              ← React entry point
    ├── App.jsx               ← Root component
    ├── index.css             ← Global styles + Tailwind directives
    ├── assets/
    │   └── icons/            ← All product icon PNG files
    ├── data/
    │   └── products.js       ← JSON product data + icon map
    └── components/
        ├── Icons.jsx         ← Reusable SVG icon components
        ├── Navbar.jsx        ← Sticky glass navbar with cart count
        ├── Hero.jsx          ← Banner section
        ├── Stats.jsx         ← Stats bar (50K+, 200+, 4.9, 99%)
        ├── ProductsSection.jsx  ← Toggle wrapper (Products / Cart)
        ├── ProductCard.jsx   ← Individual product card
        ├── CartSection.jsx   ← Cart list + checkout
        ├── Steps.jsx         ← "Get Started in 3 Steps"
        ├── Pricing.jsx       ← 3-tier pricing cards
        └── Footer.jsx        ← Footer with links
```

---

## ⚡ Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Add your icon assets
Copy all your PNG icon files into:
```
src/assets/icons/
```
Required files:
- `portfolio.png`
- `social-media.png`
- `design-tool.png`
- `package.png`
- `operation.png`
- `rocket.png`
- `user.png`
- `Play.png`
- `writing_2327400_1.png`
- `shopping-cart.png`

### 3. Start dev server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173)

### 4. Build for production
```bash
npm run build
```

---

## 🧩 Features

- **Navbar** — Sticky glass effect, cart icon with live count, mobile hamburger menu
- **Hero Banner** — Dark gradient, heading, description, CTA buttons, mock dashboard card
- **Stats Bar** — 4 key metrics in a purple gradient band
- **Products / Cart Toggle** — Switch between product grid and cart with one click
- **Product Cards** — 3-column grid, tag badges (Popular / New / Best Seller), features list, Buy Now button
- **Cart** — Add/remove items, total price, Proceed to Checkout (clears cart)
- **Toast Notifications** — Add to cart ✅ | Remove ❌ | Checkout 🎉 (via React-Toastify)
- **Steps Section** — 3-step how-it-works with connector lines
- **Pricing** — 3 plans (Starter / Pro / Enterprise), Popular plan highlighted
- **Footer** — Brand, social links, 3 link columns, copyright bar
- **Fully Responsive** — Mobile, tablet, desktop

---

## 🔔 Toast Types

| Action             | Toast Type  | Color          |
|--------------------|-------------|----------------|
| Add to cart        | `success`   | Purple gradient |
| Already in cart    | `info`      | Cyan/blue       |
| Remove from cart   | `error`     | Red/orange      |
| Proceed to checkout| `success`   | Purple gradient |

---

## 📦 Adding / Editing Products

Open `src/data/products.js` and edit the `PRODUCTS` array. Each product has:

```js
{
  id: 1,
  name: 'Resume Builder Pro',
  description: 'Short description here.',
  price: 12,
  period: 'monthly',        // 'monthly' | 'yearly' | 'one-time'
  tag: 'Popular',           // Display label
  tagType: 'popular',       // 'popular' | 'new' | 'bestseller'
  features: ['Feature 1', 'Feature 2'],
  icon: 'portfolio',        // Key in ICON_MAP
}
```
