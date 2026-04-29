"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { formatINR } from "@/lib/utils";
import { useCartStore } from "@/store/cartStore";
import { useWishlistStore } from "@/store/wishlistStore";
import toast from "react-hot-toast";

// Static product data — replace with API fetch
const PRODUCT = {
  id: "1",
  title: "The Royal Banarasi Silk Saree",
  slug: "royal-banarasi-silk-saree",
  brand: "Heritage Collection",
  price: 95000,
  salePrice: 84900,
  description:
    "Hand-woven in the heart of Varanasi, this masterpiece features Kadwa weaving with intricate floral jaal motifs in pure 24k gold plated zari. A testament to six months of artisan labor, designed for the modern heirloom collector.",
  fabric: "Pure Banarasi Silk",
  occasion: ["Wedding", "Reception", "Festival"],
  imageUrls: [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCot6UqnqVXr4lwBGR-539iDp80nEoHsMiU3yIKHfgOuRUos6hm5Ih9BWew3f_l9P0GoC7n9maic0bXVwdGlPEEXgSl5b5N0qq-TDjbsGkQNXt3Vtzthkixj2tM22d0LApPaOxEJpXmtSUyCVXQ0DQYndApviBZFFDkUEIVjSB4kCtTIVg_rJOa8w_qmClUtgfvYzRtUY8BRShQjW8vqQ3EpnmH7gqDo4Fpilz6I0Ktlubq_xSkzhgV9fyb-zv_mtWeUpjorx53V54f",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAUAhqZTn8UMj69gtxR4tNhBSQMXTue0W_1-aNSkD0FoedEA0m5uWRvO0F6V2A67Nzt94VhNVNvihL50h-mTqKogE0eObMQUhhFFcInhBmWXNK1K_LwugJr2_Nqvn4GOef7775c5Xnbhpwbz66cYRYFc0GuTpnYEvrDnKiicM3jEhp2fsXqIM3VYa9ep2gmlx79-QbtTAXlcKBo8e178X9kjKoLXYLw4-m8YOEIiR0gPxDJeQNEdxAkmIU09gxLTLAjgsTnl4OEPOZ7",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBom8vD8YYaXHLymisxjy5hfVq0f2Ok2lLwI27gGNV0T73tFqhZ10foC-OBGSVzJrTwUz6Io_qn68sW3fU4g5pvW77up2WHTV9tgyJqIKvgGgz5XPPnM4Zl802u5E1lDz1wHaCdDefKb1HGxgnVGeNYa9zVWdhNP35t4_-6H1g06JCLtGkSe1zC44ktlNUTVuznqZx7i2qec0-mAJzzh0l8mUHtlDGP56zH7g-o2XxXEfINAMVGsmnM3ddK9N0mp4JItbrQB590bJFZ",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAKGtMERf57SBasEZGkZJ7c7cay7tawdsme3dC9VCjrrexps0b2mlo1a51iYph4t7VMwNfx7oEneco6_P1PWLL6_RQiIqxdiyTeG6YS12OL6-hBJni4zsf-dyOHWluhn8UQRTk_HDTQDJAsIJ1AmYi2-xBb82npKXvtmRiII2tD5wFO44oilFFau31vUNg3ifersD_Ev1f9GUAkjN0OhalI-cyfYiCCghl8gI4NfKyewOrN5NhNyyFVEmk2uopExi7JCmfbrIE0s6ZH",
  ],
  sizes: ["5.5 Meters", "6.0 Meters (Custom)"],
  rating: 4.9,
  reviewCount: 48,
  stock: 6,
  sku: "SD-BAN-001",
  details: [
    { label: "Craftsmanship", value: "Kadwa Banarasi hand-weaving with 24k gold plated zari motifs" },
    { label: "Fabric", value: "Pure Katan Silk, 120 GSM" },
    { label: "Length", value: "5.5 meters saree + 0.85m blouse piece" },
    { label: "Weaving Region", value: "Varanasi, Uttar Pradesh" },
    { label: "Care", value: "Dry clean only" },
  ],
};

