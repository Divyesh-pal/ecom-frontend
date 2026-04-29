"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useCartStore } from "@/store/cartStore";
import { useWishlistStore } from "@/store/wishlistStore";
import { useAuthStore } from "@/store/authStore";

const NAV_LINKS = [
  { label: "Heritage", href: "/collections/heritage" },
  { label: "New Arrivals", href: "/collections/new-arrivals" },
  { label: "Collections", href: "/collections" },
  { label: "Boutique", href: "/collections/boutique" },
  { label: "Lookbook", href: "/lookbook" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const cartCount = useCartStore((s) => s.getTotalItems());
  const wishlistCount = useWishlistStore((s) => s.items.length);
  const { isAuthenticated } = useAuthStore();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`bg-white/95 backdrop-blur-md border-b border-stone-200 sticky top-0 z-50 transition-shadow duration-300 ${
          scrolled ? "shadow-sm" : ""
        }`}
      >
        <div className="flex justify-between items-center h-20 px-6 lg:px-12 w-full max-w-8xl mx-auto">
          {/* Logo */}
          <div className="flex items-center gap-8 lg:gap-12">
            <Link
              href="/"
              className="text-xl lg:text-2xl font-bold tracking-widest text-primary uppercase font-epilogue flex-shrink-0"
            >
              Stylish Desi
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-stone-600 font-medium hover:text-primary transition-colors font-epilogue text-sm uppercase tracking-widest"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4 lg:gap-6">
            {/* Search – Desktop */}
            <div className="hidden lg:flex items-center border-b border-stone-300 py-1 transition-all duration-300">
              <span className="material-symbols-outlined text-stone-400 text-sm mr-2 text-[18px]">
                search
              </span>
              <input
                className="bg-transparent border-none outline-none focus:ring-0 text-sm font-manrope w-40 focus:w-52 transition-all duration-300 p-0"
                placeholder="Search heritage..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Wishlist */}
            <Link
              href="/account/wishlist"
              className="relative hover:opacity-80 transition-all duration-300 text-primary"
            >
              <span className="material-symbols-outlined">favorite</span>
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-white text-[8px] px-1 rounded-full min-w-[14px] text-center">
                  {wishlistCount}
                </span>
              )}
            </Link>

            {/* Account */}
            <Link
              href={isAuthenticated ? "/account" : "/auth"}
              className="hover:opacity-80 transition-all duration-300 text-primary"
            >
              <span className="material-symbols-outlined">person</span>
            </Link>

            {/* Cart */}
            <Link
              href="/cart"
              className="relative hover:opacity-80 transition-all duration-300 text-primary"
            >
              <span className="material-symbols-outlined">shopping_bag</span>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-white text-[8px] px-1 rounded-full min-w-[14px] text-center">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Mobile menu toggle */}
            <button
              className="lg:hidden text-primary"
              onClick={() => setMobileMenuOpen((v) => !v)}
            >
              <span className="material-symbols-outlined">
                {mobileMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-stone-100 px-6 py-6 space-y-4">
            {/* Mobile Search */}
            <div className="flex items-center border-b border-stone-300 pb-2 mb-4">
              <span className="material-symbols-outlined text-stone-400 mr-2 text-[18px]">
                search
              </span>
              <input
                className="bg-transparent border-none outline-none flex-1 text-sm font-manrope"
                placeholder="Search heritage..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block text-stone-600 font-medium hover:text-primary transition-colors font-epilogue text-sm uppercase tracking-widest py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </header>
    </>
  );
}
