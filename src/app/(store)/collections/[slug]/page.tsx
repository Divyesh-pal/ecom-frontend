import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

interface Props {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const title = params.slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
  return {
    title: `${title} — Women's Ethnic Wear`,
    description: `Shop premium ${title.toLowerCase()} at Stylish Desi. Handcrafted Indian ethnic wear for women.`,
  };
}

function formatINR(amount: number) {
  return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(amount);
}

const SAMPLE_PRODUCTS = [
  { id: "1", title: "Zari Embroidered Silk Lehenga", slug: "zari-silk-lehenga", brand: "Signature Collection", price: 42500, salePrice: null, imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDNKdLmjwhxNXurWsXHZ5mnWrOHdQ-M-TLLvyDhWd8D54MgG2wr8RB8D6mBSWp3rwqVm0l8fIH5RVXR8h4r6M8BXUm0yXmf14Xp50TdzxY8qCee2YHOTgL8hD9euomFydePN3Vib0zHL7vhiH_89bl3vKJkg2Eu3dGY4bkI_3hTj5a-jla_f9mO_ezG0Unaam4dz8aWPBwyxn2N28Y0KAD6sSVtmxKMAssJTl6ItAX6lHgDqMABML3ihURpTI5lw3gOf6IAnE8hgoax" },
  { id: "2", title: "Heritage Banarasi Saree", slug: "heritage-banarasi-saree", brand: "Handcrafted", price: 28900, salePrice: 24500, imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAUAoeKI45mA4_SlATYkVB5bf8sMNJm1KpU9W_X6U7qIBnbkMkxrWzSMuUYyXSy1P8EYapi-B6lE1tMB2C4CG_dxedYYr08GIeidGS9cnZTX9v1Kt2SpCYPBEa5N5ZEYGD8OfY6p--vKa-TyF3ZqXa2fDKzWQpxtchEEoWxFuWRN9xXwy64m9_GAvL9r_yZ1EMr9DH4QhiNEwf5LdjVhgZfG7To1PyXEWZf5-OGSQbuziDS6jHE51B9QlzisROfX9LsJP6v8t8IuF3v" },
  { id: "3", title: "Floral Applique Chiffon Saree", slug: "floral-chiffon-saree", brand: "Boutique Exclusive", price: 34000, salePrice: null, imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAepMK680BPJsTlSku0UqLt5XetZULZvqoVvBYaiZHCjBKad0_ignlbmKI4b9FVwKotM_yTqRftG9KRka09kty_GpJy3turJzLTHS1kixuTrAuYbVutagyEQc6KP7cvIRxzZSS1IbNexFXT9rj7Y9h_ecLNw-8tkbdFVxpbOwlk02RjepIPvgwgvma0ToI3E0t134kPQpSu4GYLsCjlg4LgThssje-JZloheyshHwkv3Zs_HnrLm_T3x2iO_EHB_R2PzzFnzWH2CyNs" },
  { id: "4", title: "Royal Velvet Anarkali", slug: "royal-velvet-anarkali", brand: "Heritage Edit", price: 18500, salePrice: 15500, imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCot6UqnqVXr4lwBGR-539iDp80nEoHsMiU3yIKHfgOuRUos6hm5Ih9BWew3f_l9P0GoC7n9maic0bXVwdGlPEEXgSl5b5N0qq-TDjbsGkQNXt3Vtzthkixj2tM22d0LApPaOxEJpXmtSUyCVXQ0DQYndApviBZFFDkUEIVjSB4kCtTIVg_rJOa8w_qmClUtgfvYzRtUY8BRShQjW8vqQ3EpnmH7gqDo4Fpilz6I0Ktlubq_xSkzhgV9fyb-zv_mtWeUpjorx53V54f" },
  { id: "5", title: "Silk Organza Saree", slug: "silk-organza-saree", brand: "Premium", price: 22000, salePrice: null, imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAepMK680BPJsTlSku0UqLt5XetZULZvqoVvBYaiZHCjBKad0_ignlbmKI4b9FVwKotM_yTqRftG9KRka09kty_GpJy3turJzLTHS1kixuTrAuYbVutagyEQc6KP7cvIRxzZSS1IbNexFXT9rj7Y9h_ecLNw-8tkbdFVxpbOwlk02RjepIPvgwgvma0ToI3E0t134kPQpSu4GYLsCjlg4LgThssje-JZloheyshHwkv3Zs_HnrLm_T3x2iO_EHB_R2PzzFnzWH2CyNs" },
  { id: "6", title: "Embroidered Kanjivaram", slug: "embroidered-kanjivaram", brand: "Artisan", price: 55000, salePrice: 49000, imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDNKdLmjwhxNXurWsXHZ5mnWrOHdQ-M-TLLvyDhWd8D54MgG2wr8RB8D6mBSWp3rwqVm0l8fIH5RVXR8h4r6M8BXUm0yXmf14Xp50TdzxY8qCee2YHOTgL8hD9euomFydePN3Vib0zHL7vhiH_89bl3vKJkg2Eu3dGY4bkI_3hTj5a-jla_f9mO_ezG0Unaam4dz8aWPBwyxn2N28Y0KAD6sSVtmxKMAssJTl6ItAX6lHgDqMABML3ihURpTI5lw3gOf6IAnE8hgoax" },
];

const OCCASIONS = ["Wedding", "Reception", "Festive", "Cocktail", "Casual", "Office"];
const SIZES = ["XS", "S", "M", "L", "XL", "XXL"];
const COLORS = [
  { name: "Crimson", bg: "bg-red-900" },
  { name: "Gold", bg: "bg-yellow-400" },
  { name: "Teal", bg: "bg-teal-800" },
  { name: "Cream", bg: "bg-yellow-50 border border-stone-300" },
  { name: "Navy", bg: "bg-blue-900" },
  { name: "Sage", bg: "bg-green-700" },
];

export default function CollectionPage({ params }: Props) {
  const categoryTitle = params.slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return (
    <div className="bg-background min-h-screen">
      {/* Breadcrumb Header */}
      <div className="py-10 lg:py-12 border-b border-outline-variant/30 max-w-8xl mx-auto px-6 lg:px-12">
        <nav className="flex items-center gap-2 text-[11px] font-label-sm text-outline mb-4 uppercase tracking-widest">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span className="material-symbols-outlined text-[10px]">chevron_right</span>
          <Link href="/collections" className="hover:text-primary transition-colors">Collections</Link>
          <span className="material-symbols-outlined text-[10px]">chevron_right</span>
          <span className="text-primary font-bold">{categoryTitle}</span>
        </nav>
        <div className="flex justify-between items-end flex-wrap gap-4">
          <div>
            <h1 className="font-headline-xl text-primary text-4xl font-bold">{categoryTitle}</h1>
            <p className="font-body-md text-on-surface-variant mt-2">124 items found in our curated collection</p>
          </div>
          <div className="flex items-center gap-3">
            <label className="font-label-sm text-label-sm text-outline uppercase">Sort By</label>
            <select className="bg-transparent border-b border-outline text-body-md focus:ring-0 focus:border-primary py-1 pr-8 font-manrope text-sm outline-none cursor-pointer">
              <option>Popularity</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest Arrivals</option>
              <option>Best Rated</option>
            </select>
          </div>
        </div>
      </div>

      <div className="max-w-8xl mx-auto px-6 lg:px-12 py-8 flex gap-12">
        {/* ─── Filter Sidebar ──────────────────────────────────────────────────────── */}
        <aside className="hidden lg:block w-60 flex-shrink-0">
          <div className="sticky top-28 space-y-8">
            {/* Category Filter */}
            <div>
              <h3 className="font-headline-md text-[15px] text-primary mb-4 uppercase tracking-widest font-semibold">Category</h3>
              <div className="flex flex-col gap-3 font-manrope text-sm text-on-surface-variant">
                {["Anarkali Suits", "Designer Sarees", "Lehenga Choli", "Kurtas & Tunics", "Salwar Suits", "Indo-Western"].map((cat) => (
                  <label key={cat} className="flex items-center gap-3 cursor-pointer hover:text-primary transition-colors">
                    <input type="checkbox" className="w-4 h-4 rounded border-outline text-primary focus:ring-primary/20" />
                    <span>{cat}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Color Filter */}
            <div>
              <h3 className="font-headline-md text-[15px] text-primary mb-4 uppercase tracking-widest font-semibold">Color</h3>
              <div className="grid grid-cols-5 gap-2">
                {COLORS.map((c) => (
                  <button key={c.name} className={`w-8 h-8 rounded-full ${c.bg} hover:ring-2 hover:ring-primary hover:ring-offset-1 transition-all`} title={c.name} />
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div>
              <h3 className="font-headline-md text-[15px] text-primary mb-4 uppercase tracking-widest font-semibold">Price Range</h3>
              <div className="space-y-3">
                <input type="range" min={2500} max={75000} defaultValue={40000} className="w-full h-1 bg-outline-variant rounded-lg appearance-none cursor-pointer accent-primary" />
                <div className="flex justify-between font-label-sm text-[10px] text-on-surface-variant">
                  <span>₹2,500</span>
                  <span>₹75,000+</span>
                </div>
              </div>
            </div>

            {/* Occasion */}
            <div>
              <h3 className="font-headline-md text-[15px] text-primary mb-4 uppercase tracking-widest font-semibold">Occasion</h3>
              <div className="flex flex-wrap gap-2">
                {OCCASIONS.map((occ, i) => (
                  <span key={occ} className={`px-3 py-1.5 rounded-full text-[10px] font-label-sm uppercase tracking-wider cursor-pointer transition-all ${i === 1 ? "bg-primary text-white" : "bg-surface-container-low text-on-surface hover:bg-primary hover:text-white"}`}>
                    {occ}
                  </span>
                ))}
              </div>
            </div>

            {/* Size */}
            <div>
              <h3 className="font-headline-md text-[15px] text-primary mb-4 uppercase tracking-widest font-semibold">Size</h3>
              <div className="grid grid-cols-4 gap-2">
                {SIZES.map((size, i) => (
                  <button key={size} className={`border py-2 text-[10px] font-label-sm uppercase tracking-widest transition-colors ${i === 1 ? "border-primary text-primary" : "border-outline-variant hover:border-primary hover:text-primary"}`}>
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Fabric */}
            <div>
              <h3 className="font-headline-md text-[15px] text-primary mb-4 uppercase tracking-widest font-semibold">Fabric</h3>
              <div className="flex flex-col gap-3 font-manrope text-sm text-on-surface-variant">
                {["Silk", "Chiffon", "Georgette", "Cotton", "Velvet"].map((fabric) => (
                  <label key={fabric} className="flex items-center gap-3 cursor-pointer hover:text-primary transition-colors">
                    <input type="checkbox" className="w-4 h-4 rounded border-outline text-primary focus:ring-primary/20" />
                    <span>{fabric}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* ─── Product Grid ─────────────────────────────────────────────────────────── */}
        <div className="flex-grow">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 lg:gap-x-8 gap-y-10 lg:gap-y-14">
            {SAMPLE_PRODUCTS.map((p) => (
              <div key={p.id} className="group relative">
                <Link href={`/product/${p.slug}`}>
                  <div className="aspect-[3/4] overflow-hidden bg-surface-container-highest mb-4 relative">
                    <Image src={p.imageUrl} alt={p.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {p.salePrice && (
                      <span className="absolute top-3 left-3 bg-primary text-white text-[10px] font-label-sm px-2 py-1 uppercase">Sale</span>
                    )}
                    <button className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <span className="material-symbols-outlined text-primary text-[18px]">favorite</span>
                    </button>
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <button className="w-full bg-primary text-white font-label-sm text-[10px] py-3 uppercase tracking-widest">Quick Add</button>
                    </div>
                  </div>
                  <div className="flex justify-between items-start gap-2">
                    <div className="flex flex-col gap-1 min-w-0">
                      <p className="font-label-sm text-[10px] text-outline uppercase tracking-widest">{p.brand}</p>
                      <h3 className="font-semibold text-on-surface text-base leading-snug line-clamp-2">{p.title}</h3>
                    </div>
                    <div className="flex-shrink-0 text-right">
                      <p className="font-bold text-primary text-lg">{formatINR(p.salePrice ?? p.price)}</p>
                      {p.salePrice && <p className="text-sm text-stone-400 line-through">{formatINR(p.price)}</p>}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2 mt-16">
            <button className="w-10 h-10 border border-outline-variant hover:border-primary flex items-center justify-center transition-colors">
              <span className="material-symbols-outlined text-[18px]">chevron_left</span>
            </button>
            {[1, 2, 3, 4, 5].map((p) => (
              <button key={p} className={`w-10 h-10 font-label-sm text-[12px] transition-colors ${p === 1 ? "bg-primary text-white" : "border border-outline-variant hover:border-primary text-on-surface-variant"}`}>
                {p}
              </button>
            ))}
            <button className="w-10 h-10 border border-outline-variant hover:border-primary flex items-center justify-center transition-colors">
              <span className="material-symbols-outlined text-[18px]">chevron_right</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