const RELATED_PRODUCTS = [
  { id: "2", title: "Heritage Banarasi Saree", slug: "heritage-banarasi-saree", price: 28900, imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAUAoeKI45mA4_SlATYkVB5bf8sMNJm1KpU9W_X6U7qIBnbkMkxrWzSMuUYyXSy1P8EYapi-B6lE1tMB2C4CG_dxedYYr08GIeidGS9cnZTX9v1Kt2SpCYPBEa5N5ZEYGD8OfY6p--vKa-TyF3ZqXa2fDKzWQpxtchEEoWxFuWRN9xXwy64m9_GAvL9r_yZ1EMr9DH4QhiNEwf5LdjVhgZfG7To1PyXEWZf5-OGSQbuziDS6jHE51B9QlzisROfX9LsJP6v8t8IuF3v" },
  { id: "3", title: "Zari Silk Lehenga", slug: "zari-silk-lehenga", price: 42500, imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDNKdLmjwhxNXurWsXHZ5mnWrOHdQ-M-TLLvyDhWd8D54MgG2wr8RB8D6mBSWp3rwqVm0l8fIH5RVXR8h4r6M8BXUm0yXmf14Xp50TdzxY8qCee2YHOTgL8hD9euomFydePN3Vib0zHL7vhiH_89bl3vKJkg2Eu3dGY4bkI_3hTj5a-jla_f9mO_ezG0Unaam4dz8aWPBwyxn2N28Y0KAD6sSVtmxKMAssJTl6ItAX6lHgDqMABML3ihURpTI5lw3gOf6IAnE8hgoax" },
  { id: "4", title: "Gold Choker Necklace", slug: "gold-choker-necklace", price: 12000, imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxu9GzoF-lwuDlsm7gjucd__zVXoT_aySIsITFCAu_m5OHEZ_dScYJsyW-Bg_jbIK3oXjdKkhOS5_rMPaHwNX2CGjeZKWe7NQQ6MMCbJVr3EK_sbxTRih2xC1K1_NVWLmjA3RPxiwhUuaYfU1l9Ksr5nuODepj5J2twCNbishWjcz_X9Gr8IbDVT8xAgtI72C7fQOL_y8eQIl8zA15NbnWGGsTy1z_JgZQLP3UZWaDEVMqRmlVE4OLKlEbDNUHPSSDcKebyligidKI" },
  { id: "5", title: "Chiffon Drape Saree", slug: "chiffon-drape-saree", price: 34000, imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAepMK680BPJsTlSku0UqLt5XetZULZvqoVvBYaiZHCjBKad0_ignlbmKI4b9FVwKotM_yTqRftG9KRka09kty_GpJy3turJzLTHS1kixuTrAuYbVutagyEQc6KP7cvIRxzZSS1IbNexFXT9rj7Y9h_ecLNw-8tkbdFVxpbOwlk02RjepIPvgwgvma0ToI3E0t134kPQpSu4GYLsCjlg4LgThssje-JZloheyshHwkv3Zs_HnrLm_T3x2iO_EHB_R2PzzFnzWH2CyNs" },
];

export default function ProductDetailPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState(PRODUCT.sizes[0]);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const addToCart = useCartStore((s) => s.addItem);
  const { isInWishlist, toggleItem } = useWishlistStore();
  const inWishlist = isInWishlist(PRODUCT.id);

  const displayPrice = PRODUCT.salePrice ?? PRODUCT.price;

  const handleAddToCart = () => {
    addToCart(
      {
        id: PRODUCT.id,
        title: PRODUCT.title,
        slug: PRODUCT.slug,
        price: PRODUCT.price,
        salePrice: PRODUCT.salePrice ?? undefined,
        imageUrls: PRODUCT.imageUrls,
      } as any,
      1,
      selectedSize
    );
    toast.success("Added to shopping bag");
  };

  const toggleAccordion = (key: string) =>
    setOpenAccordion(openAccordion === key ? null : key);

  return (
    <div className="bg-background">
      <div className="max-w-8xl mx-auto px-6 lg:px-12 py-10 lg:py-16">
        {/* Breadcrumbs */}
        <nav className="flex items-center space-x-2 mb-10 text-[11px] font-label-sm text-outline uppercase tracking-widest flex-wrap gap-y-1">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          <Link href="/collections" className="hover:text-primary transition-colors">Collections</Link>
          <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          <Link href="/collections/sarees" className="hover:text-primary transition-colors">Banarasi Heritage</Link>
          <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          <span className="text-on-surface truncate">{PRODUCT.title}</span>
        </nav>

        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* ─── Image Gallery ──────────────────────────────────────────────────────── */}
          <div className="lg:col-span-7">
            {/* Main Image */}
            <div className="aspect-[4/5] overflow-hidden bg-surface-container-low mb-4 relative">
              <Image
                src={PRODUCT.imageUrls[selectedImage]}
                alt={`${PRODUCT.title} — view ${selectedImage + 1}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                priority
              />
            </div>
            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-3">
              {PRODUCT.imageUrls.map((url, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`aspect-[3/4] overflow-hidden relative border-2 transition-colors ${
                    selectedImage === i ? "border-primary" : "border-transparent"
                  }`}
                >
                  <Image src={url} alt={`View ${i + 1}`} fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* ─── Product Details ─────────────────────────────────────────────────────── */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 h-fit space-y-6">
            <div>
              <span className="text-[11px] font-label-sm text-secondary uppercase tracking-[0.2em] mb-3 block">
                {PRODUCT.brand}
              </span>
              <h1 className="text-headline-xl font-headline-xl text-on-surface text-4xl font-bold mb-3">
                {PRODUCT.title}
              </h1>
              <div className="flex items-baseline gap-4 flex-wrap">
                <span className="text-headline-md font-headline-md text-primary text-3xl font-semibold">
                  {formatINR(displayPrice)}
                </span>
                {PRODUCT.salePrice && (
                  <span className="text-body-md font-body-md text-outline line-through text-lg">
                    {formatINR(PRODUCT.price)}
                  </span>
                )}
                {PRODUCT.salePrice && (
                  <span className="bg-primary/10 text-primary text-[11px] font-label-sm px-2 py-1 uppercase">
                    Save {formatINR(PRODUCT.price - PRODUCT.salePrice)}
                  </span>
                )}
              </div>
              {/* Rating */}
              <div className="flex items-center gap-2 mt-3">
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map((s) => (
                    <span key={s} className="material-symbols-outlined text-secondary text-[14px]" style={{ fontVariationSettings: s <= 4 ? "'FILL' 1" : "'FILL' 0" }}>star</span>
                  ))}
                </div>
                <span className="text-sm text-stone-500 font-manrope">{PRODUCT.rating} ({PRODUCT.reviewCount} reviews)</span>
              </div>
            </div>

            {/* Description */}
            <div className="border-t border-stone-200 pt-6">
              <p className="text-body-lg font-body-lg text-on-surface-variant leading-relaxed">
                {PRODUCT.description}
              </p>
            </div>

            {/* Occasion Tags */}
            <div className="flex flex-wrap gap-2">
              {PRODUCT.occasion.map((occ) => (
                <span key={occ} className="px-3 py-1 bg-surface-container text-[10px] font-label-sm text-on-surface uppercase tracking-widest border border-outline-variant">
                  {occ}
                </span>
              ))}
            </div>

            {/* Size Selection */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-[11px] font-label-sm text-on-surface uppercase tracking-widest">
                  Select Length
                </label>
                <button className="text-[11px] font-label-sm text-secondary underline hover:text-primary uppercase tracking-widest">
                  Size Guide
                </button>
              </div>
              <div className="flex flex-wrap gap-3">
                {PRODUCT.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-5 py-3 border text-[10px] font-label-sm uppercase tracking-widest transition-all ${
                      selectedSize === size
                        ? "border-primary bg-primary text-white"
                        : "border-outline text-on-surface hover:border-primary"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Stock Indicator */}
            {PRODUCT.stock < 10 && (
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-amber-500 rounded-full" />
                <span className="text-[11px] font-label-sm text-amber-700 uppercase tracking-wider">
                  Only {PRODUCT.stock} left in stock
                </span>
              </div>
            )}

            {/* Actions */}
            <div className="flex flex-col gap-3 pt-2">
              <button
                onClick={handleAddToCart}
                className="w-full bg-primary text-on-primary py-5 font-label-sm text-[11px] uppercase tracking-[0.2em] hover:opacity-90 transition-opacity flex items-center justify-center gap-3 whisper-shadow"
              >
                <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
                Add to Shopping Bag
              </button>
              <button
                onClick={() => {
                  toggleItem({ id: PRODUCT.id, title: PRODUCT.title, slug: PRODUCT.slug, price: PRODUCT.price, imageUrls: PRODUCT.imageUrls } as any);
                  toast.success(inWishlist ? "Removed from wishlist" : "Added to wishlist");
                }}
                className={`w-full border py-5 font-label-sm text-[11px] uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 ${
                  inWishlist
                    ? "border-primary bg-primary text-white"
                    : "border-secondary text-secondary hover:bg-secondary hover:text-white"
                }`}
              >
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: inWishlist ? "'FILL' 1" : "'FILL' 0" }}>favorite</span>
                {inWishlist ? "In Wishlist" : "Add to Wishlist"}
              </button>
            </div>

            {/* Accordion Details */}
            <div className="divide-y divide-stone-200 border-t border-b border-stone-200">
              {[
                { key: "details", label: "Craftsmanship Details" },
                { key: "shipping", label: "Shipping & Returns" },
                { key: "care", label: "Care Instructions" },
              ].map(({ key, label }) => (
                <div key={key}>
                  <button
                    onClick={() => toggleAccordion(key)}
                    className="w-full py-4 flex justify-between items-center group"
                  >
                    <span className="text-[11px] font-label-sm text-on-surface uppercase tracking-widest">
                      {label}
                    </span>
                    <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">
                      {openAccordion === key ? "remove" : "add"}
                    </span>
                  </button>
                  {openAccordion === key && (
                    <div className="pb-4 text-sm font-manrope text-on-surface-variant space-y-2">
                      {key === "details" &&
                        PRODUCT.details.map((d) => (
                          <div key={d.label} className="flex gap-2">
                            <span className="font-semibold text-on-surface w-28 flex-shrink-0">{d.label}:</span>
                            <span>{d.value}</span>
                          </div>
                        ))}
                      {key === "shipping" && (
                        <div className="space-y-2">
                          <p>• Free shipping on orders above ₹2,000</p>
                          <p>• Delivered within 5–7 business days</p>
                          <p>• Easy returns within 7 days of delivery</p>
                          <p>• WhatsApp support: +91-XXXXXXXXXX</p>
                        </div>
                      )}
                      {key === "care" && (
                        <div className="space-y-2">
                          <p>• Dry clean only — do not machine wash</p>
                          <p>• Store in a muslin cloth bag in a cool, dry place</p>
                          <p>• Avoid direct sunlight for prolonged periods</p>
                          <p>• Use a cool iron on the reverse side only</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-3 pt-2">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-7 h-7 rounded-full border-2 border-background bg-stone-200" />
                ))}
              </div>
              <span className="text-[11px] font-label-sm text-outline">
                14 people recently added this to their wishlist
              </span>
            </div>
          </div>
        </div>

        {/* ─── Complete the Look ────────────────────────────────────────────────────── */}
        <section className="mt-20 pt-16 border-t border-stone-200">
          <div className="flex justify-between items-end mb-10">
            <div>
              <span className="text-[11px] font-label-sm text-secondary uppercase tracking-[0.2em] mb-3 block">Curation</span>
              <h2 className="text-headline-lg font-headline-lg text-on-surface text-3xl font-semibold">Complete the Look</h2>
            </div>
            <Link href="/collections" className="text-[11px] font-label-sm text-primary uppercase tracking-widest border-b border-primary pb-1 hidden sm:block">
              Shop Collection
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter">
            {RELATED_PRODUCTS.map((p) => (
              <Link key={p.id} href={`/product/${p.slug}`} className="group cursor-pointer">
                <div className="aspect-[3/4] overflow-hidden mb-5 bg-surface-container-low relative">
                  <Image src={p.imageUrl} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <button className="w-full bg-white/90 backdrop-blur-sm py-3 text-[10px] font-label-sm uppercase tracking-widest text-on-surface">Quick Add</button>
                  </div>
                </div>
                <h3 className="font-manrope font-semibold text-sm text-on-surface mb-1 line-clamp-2">{p.title}</h3>
                <p className="font-bold text-primary">{formatINR(p.price)}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
