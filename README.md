# ProductHub - Modern eCommerce Product Listing

A clean, modern, and production-ready eCommerce product listing UI built with **Next.js (App Router)** and **Tailwind CSS**. Features WhatsApp integration for direct product ordering.

## 🎯 Features

✅ **Responsive Grid Layout** - Mobile-first design with dynamic grid columns (1 on mobile, 2 on tablet, 3 on desktop)
✅ **Product Cards** - Clean card-based design with hover animations and scale effects
✅ **WhatsApp Integration** - Direct WhatsApp ordering with pre-formatted messages
✅ **Modern UI** - Minimal and professional design inspired by Apple/Shopify
✅ **Hero Section** - Eye-catching header with gradient background
✅ **Smooth Animations** - Hover effects, button animations, and transitions
✅ **Professional Navbar** - Sticky navigation with branding
✅ **Footer Section** - Contact information and company details
✅ **Fast Performance** - Optimized Next.js with Turbopack
✅ **No Backend Required** - Frontend-only with JSON data

## 📁 Project Structure

```
product-message-sender/
├── app/
│   ├── layout.js           # Root layout with Navbar
│   ├── page.js            # Main product listing page
│   └── globals.css        # Global styles
├── components/
│   ├── Navbar.js          # Navigation bar
│   └── ProductCard.js     # Individual product card component
├── data/
│   └── products.json      # Product data
├── public/                # Static assets
├── package.json           # Dependencies
└── tailwind.config.js     # Tailwind CSS configuration
```

## 🔑 Key Components

### **Navbar.js**
- Sticky navigation bar with logo and branding
- Company name "ProductHub"
- Responsive design

### **ProductCard.js**
- Displays product image, name, price, and ID
- **WhatsApp Integration**: Click "Order on WhatsApp" button to:
  - Format message with product details
  - Encode message using `encodeURIComponent`
  - Open WhatsApp with `wa.me` link
  - Pass formatted message with product name, ID, and price
- Hover animations (scale, shadow, image zoom)
- Button press animation

### **page.js**
- Loads products from `data/products.json`
- Maps products dynamically to ProductCard components
- Hero section with gradient background
- Grid layout using Tailwind CSS
- Professional footer

## 🎨 Design Details

### Colors & Styling
- **Primary Button**: Green (#10B981) - WhatsApp brand color
- **Backgrounds**: Clean white cards on gray-50 surface
- **Gradients**: Blue to Indigo for hero section
- **Shadows**: Soft shadows with hover elevation
- **Typography**: Clean, readable sans-serif fonts

### Responsive Grid
```
Mobile:  grid-cols-1    (1 column)
Tablet:  grid-cols-2    (2 columns)
Desktop: grid-cols-3    (3 columns)
```

### Hover Effects
- Card scale: `hover:scale-105`
- Shadow elevation: `hover:shadow-xl`
- Image zoom: `scale-110 on group-hover`
- Smooth transitions: `duration-300`

## 📱 WhatsApp Integration

**Message Format** (as per requirements):
```
*Order Details*
Product Name: {name}
Product ID: {id}
Price: ₹{price}
```

**Implementation**:
```javascript
const message = `*Order Details*
Product Name: ${product.name}
Product ID: ${product.id}
Price: ₹${product.price}`;

const encodedMessage = encodeURIComponent(message);
window.open(`https://wa.me/?text=${encodedMessage}`, '_blank');
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Navigate to project directory**:
   ```bash
   cd product-message-sender
   ```

2. **Install dependencies** (already done):
   ```bash
   npm install
   ```

3. **Run development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   - Visit: `http://localhost:3000`
   - The app will automatically reload on code changes

### Build for Production

```bash
npm run build
npm start
```

## 📊 Data Structure

Products are stored in `data/products.json`:

```json
[
  {
    "id": "PRD001",
    "name": "Premium Wireless Headphones",
    "price": 2499,
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop"
  },
  ...
]
```

**To add products**: Simply add new objects to the JSON array with `id`, `name`, `price`, and `image` fields.

## 🎯 Tech Stack

| Technology | Purpose |
|-----------|---------|
| **Next.js 16.2.3** | React framework with App Router |
| **Tailwind CSS** | Utility-first CSS framework |
| **JavaScript** | Client-side logic |
| **Node.js** | Runtime environment |

## ✨ Code Quality

- ✅ Clean, readable code structure
- ✅ Proper component separation
- ✅ No external UI libraries (Tailwind only)
- ✅ Production-ready practices
- ✅ Responsive design
- ✅ Smooth animations and transitions
- ✅ SEO optimized metadata

## 🔧 Customization

### Changing Products
Edit [data/products.json](data/products.json) to add, remove, or modify products.

### Changing Colors
Edit [components/ProductCard.js](components/ProductCard.js):
- Button color: Change `bg-green-500 hover:bg-green-600`
- Card shadows: Modify shadow values
- Gradient colors in [app/page.js](app/page.js)

### Changing Navbar Branding
Edit [components/Navbar.js](components/Navbar.js):
- Change "ProductHub" text
- Modify logo design
- Update brand tagline

### Changing WhatsApp Message Format
Edit the message template in [components/ProductCard.js](components/ProductCard.js) at the `handleWhatsAppOrder` function.

## 📝 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## 🌟 Features Breakdown

### 1. **Responsive Design**
- Mobile-first approach
- Adapts from 1 column (mobile) → 2 columns (tablet) → 3 columns (desktop)
- Touch-friendly button sizes

### 2. **Product Card Features**
- Image with smooth zoom on hover
- Product ID display
- Price formatted in Indian Rupees (₹)
- WhatsApp order button with animation
- Card elevation on hover

### 3. **Hero Section**
- Gradient background
- Compelling headline
- Subheadline explaining WhatsApp integration

### 4. **Navigation**
- Sticky navbar (stays at top while scrolling)
- Brand logo and name
- Responsive padding

### 5. **Footer**
- About section
- Why choose us highlights
- Contact information

## 🚀 Performance Optimizations

- **Next.js 16.2.3** with Turbopack for fast builds
- **Client Component** (ProductCard) for interactivity
- **Server Component** (page.js) for initial data loading
- **Tailwind CSS** for minimal CSS output
- **Responsive images** without Next.js Image optimization (using standard img for Unsplash URLs)

## 📞 WhatsApp Integration

The app uses the **WhatsApp Web** link format:
- **URL**: `https://wa.me/?text={message}`
- **Message Encoding**: `encodeURIComponent()` to handle special characters
- **User Experience**: Opens WhatsApp in new tab/window
- **No API Key Required**: Uses web-based WhatsApp integration

## 🎓 Learning Resources

This project demonstrates:
- Next.js App Router structure
- Tailwind CSS utility classes
- Component composition
- Client-side event handling
- JSON data loading
- Responsive design patterns
- Hover animations and transitions

## 📄 License

This project is open source and available for educational and commercial use.

## 💡 Version Information

- **Next.js**: 16.2.3 (latest with Turbopack)
- **Tailwind CSS**: Latest
- **Node.js**: 18+
- **Created**: 2024

---

**Ready to use! Start building your eCommerce store today! 🚀**
