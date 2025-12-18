# 🛍️ E-Commerce Website

A modern, responsive e-commerce website built with Next.js 16, React 19, and Tailwind CSS. This project features a beautiful UI with dark/light theme support, product listings, featured collections, testimonials, contact forms, and more.

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
- 📝 **Contact Form** - Interactive contact form with Web3Forms integration
- 📄 **Product Details** - Detailed product pages with image gallery
- 🛒 **Shopping Features** - Add to cart, wishlist, and quick view functionality
- 📱 **Touch Support** - Mobile-friendly touch interactions for product cards

## 🚀 Tech Stack

### Core Framework & Libraries

- **Framework:** [Next.js 16.0.10](https://nextjs.org/) (App Router)

  - Server-side rendering (SSR)
  - Static site generation (SSG)
  - API routes support
  - Image optimization
  - Font optimization with Google Fonts

- **UI Library:** [React 19.2.3](https://react.dev/)

  - Latest React features
  - Server Components support
  - Client Components for interactivity

- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
  - Utility-first CSS framework
  - Responsive design utilities
  - Custom color schemes
  - PostCSS integration

### Dependencies

#### Production Dependencies

1. **next** `^16.0.10`

   - React framework for production
   - Built-in optimizations
   - File-based routing

2. **next-themes** `^0.4.6`

   - Theme management for Next.js
   - Dark/light mode support
   - System preference detection
   - Prevents flash of unstyled content

3. **react** `^19.2.3`

   - JavaScript library for building user interfaces
   - Component-based architecture
   - Virtual DOM

4. **react-dom** `^19.2.3`

   - React package for DOM manipulation
   - Server-side rendering support

5. **react-icons** `^5.5.0`
   - Popular icon library
   - Includes icons from Font Awesome, Material Design, Feather, and more
   - Tree-shakeable icons

#### Development Dependencies

1. **@tailwindcss/postcss** `^4`

   - PostCSS plugin for Tailwind CSS
   - CSS processing and optimization

2. **@types/node** `^20`

   - TypeScript type definitions for Node.js
   - Type safety for Node.js APIs

3. **@types/react** `^19`

   - TypeScript type definitions for React
   - Type safety for React components

4. **@types/react-dom** `^19`

   - TypeScript type definitions for React DOM
   - Type safety for React DOM APIs

5. **eslint** `^9`

   - JavaScript/TypeScript linter
   - Code quality and consistency

6. **eslint-config-next** `^16.0.10`

   - ESLint configuration for Next.js
   - Best practices and rules

7. **tailwindcss** `^4`

   - Utility-first CSS framework
   - Customizable design system

8. **typescript** `^5`
   - TypeScript compiler
   - Static type checking
   - Enhanced IDE support

### Fonts

- **Geist Sans** - Modern sans-serif font from Vercel
- **Geist Mono** - Monospace font for code

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 18.x or higher
- **npm** (comes with Node.js), **yarn**, **pnpm**, or **bun** package manager
- **Git** for version control

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

- `npm run dev` - Start the development server on port 3000
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint to check code quality

## 📁 Project Structure

```
ecommerce/
├── app/                          # Next.js App Router directory
│   ├── (home)/                   # Route group for home page
│   │   └── page.jsx              # Home page component
│   ├── about/                    # About page route
│   │   └── page.jsx              # About page component
│   ├── contact/                  # Contact page route
│   │   └── page.jsx              # Contact page component
│   ├── products/                 # Products listing page route
│   │   └── page.jsx              # Products page component
│   ├── product_details/          # Product details route
│   │   └── [id]/                 # Dynamic route parameter
│   │       └── page.jsx          # Product details page component
│   ├── layout.jsx                # Root layout with theme provider
│   ├── globals.css               # Global styles and Tailwind imports
│   └── favicon.ico               # Site favicon
├── components/                   # React components directory
│   ├── AboutUsSection.jsx       # About us section component
│   ├── Banner.jsx                # Promotional banner component
│   ├── ContactUsSection.jsx      # Contact form component
│   ├── Counter.jsx               # Statistics counter component
│   ├── FeaturesProduct.jsx       # Featured products section
│   ├── Footer.jsx                # Footer component
│   ├── HeaderSlider.jsx          # Hero slider/carousel
│   ├── Navbar.jsx                # Navigation bar component
│   ├── ProductCard.jsx           # Individual product card
│   ├── ProductDetailsSection.jsx # Product details display
│   ├── productList.jsx           # Product grid/list component
│   ├── Testimonial.jsx            # Customer testimonials
│   ├── ThemeSwitcher.jsx         # Theme toggle component
│   ├── TrustedBy.jsx             # Trust badges section
│   └── css/                      # Component-specific styles
│       └── Navbar.css            # Navbar custom styles
├── assets/                       # Static assets directory
│   ├── assets.js                 # Asset imports and exports
│   ├── productData.js            # Product data (legacy)
│   └── [images]/                 # Image assets (PNG, SVG, WebP)
├── lib/                          # Utility libraries
│   └── product.js                # Product data and utilities
├── public/                       # Public static files
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── .gitignore                    # Git ignore rules
├── eslint.config.mjs             # ESLint configuration
├── next.config.ts                # Next.js configuration
├── package.json                  # Project dependencies
├── postcss.config.mjs            # PostCSS configuration
├── README.md                     # Project documentation
├── tailwind.config.js            # Tailwind CSS configuration
└── tsconfig.json                 # TypeScript configuration
```

## 🎨 Components Overview

### **Navbar** (`components/Navbar.jsx`)

- Responsive navigation bar with mobile menu
- Logo, navigation links (Home, Shop, About Us, Contact)
- Search, cart, and user account icons
- Sticky positioning
- Active route highlighting
- Mobile hamburger menu with slide-out drawer

### **HeaderSlider** (`components/HeaderSlider.jsx`)

- Hero banner with featured products
- Image carousel/slider functionality
- Responsive design
- Call-to-action buttons

### **ProductCard** (`components/ProductCard.jsx`)

- Individual product display card
- Product image with hover effects
- Quick action buttons (View, Wishlist, Cart)
- Touch-friendly interactions for mobile
- Product name, description, and price display

### **ProductList** (`components/productList.jsx`)

- Grid layout for product listings
- Responsive columns (2-5 columns based on screen size)
- Optional "View All" button
- Displays multiple ProductCard components

### **ProductDetailsSection** (`components/ProductDetailsSection.jsx`)

- Detailed product information page
- Image gallery with thumbnail navigation
- Product specifications table
- Price display with discount information
- Add to cart and buy now buttons
- Related products section

### **FeaturesProduct** (`components/FeaturesProduct.jsx`)

- Featured product collections showcase
- Three main categories: Headphones, Earphones, Laptops
- Responsive grid layout
- Hover effects and transitions

### **Banner** (`components/Banner.jsx`)

- Promotional banners
- Call-to-action sections
- Customizable title, description, and button text
- Responsive image display

### **Testimonial** (`components/Testimonial.jsx`)

- Customer reviews and testimonials
- Social proof section
- Responsive design

### **Counter** (`components/Counter.jsx`)

- Animated statistics counters
- Business metrics display
- Number animations

### **TrustedBy** (`components/TrustedBy.jsx`)

- Trust badges and partner logos
- Brand credibility section

### **ContactUsSection** (`components/ContactUsSection.jsx`)

- Interactive contact form
- Web3Forms integration for form submissions
- Form validation
- Success/error message handling
- Fields: First Name, Last Name, Company, Email, Phone, Message
- Privacy policy checkbox

### **AboutUsSection** (`components/AboutUsSection.jsx`)

- About us content section
- Company information display
- Team or company highlights

### **Footer** (`components/Footer.jsx`)

- Site footer with links
- Social media icons
- Copyright information
- Additional navigation

### **ThemeSwitcher** (`components/ThemeSwitcher.jsx`)

- Theme toggle component
- Light/dark mode switching
- System preference detection

## 🎯 Pages

### **Home Page** (`/`)

- **Route:** `app/(home)/page.jsx`
- Header slider with featured products
- Trusted by section
- Featured products (first 10 products)
- Featured collections showcase
- Promotional banner
- Customer testimonials
- Statistics counter
- Footer

### **Products Page** (`/products`)

- **Route:** `app/products/page.jsx`
- Full product catalog
- All available products in grid layout
- Product filtering and display
- Banner section
- Testimonials
- Statistics counter

### **Product Details Page** (`/product_details/[id]`)

- **Route:** `app/product_details/[id]/page.jsx`
- Dynamic route based on product ID
- Product image gallery with thumbnails
- Product name, description, and specifications
- Price with discount information
- Add to cart and buy now buttons
- Related products section
- SEO metadata generation

### **About Page** (`/about`)

- **Route:** `app/about/page.jsx`
- About us content
- Company information
- Team or mission section

### **Contact Page** (`/contact`)

- **Route:** `app/contact/page.jsx`
- Contact form
- Company contact information
- Form submission handling

## 🎨 Styling

The project uses **Tailwind CSS 4** for styling with:

- **Responsive Breakpoints:**

  - `sm:` - 640px and up
  - `md:` - 768px and up
  - `lg:` - 1024px and up
  - `xl:` - 1280px and up

- **Custom Color Scheme:**

  - Primary: Red (#EF4444, #DC2626)
  - Gray scale for text and backgrounds
  - Hover states and transitions

- **Design Features:**
  - Hover effects and transitions
  - Mobile-first approach
  - Smooth animations
  - Shadow effects
  - Rounded corners
  - Gradient backgrounds

## 🌓 Theme Support

The application supports light and dark themes using `next-themes`:

- **Theme Provider:** Wraps the entire application
- **Default Theme:** Light mode
- **Theme Persistence:** Saves user preference
- **System Preference:** Detects and respects system theme
- **No Flash:** Prevents flash of unstyled content on load

## 📦 Product Data

Product data is managed in `lib/product.js`:

### Product Structure:

```javascript
{
  _id: string,              // Unique product identifier
  userId: string,           // User who created the product
  name: string,             // Product name
  description: string,      // Product description
  price: string,            // Original price (e.g., "499 EGP")
  offerPrice: string,       // Discounted price (e.g., "399 EGP")
  image: Array,             // Array of product images
  category: string,         // Product category
  date: number,             // Creation timestamp
  __v: number               // Version key
}
```

### Product Categories:

- Earphone
- Headphone
- Smartphone
- Accessories
- Camera
- Laptop

## 🔧 Configuration Files

### **next.config.ts**

- Next.js configuration
- Image domains
- Environment variables

### **tailwind.config.js**

- Tailwind CSS configuration
- Custom theme settings
- Plugin configurations

### **tsconfig.json**

- TypeScript configuration
- Compiler options
- Path aliases

### **eslint.config.mjs**

- ESLint rules and configuration
- Next.js specific rules
- Code quality standards

### **postcss.config.mjs**

- PostCSS configuration
- Tailwind CSS plugin
- CSS processing

## 🚀 Deployment

### Deploy on Vercel (Recommended)

The easiest way to deploy this Next.js app is using [Vercel](https://vercel.com):

1. **Push your code to GitHub**

   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Import your repository on Vercel**

   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository

3. **Configure build settings**

   - Vercel will automatically detect Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

4. **Deploy!**
   - Click "Deploy"
   - Your site will be live in minutes

### Environment Variables

If you need environment variables:

1. Go to your Vercel project settings
2. Navigate to "Environment Variables"
3. Add your variables (e.g., API keys, database URLs)

### Other Deployment Platforms

You can also deploy on:

- **Netlify**

  - Connect your Git repository
  - Build command: `npm run build`
  - Publish directory: `.next`

- **AWS Amplify**

  - Full-stack deployment
  - CI/CD integration
  - AWS services integration

- **Railway**

  - Simple deployment platform
  - Automatic deployments
  - Database support

- **Docker**
  - Containerized deployment
  - Multi-stage builds
  - Production-ready images

## 🔒 Security

- **Dependencies:** All packages are kept up to date
- **Next.js:** Latest stable version (16.0.10)
- **React:** Latest stable version (19.2.3)
- **Form Security:** Web3Forms integration with access keys
- **Image Optimization:** Next.js automatic image optimization
- **Type Safety:** TypeScript configuration for type checking

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🐛 Troubleshooting

### Common Issues

1. **Module not found errors**

   - Ensure all dependencies are installed: `npm install`
   - Check file paths and case sensitivity

2. **Build errors**

   - Clear `.next` folder: `rm -rf .next`
   - Clear node_modules: `rm -rf node_modules && npm install`
   - Check for TypeScript errors

3. **Theme not working**

   - Ensure `next-themes` is installed
   - Check ThemeProvider in layout.jsx

4. **Images not loading**
   - Verify image paths in assets folder
   - Check Next.js Image component configuration

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. **Fork the project**

   ```bash
   git clone <your-fork-url>
   cd ecommerce
   ```

2. **Create your feature branch**

   ```bash
   git checkout -b feature/AmazingFeature
   ```

3. **Make your changes**

   - Write clean, readable code
   - Follow existing code style
   - Add comments where necessary

4. **Commit your changes**

   ```bash
   git commit -m 'Add some AmazingFeature'
   ```

5. **Push to the branch**

   ```bash
   git push origin feature/AmazingFeature
   ```

6. **Open a Pull Request**
   - Describe your changes
   - Reference any related issues

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

Built with ❤️ using Next.js and React

## 🔗 Resources

### Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Next Themes Documentation](https://github.com/pacocoursey/next-themes)
- [React Icons Documentation](https://react-icons.github.io/react-icons/)

### Package Links

- [Next.js on npm](https://www.npmjs.com/package/next)
- [React on npm](https://www.npmjs.com/package/react)
- [Tailwind CSS on npm](https://www.npmjs.com/package/tailwindcss)
- [next-themes on npm](https://www.npmjs.com/package/next-themes)
- [react-icons on npm](https://www.npmjs.com/package/react-icons)

### Tools & Services

- [Vercel](https://vercel.com) - Deployment platform
- [Web3Forms](https://web3forms.com) - Form submission service
- [Google Fonts](https://fonts.google.com) - Font optimization

---

**Happy Coding! 🚀**
