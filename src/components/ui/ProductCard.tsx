"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Product } from "@/types";
import { formatINR, getDiscountPercent } from "@/lib/utils";
import { useCartStore } from "@/store/cartStore";
import { useWishlistStore } from "@/store/wishlistStore";
import toast from "react-hot-toast";

interface ProductCardProps {
  product: Product;
  showQuickAdd?: boolean;
}

export default function ProductCard({ product, showQuickAdd = true }: ProductCardProps) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const addToCart = useCartStore((s) => s.addItem);
  const { isInWishlist, toggleItem } = useWishlistStore();
  const inWishlist = isInWishlist(product.id);

  const displayPrice = product.salePrice ?? product.price;
  const discount = product.salePrice
    ? getDiscountPercent(product.price, product.salePrice)
    : 0;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product, 1);
    toast.success(`${product.title} added to bag`);
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    toggleItem(product);
    toast.success(inWishlist ? "Removed from wishlist" : "Added to wishlist");
  };

  return (
    <div className="group relative">
      <Link href={`/product/${product.slug}`}>
        {/* Image Container */}
        <div className="aspect-[3/4] overflow-hidden bg-surface-container-highest mb-stack-sm relative">
          {product.imageUrls[0] && (
            <Image
              src={product.imageUrls[0]}
              alt={product.title}
              fill
              className={`object-cover product-img-zoom transition-opacity duration-500 ${
                imgLoaded ? "opacity-100" : "opacity-0"
              }`}
              onLoad={() => setImgLoaded(true)}
            />
          )}
          {!imgLoaded && (
            <div className="absolute inset-0 bg-surface-container-high animate-pulse" />
          )}

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-1">
            {product.isNewArrival && (
              <span className="bg-tertiary-container text-white text-[10px] font-label-sm px-2 py-1 uppercase tracking-wider">
                New
              </span>
            )}
            {discount > 0 && (
              <span className="bg-primary text-white text-[10px] font-label-sm px-2 py-1 uppercase tracking-wider">
                -{discount}%
              </span>
            )}
          </div>

          {/* Wishlist button */}
          <button
            onClick={handleWishlist}
            className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-white"
          >
            <span
              className="material-symbols-outlined text-primary text-[18px]"
              style={{
                fontVariationSettings: inWishlist
                  ? "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24"
                  : "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24",
              }}
            >
              favorite
            </span>
          </button>

          {/* Quick Add */}
          {showQuickAdd && (
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <button
                onClick={handleAddToCart}
                className="w-full bg-primary text-white font-label-sm text-label-sm py-3 uppercase tracking-widest hover:bg-primary-container transition-colors"
              >
                Quick Add
              </button>
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="flex justify-between items-start gap-2">
          <div className="flex flex-col gap-1 min-w-0">
            {product.brand && (
              <p className="font-label-sm text-label-sm text-outline uppercase tracking-widest truncate">
                {product.brand}
              </p>
            )}
            <h3 className="font-headline-md text-[18px] font-semibold text-on-surface leading-snug line-clamp-2">
              {product.title}
            </h3>
            {/* Rating */}
            {product.rating && (
              <div className="flex items-center gap-1 mt-1">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className="material-symbols-outlined text-secondary text-[12px]"
                      style={{
                        fontVariationSettings:
                          star <= Math.floor(product.rating!)
                            ? "'FILL' 1"
                            : "'FILL' 0",
                      }}
                    >
                      star
                    </span>
                  ))}
                </div>
                <span className="text-[11px] text-stone-400 font-manrope">
                  ({product.reviewCount})
                </span>
              </div>
            )}
          </div>

          <div className="flex flex-col items-end flex-shrink-0">
            <p className="font-body-lg text-body-lg text-primary font-bold whitespace-nowrap">
              {formatINR(displayPrice)}
            </p>
            {product.salePrice && (
              <p className="text-sm text-stone-400 line-through font-manrope">
                {formatINR(product.price)}
              </p>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}
