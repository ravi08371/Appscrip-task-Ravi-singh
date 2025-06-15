# 🛍️ Mettā Muse – Artisan E-Commerce Frontend

A fully responsive and SEO-optimized e-commerce web application built with **Next.js**. It allows users to browse, filter, and sort through products like **Clothes, electronics, and jewelry**, with cart and wishlist functionality powered by **FakeStoreAPI**.

🔗 **Live Demo**: https://appscrip-task-ravi-singh.netlify.app/

---

## ✨ Features

- 🔎 Product filtering by category (e.g., Clothes, electronics, jewelry)
- 📊 Sorting by price High to Low, Low to High.
- 🔐 Filter hide/show toggle for better UX
- 📱 Fully responsive layout (mobile/tablet/desktop)
- 🧭 Dynamic mobile-friendly category dropdown
- 🔄 sorting functionality
- 🖼️ Centralized image and icon management via `utils/image.js`
- 🧠 SEO-optimized with metadata, H1/H2 usage, and semantic tags
- ⚙️ Organized file/folder structure for scalability

---

## 🧠 SEO Settings

SEO settings are configured in `app/layout.js` using the `metadata` object. Semantic tags like `<h1>` and `<h2>` are also used for content sections:

```js
export const metadata = {
  title: "Shop | Mettā Muse",
  description: "Explore handmade artisan products from around the world.",
  keyword: ["handmade", "artisans", "sustainable fashion", "electronics", "jewelry"],
};

Image Management (utils/image.js)
All UI-related assets are imported and exported centrally from utils/image.js:

```js
import Logo from "../../public/assets/Logo.png";
import cartIcon from "../../public/assets/cartIcon.png";
import searchIcon from "../../public/assets/searchIcon.png";
// ...
export const image = {
  Logo,
  cartIcon,
  searchIcon,
  // more icons...
};
import { image } from "@/utils/image";
<img src={image.Logo} alt="Logo" />


Getting Started
1. Clone the Repository
git clone (https://github.com/ravi08371/Appscrip-task-Ravi-singh.git)
npm install
2. Run Development Server
npm run dev
