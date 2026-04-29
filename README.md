# Stylish Desi Frontend

A modern e-commerce storefront built with Next.js, React, TypeScript, and Tailwind CSS for the Stylish Desi ethnic fashion store.

## Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn** or **pnpm**
- **Git**

## Installation

### 1. Clone the Repository

```bash
git clone <repository-url>
cd stylishdesi-frontend
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Set Up Environment Variables

Copy the example environment file and configure it:

```bash
cp .env.example .env.local
```

Edit `.env.local` and update the following:

**Local Development:**
```env
NEXT_PUBLIC_API_URL="http://localhost:5000/api/v1"
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
NEXT_PUBLIC_RAZORPAY_KEY_ID="rzp_test_xxxxxxxxxx"
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="your-cloud-name"
```

**For Vercel/Railway Deployment:**
```env
NEXT_PUBLIC_API_URL="https://your-backend.railway.app/api/v1"
NEXT_PUBLIC_SITE_URL="https://your-frontend.vercel.app"
NEXT_PUBLIC_RAZORPAY_KEY_ID="rzp_live_xxxxxxxxxx"
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="your-cloud-name"
```

## Running the Application

### Development Mode (with hot reload)

```bash
npm run dev
```

Application will be available at `http://localhost:3000`

### Production Build

```bash
npm run build
npm run start
```

## Available Scripts

```bash
# Development with hot reload
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Lint code
npm run lint

# Format code with Prettier
npm run format

# Type check
npm run type-check
```

## Project Structure

```
src/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout
│   ├── globals.css               # Global styles
│   ├── page.tsx                  # Home page
│   ├── (store)/                  # Store routes group
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── auth/                 # Authentication pages
│   │   ├── cart/                 # Shopping cart
│   │   ├── collections/          # Product collections
│   │   │   ├── page.tsx
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   ├── product/              # Product details
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   ├── admin/                    # Admin dashboard
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── analytics/
│   │   ├── customers/
│   │   ├── inventory/
│   │   │   └── page.tsx
│   │   └── orders/
│   │       └── page.tsx
│
├── components/                   # Reusable React components
│   ├── admin/                    # Admin-specific components
│   │   └── AdminSidebar.tsx
│   ├── layout/                   # Layout components
│   │   ├── Footer.tsx
│   │   └── Navbar.tsx
│   └── ui/                       # UI components
│       └── ProductCard.tsx
│
├── hooks/                        # Custom React hooks
├── lib/                          # Utility functions
│   └── utils.ts
├── store/                        # Zustand state management
│   ├── authStore.ts
│   ├── cartStore.ts
│   └── wishlistStore.ts
├── types/                        # TypeScript type definitions
│   └── index.ts

public/                           # Static assets
├── images/
└── fonts/

Configuration Files:
├── next.config.ts                # Next.js configuration
├── tailwind.config.ts            # Tailwind CSS configuration
├── postcss.config.mjs            # PostCSS configuration
├── tsconfig.json                 # TypeScript configuration
└── vercel.json                   # Vercel deployment config
```

## Key Features

### Pages & Routes

- **Home Page** (`/`) – Landing page
- **Collections** (`/collections`) – Browse all products
- **Product Details** (`/product/[slug]`) – Individual product page
- **Shopping Cart** (`/cart`) – Cart management
- **Checkout** – Payment integration with Razorpay
- **Authentication** (`/auth`) – Login & register
- **Admin Dashboard** (`/admin`) – Inventory, orders, customers, analytics

### State Management

Using **Zustand** for lightweight state management:

- `authStore.ts` – User authentication state
- `cartStore.ts` – Shopping cart state
- `wishlistStore.ts` – Wishlist management

### Styling

- **Tailwind CSS** – Utility-first CSS framework
- **PostCSS** – CSS preprocessing
- Responsive design (mobile-first)

### Components

- **ProductCard** – Reusable product display
- **Navbar** – Navigation with auth links
- **Footer** – Site footer
- **AdminSidebar** – Admin navigation

## Technologies Used

- **Framework:** Next.js 14+
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State Management:** Zustand
- **UI Components:** Custom React components
- **Form Handling:** React Hook Form (recommended)
- **API Client:** Fetch API / Axios (configured)
- **Payment:** Razorpay
- **Image Upload:** Cloudinary
- **Deployment:** Vercel

## Deployment

### Deploy to Vercel (Recommended for Next.js)

#### Option 1: Connect GitHub

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Select your GitHub repository
5. Set environment variables
6. Deploy

#### Option 2: CLI Deployment

```bash
npm i -g vercel
vercel
```

### Deploy to Railway

1. Push code to GitHub
2. Create new Railway project
3. Select GitHub repository
4. Add environment variables
5. Deploy automatically

### Environment Variables for Production

Set these in your deployment platform:

```env
NEXT_PUBLIC_API_URL="https://your-backend.railway.app/api/v1"
NEXT_PUBLIC_SITE_URL="https://your-production-url.vercel.app"
NEXT_PUBLIC_RAZORPAY_KEY_ID="rzp_live_xxxxx"
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="your-cloud-name"
```

## Development Guidelines

### Code Style

- Use TypeScript for type safety
- Follow React best practices
- Use functional components with hooks
- Keep components small and focused
- Use proper folder structure

### Component Structure

```tsx
import React from 'react';
import { useStore } from '@/store/yourStore';

interface Props {
  id: string;
  title: string;
}

export const YourComponent: React.FC<Props> = ({ id, title }) => {
  const { state } = useStore();

  return (
    <div>
      {/* Component content */}
    </div>
  );
};
```

### API Calls

```tsx
// Use environment variables for API URL
const API_URL = process.env.NEXT_PUBLIC_API_URL;

async function fetchProducts() {
  const response = await fetch(`${API_URL}/products`);
  const data = await response.json();
  return data;
}
```

### Git Workflow

1. Create feature branch: `git checkout -b feature/feature-name`
2. Make changes
3. Commit: `git commit -m "feat: description"`
4. Push: `git push origin feature/feature-name`
5. Create Pull Request

## Performance Optimization

- **Image Optimization** – Use Next.js `<Image>` component
- **Code Splitting** – Automatic with Next.js
- **Lazy Loading** – Use `dynamic` imports
- **Caching** – Configure in `next.config.ts`

## Troubleshooting

### Port Already in Use

```bash
# Change port or kill process on port 3000
lsof -i :3000
kill -9 <PID>

# Or run on different port
npm run dev -- -p 3001
```

### Environment Variables Not Loading

- Ensure file is named `.env.local` (not `.env`)
- Restart dev server after changes
- Variables must start with `NEXT_PUBLIC_` to be accessible in browser

### Build Errors

```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Run build again
npm run build
```

### API Connection Issues

- Verify `NEXT_PUBLIC_API_URL` points to correct backend
- Check backend is running
- Verify CORS settings on backend
- Check network tab in browser DevTools

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Support

For issues or questions, refer to the main [SETUP.md](../SETUP.md) or contact the development team.

## License

All rights reserved © Stylish Desi
