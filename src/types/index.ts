// ─── Auth ──────────────────────────────────────────────────────────────────────
export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  role: "USER" | "ADMIN" | "SUPER_ADMIN" | "INVENTORY_MANAGER" | "SALES_MANAGER";
  avatar?: string;
  createdAt: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
}

// ─── Product ───────────────────────────────────────────────────────────────────
export interface ProductVariant {
  id: string;
  size: string;
  color: string;
  quantity: number;
}

export interface Product {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: Category;
  categoryId: string;
  gender: "WOMEN" | "KIDS" | "UNISEX";
  price: number;
  salePrice?: number;
  stockQuantity: number;
  sku: string;
  fabric?: string;
  brand?: string;
  imageUrls: string[];
  isTrending: boolean;
  isNewArrival: boolean;
  isDiscounted: boolean;
  occasion?: string[];
  variants: ProductVariant[];
  rating?: number;
  reviewCount?: number;
  createdAt: string;
}

export interface Category {
  id: string;
  categoryName: string;
  slug: string;
  imageUrl?: string;
}

// ─── Cart ──────────────────────────────────────────────────────────────────────
export interface CartItem {
  id: string;
  productId: string;
  product: Product;
  quantity: number;
  selectedSize?: string;
  selectedColor?: string;
}

export interface Cart {
  id: string;
  userId: string;
  items: CartItem[];
  totalAmount: number;
  itemCount: number;
}

// ─── Wishlist ──────────────────────────────────────────────────────────────────
export interface WishlistItem {
  id: string;
  productId: string;
  product: Product;
}

// ─── Order ─────────────────────────────────────────────────────────────────────
export type OrderStatus =
  | "PENDING"
  | "PAID"
  | "PROCESSING"
  | "SHIPPED"
  | "DELIVERED"
  | "CANCELLED"
  | "RETURNED"
  | "REFUNDED";

export interface OrderItem {
  id: string;
  productId: string;
  product: Product;
  quantity: number;
  price: number;
}

export interface Address {
  id: string;
  userId: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  country: string;
  pincode: string;
}

export interface Order {
  id: string;
  userId: string;
  user?: User;
  items: OrderItem[];
  totalAmount: number;
  orderStatus: OrderStatus;
  paymentStatus: "PENDING" | "PAID" | "FAILED" | "REFUNDED";
  shippingAddress: Address;
  razorpayPaymentId?: string;
  razorpayOrderId?: string;
  deliveryPartnerId?: string;
  trackingId?: string;
  createdAt: string;
  updatedAt: string;
}

// ─── Coupon ────────────────────────────────────────────────────────────────────
export interface Coupon {
  id: string;
  code: string;
  discountType: "PERCENTAGE" | "FLAT";
  discountValue: number;
  validUntil: string;
  minOrderAmount?: number;
  maxDiscount?: number;
}

// ─── API Response ──────────────────────────────────────────────────────────────
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  pagination?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// ─── Filters ───────────────────────────────────────────────────────────────────
export interface ProductFilters {
  category?: string;
  gender?: string;
  minPrice?: number;
  maxPrice?: number;
  occasion?: string;
  size?: string;
  color?: string;
  fabric?: string;
  isTrending?: boolean;
  isNewArrival?: boolean;
  isDiscounted?: boolean;
  sortBy?: "price_asc" | "price_desc" | "newest" | "trending" | "popular" | "rating";
  page?: number;
  limit?: number;
  search?: string;
}
