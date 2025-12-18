# 🛍️ E-Commerce Website

A modern, responsive e-commerce website built with Next.js 16, React 19, and Tailwind CSS. This project features a beautiful UI with dark/light theme support, product listings, featured collections, testimonials, and more.

## ✨ Features

- 🎨 **Modern UI/UX** - Clean and responsive design with Tailwind CSS
- 🌓 **Theme Support** - Light/Dark mode toggle using next-themes
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- 🖼️ **Image Optimization** - Next.js Image component for optimized images
- 🎯 **Product Showcase** - Featured products and collections
- 💬 **Testimonials** - Customer reviews section
- 📊 **Statistics Counter** - Animated counters for business metrics
- 🎠 **Header Slider** - Hero banner with product highlights
- 🔍 **Product Listings** - Browse all products with ratings and prices
- 🎁 **Featured Collections** - Curated product collections

## 🚀 Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **UI Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Theme:** [next-themes](https://github.com/pacocoursey/next-themes)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
- **Language:** JavaScript/JSX
- **Type Safety:** TypeScript (configured)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 18.x or higher
- **npm**, **yarn**, **pnpm**, or **bun** package manager

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd ecommerce
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📜 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint to check code quality

## 📁 Project Structure

```
ecommerce/
├── app/
│   ├── (home)/
│   │   └── page.jsx          # Home page
│   ├── products/
│   │   └── page.jsx          # Products page
│   ├── layout.jsx            # Root layout with theme provider
│   └── globals.css           # Global styles
├── components/
│   ├── Navbar.jsx            # Navigation bar
│   ├── Footer.jsx            # Footer component
│   ├── HeaderSlider.jsx      # Hero slider
│   ├── Productlist.jsx       # Product grid/list
│   ├── FeaturesProduct.jsx   # Featured collections
│   ├── Banner.jsx            # Promotional banner
│   ├── Testimonial.jsx       # Customer testimonials
│   ├── Counter.jsx           # Statistics counter
│   ├── TrustedBy.jsx         # Trust badges
│   └── ThemeSwitcher.jsx     # Theme toggle
├── assets/
│   ├── assets.js             # Asset imports
│   ├── productData.js        # Product data
│   └── [images]              # Image assets
├── public/                   # Static files
└── package.json              # Dependencies
```

## 🎨 Components Overview

### **Navbar**
- Responsive navigation with mobile menu
- Logo, navigation links, search, cart, and user icons
- Theme switcher integration

### **HeaderSlider**
- Hero banner with featured products
- Image carousel/slider functionality

### **Productlist**
- Displays products in a grid layout
- Shows product image, name, description, rating, and price
- Optional "View All" button

### **FeaturesProduct**
- Featured product collections
- Three main categories: Headphones, Earphones, Laptops
- Responsive grid layout

### **Banner**
- Promotional banners and call-to-action sections

### **Testimonial**
- Customer reviews and testimonials

### **Counter**
- Animated statistics counters
- Business metrics display

### **TrustedBy**
- Trust badges and partner logos

## 🎯 Pages

### **Home Page** (`/`)
- Header slider
- Trusted by section
- Featured products (first 10)
- Featured collections
- Promotional banner
- Testimonials
- Statistics counter

### **Products Page** (`/products`)
- Full product catalog
- All available products
- Product grid layout

## 🎨 Styling

The project uses **Tailwind CSS 4** for styling with:
- Responsive breakpoints (sm, md, lg, xl)
- Custom color scheme
- Hover effects and transitions
- Mobile-first approach

## 🌓 Theme Support

The application supports light and dark themes using `next-themes`. The theme can be toggled using the `ThemeSwitcher` component.

## 📦 Product Data

Product data is stored in `assets/productData.js` and includes:
- Product ID
- Name
- Description
- Rating
- Price (in EGP)
- Image source

## 🚀 Deployment

### Deploy on Vercel

The easiest way to deploy this Next.js app is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository on Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Deploy!

### Other Platforms

You can also deploy on:
- **Netlify** - Connect your Git repository
- **AWS Amplify** - Full-stack deployment
- **Railway** - Simple deployment platform
- **Docker** - Containerized deployment

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

Built with ❤️ using Next.js and React

## 🔗 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Next Themes Documentation](https://github.com/pacocoursey/next-themes)

---

**Happy Coding! 🚀**
