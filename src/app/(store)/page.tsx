import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stylish Desi — Premium Indian Ethnic Wear",
  description:
    "Discover premium Indian ethnic wear for women and kids. Handcrafted sarees, lehengas, kurtis, and more.",
};

// ─── Static product data (replace with API calls) ──────────────────────────────
const TRENDING_PRODUCTS = [
  {
    id: "1",
    title: "Zari Embroidered Silk Lehenga",
    slug: "zari-embroidered-silk-lehenga",
    brand: "Signature Collection",
    price: 42500,
    salePrice: null,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDNKdLmjwhxNXurWsXHZ5mnWrOHdQ-M-TLLvyDhWd8D54MgG2wr8RB8D6mBSWp3rwqVm0l8fIH5RVXR8h4r6M8BXUm0yXmf14Xp50TdzxY8qCee2YHOTgL8hD9euomFydePN3Vib0zHL7vhiH_89bl3vKJkg2Eu3dGY4bkI_3hTj5a-jla_f9mO_ezG0Unaam4dz8aWPBwyxn2N28Y0KAD6sSVtmxKMAssJTl6ItAX6lHgDqMABML3ihURpTI5lw3gOf6IAnE8hgoax",
  },
  {
    id: "2",
    title: "Heritage Banarasi Saree",
    slug: "heritage-banarasi-saree",
    brand: "Handcrafted",
    price: 28900,
    salePrice: 24500,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAUAoeKI45mA4_SlATYkVB5bf8sMNJm1KpU9W_X6U7qIBnbkMkxrWzSMuUYyXSy1P8EYapi-B6lE1tMB2C4CG_dxedYYr08GIeidGS9cnZTX9v1Kt2SpCYPBEa5N5ZEYGD8OfY6p--vKa-TyF3ZqXa2fDKzWQpxtchEEoWxFuWRN9xXwy64m9_GAvL9r_yZ1EMr9DH4QhiNEwf5LdjVhgZfG7To1PyXEWZf5-OGSQbuziDS6jHE51B9QlzisROfX9LsJP6v8t8IuF3v",
  },
  {
    id: "3",
    title: "Floral Applique Chiffon Saree",
    slug: "floral-applique-chiffon-saree",
    brand: "Boutique Exclusive",
    price: 34000,
    salePrice: null,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAepMK680BPJsTlSku0UqLt5XetZULZvqoVvBYaiZHCjBKad0_ignlbmKI4b9FVwKotM_yTqRftG9KRka09kty_GpJy3turJzLTHS1kixuTrAuYbVutagyEQc6KP7cvIRxzZSS1IbNexFXT9rj7Y9h_ecLNw-8tkbdFVxpbOwlk02RjepIPvgwgvma0ToI3E0t134kPQpSu4GYLsCjlg4LgThssje-JZloheyshHwkv3Zs_HnrLm_T3x2iO_EHB_R2PzzFnzWH2CyNs",
  },
  {
    id: "4",
    title: "Royal Velvet Anarkali",
    slug: "royal-velvet-anarkali",
    brand: "Heritage Edit",
    price: 18500,
    salePrice: 15500,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCot6UqnqVXr4lwBGR-539iDp80nEoHsMiU3yIKHfgOuRUos6hm5Ih9BWew3f_l9P0GoC7n9maic0bXVwdGlPEEXgSl5b5N0qq-TDjbsGkQNXt3Vtzthkixj2tM22d0LApPaOxEJpXmtSUyCVXQ0DQYndApviBZFFDkUEIVjSB4kCtTIVg_rJOa8w_qmClUtgfvYzRtUY8BRShQjW8vqQ3EpnmH7gqDo4Fpilz6I0Ktlubq_xSkzhgV9fyb-zv_mtWeUpjorx53V54f",
  },
];

const CATEGORIES = [
  {
    label: "Sarees",
    subtitle: "Browse 120+ Styles",
    href: "/collections/sarees",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCqyJn3_PvMXOK4p6mFV9tbDct-lh1v9mwQCv1sK7YM966yGUGyAD7eToiOGIUKCwOGUKOApPe8PQK9VPpoL2eRCJZsBMvonPOzlUbTcIWEjLbo91Mehv4YkNOTDu94eScgUURQayHacdRRW_3boEAKqCTEvaWuBFXnVJmwpRE5lAebtFhnTl0rktTE-ROdTsGEoLGZY-zqaJb5CcucIrGzz1SYuRpmikAiwCHnvK5Ukoy9nkNB3OeHLJ-Uq9vcdA5vkfb51GTZHQG",
  },
  {
    label: "Lehengas",
    subtitle: "The Bridal Edit",
    href: "/collections/lehengas",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAQHdwPtgdsy2TubXwNLB4Ev6Aq3Bk9WqShVWVrE1JajYrmeyKwCNx0MDVC2_RelmsR0z8fViwrxN4s3WVUI_22FBlTaEnPqVgh8PPqA8JJvrI9eSH_mQt-VlHJjsWbfo1-dY6Cp8niKf0Q9QRXEKW5zRmVfTgOmBoFZxlJW9_Uh2tLMw_tITiaZmYPcQZG2iWq0vZVkopZRWqaujSfm0hKG8uweapXNn3rJOO1N8Rm0GLRI8nRWhQ6pkwSFh2mteCjIvYoqiNdMU4w",
  },
  {
    label: "Kids",
    subtitle: "Little Royalty",
    href: "/collections/kids",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBBL3kCOK95qamZBuL0eE2DQtbT7qp8ThGiWLT4D-WXBF0x_spNWRhS-uqQSe50yJoM4kfhVWkVqS15BJmLsnNsEf5-HFpbFcGo0IFUePsxOTFA_cS0GdpBb9p_EtD5LEomlFefR0uBHkLDuxiXFg0cRa1uJz7CMLZ5wDXjizVkjVrn3zTID1uK0TWVSrefXPdbnj5-BlTSKJuM9yL-ydWYJvgafsRuQOn-DagUktwGw7ES_CoMi6VlW4YC8P3DWL0d9hRYN_IAuWBN",
  },
];

function formatINR(amount: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export default function HomePage() {
  return (
    <div className="bg-background">
      {/* ─── Hero Banner ──────────────────────────────────────────────────────────── */}
      <section className="relative h-[600px] lg:h-[870px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiPDQQSbX1P2j8vf7EJxGgjOXd9PfEVzImpOVkgpjhma8nNdUnDU0UfUgavLbKp8w_iBBZC85mbcYmGvFsh64T-TQmAJtGictsvrFGel9Z3x0e11pwWTP1t_Yp6vEM78Q2iadlDP6TL9FtkF6u73ItIlAPLH5uVqfbodQVZrm5uT6J3xYbDKkinb-bHn_9POB25QAiahaBLDEfmAaiA1J10IY7fle75qMLyVLYSBYNdXeg6nOv6QsDEGyiYeIDtdYgoxShOVJ_n_f9"
            alt="Summer Heritage Collection — Woman in crimson embroidered saree"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 hero-scrim" />
        </div>

        <div className="relative z-10 h-full max-w-8xl mx-auto px-6 lg:px-12 flex flex-col justify-center items-start">
          <span className="font-label-sm text-white tracking-[0.3em] uppercase mb-stack-sm opacity-90">
            Limited Edition
          </span>
          <h1 className="font-headline-xl text-white text-4xl lg:text-[40px] font-bold leading-tight max-w-2xl mb-stack-md">
            Summer 2024 <br />
            Heritage Collection
          </h1>
          <p className="font-body-lg text-white/80 max-w-lg mb-stack-lg text-lg">
            Experience the delicate fusion of ancient hand-woven textiles and
            the sharp silhouettes of modern high fashion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/collections"
              className="bg-primary text-white font-label-sm px-10 py-4 uppercase tracking-widest hover:bg-primary-container transition-all text-center"
            >
              Shop The Collection
            </Link>
            <Link
              href="/lookbook"
              className="border border-white text-white font-label-sm px-10 py-4 uppercase tracking-widest hover:bg-white hover:text-primary transition-all text-center"
            >
              Explore Lookbook
            </Link>
          </div>
        </div>

        {/* Scroll indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
          <div className="w-12 h-1 bg-white" />
          <div className="w-12 h-1 bg-white/30" />
          <div className="w-12 h-1 bg-white/30" />
        </div>
      </section>

      {/* ─── Announcement Bar ─────────────────────────────────────────────────────── */}
      <div className="bg-primary text-white text-center py-3">
        <p className="font-label-sm text-label-sm uppercase tracking-[0.2em]">
          Free Shipping on Orders Above ₹2,000 · Use Code{" "}
          <strong>HERITAGE10</strong> for 10% off
        </p>
      </div>

      {/* ─── Category Grid ────────────────────────────────────────────────────────── */}
      <section className="py-section-padding max-w-8xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-end mb-stack-lg">
          <div>
            <h2 className="font-headline-lg text-primary uppercase tracking-tight text-3xl font-semibold">
              Curation
            </h2>
            <p className="font-body-md text-stone-500 mt-1">
              Discover your style through our dedicated segments.
            </p>
          </div>
          <Link
            href="/collections"
            className="hidden sm:flex items-center gap-2 font-label-sm text-label-sm text-primary uppercase tracking-widest border-b border-primary pb-1 hover:opacity-70 transition-opacity"
          >
            View All
            <span className="material-symbols-outlined text-[16px]">
              arrow_forward
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.label}
              href={cat.href}
              className="group relative aspect-[3/4] overflow-hidden cursor-pointer"
            >
              <Image
                src={cat.imageUrl}
                alt={cat.label}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
              <div className="absolute bottom-8 left-8">
                <h3 className="font-headline-md text-white uppercase tracking-widest text-2xl font-semibold">
                  {cat.label}
                </h3>
                <span className="font-label-sm text-white/80 border-b border-white/40 pb-1 text-xs uppercase tracking-widest">
                  {cat.subtitle}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ─── Trending Products ────────────────────────────────────────────────────── */}
      <section className="py-section-padding bg-surface-container-low">
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-end mb-stack-lg">
            <div>
              <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block mb-2">
                Most Loved
              </span>
              <h2 className="font-headline-lg text-on-surface text-3xl font-semibold">
                Trending Now
              </h2>
            </div>
            <Link
              href="/collections?sort=trending"
              className="hidden sm:flex items-center gap-2 font-label-sm text-label-sm text-primary uppercase tracking-widest border-b border-primary pb-1 hover:opacity-70 transition-opacity"
            >
              See All
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
            {TRENDING_PRODUCTS.map((p) => (
              <div key={p.id} className="group relative">
                <Link href={`/product/${p.slug}`}>
                  <div className="aspect-[3/4] overflow-hidden bg-surface-container-highest mb-stack-sm relative">
                    <Image
                      src={p.imageUrl}
                      alt={p.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {p.salePrice && (
                      <span className="absolute top-3 left-3 bg-primary text-white text-[10px] font-label-sm px-2 py-1 uppercase tracking-wider">
                        Sale
                      </span>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <button className="w-full bg-primary text-white font-label-sm text-label-sm py-3 uppercase tracking-widest">
                        Quick Add
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between items-start gap-2">
                    <div>
                      <p className="font-label-sm text-label-sm text-outline uppercase tracking-widest truncate text-[10px]">
                        {p.brand}
                      </p>
                      <h3 className="font-semibold text-on-surface text-base mt-0.5 line-clamp-2">
                        {p.title}
                      </h3>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="font-bold text-primary text-lg">
                        {formatINR(p.salePrice ?? p.price)}
                      </p>
                      {p.salePrice && (
                        <p className="text-sm text-stone-400 line-through">
                          {formatINR(p.price)}
                        </p>
                      )}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Heritage Banner ──────────────────────────────────────────────────────── */}
      <section className="relative h-[400px] lg:h-[500px] overflow-hidden">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBom8vD8YYaXHLymisxjy5hfVq0f2Ok2lLwI27gGNV0T73tFqhZ10foC-OBGSVzJrTwUz6Io_qn68sW3fU4g5pvW77up2WHTV9tgyJqIKvgGgz5XPPnM4Zl802u5E1lDz1wHaCdDefKb1HGxgnVGeNYa9zVWdhNP35t4_-6H1g06JCLtGkSe1zC44ktlNUTVuznqZx7i2qec0-mAJzzh0l8mUHtlDGP56zH7g-o2XxXEfINAMVGsmnM3ddK9N0mp4JItbrQB590bJFZ"
          alt="Artisan craftsmanship"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/80 to-stone-950/30" />
        <div className="relative z-10 h-full flex items-center max-w-8xl mx-auto px-6 lg:px-12">
          <div className="max-w-xl">
            <span className="font-label-sm text-secondary uppercase tracking-[0.3em] block mb-4">
              Our Promise
            </span>
            <h2 className="font-headline-xl text-white text-3xl lg:text-5xl font-bold mb-4 leading-tight">
              Six Months of Artisan Labor in Every Piece
            </h2>
            <p className="font-body-lg text-white/70 mb-8">
              Every garment is a collaboration between ancient craft guilds and
              contemporary designers — a living museum you can wear.
            </p>
            <Link
              href="/artisans"
              className="border border-secondary text-secondary font-label-sm px-8 py-3 uppercase tracking-widest hover:bg-secondary hover:text-white transition-all inline-block"
            >
              Meet the Artisans
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Festival Collection ──────────────────────────────────────────────────── */}
      <section className="py-section-padding max-w-8xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block mb-3">
            Celebrate in Style
          </span>
          <h2 className="font-headline-lg text-on-surface text-3xl font-semibold">
            Festival Collections
          </h2>
          <p className="text-stone-500 mt-2 font-body-md">
            Curated for Diwali, Navratri, Weddings & beyond
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Diwali Edit", count: "48 pieces", color: "bg-amber-50" },
            { label: "Bridal Wear", count: "62 pieces", color: "bg-rose-50" },
            { label: "Navratri", count: "35 pieces", color: "bg-purple-50" },
            { label: "Sangeet", count: "29 pieces", color: "bg-teal-50" },
          ].map((fest) => (
            <Link
              key={fest.label}
              href={`/collections/${fest.label.toLowerCase().replace(" ", "-")}`}
              className={`${fest.color} p-8 flex flex-col justify-between min-h-[160px] hover:shadow-whisper transition-shadow group`}
            >
              <span className="font-label-sm text-label-sm text-stone-400 uppercase tracking-widest">
                {fest.count}
              </span>
              <div>
                <h3 className="font-headline-md text-on-surface text-xl font-semibold mb-2">
                  {fest.label}
                </h3>
                <span className="font-label-sm text-primary uppercase tracking-widest text-[10px] flex items-center gap-1 group-hover:gap-2 transition-all">
                  Shop Now
                  <span className="material-symbols-outlined text-[14px]">
                    arrow_forward
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ─── Testimonials ─────────────────────────────────────────────────────────── */}
      <section className="py-section-padding bg-stone-950">
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="font-headline-lg text-white text-3xl font-semibold">
              Voices of Our Patrons
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "The banarasi saree I ordered was simply breathtaking. The zari work is exquisite — I've received compliments at every event.",
                name: "Priya Sharma",
                city: "Mumbai",
                rating: 5,
              },
              {
                quote:
                  "Finally an ethnic wear brand that understands premium quality. The lehenga arrived perfectly packed and exceeded all expectations.",
                name: "Ananya Kapoor",
                city: "Delhi",
                rating: 5,
              },
              {
                quote:
                  "Bought the kids' festival collection for Diwali and my daughter absolutely loved it. The fabric is incredibly soft and safe.",
                name: "Meera Reddy",
                city: "Hyderabad",
                rating: 5,
              },
            ].map((t, i) => (
              <div key={i} className="bg-stone-900 p-8">
                <div className="flex gap-0.5 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <span
                      key={s}
                      className="material-symbols-outlined text-secondary text-[16px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>
                <p className="text-stone-300 font-manrope text-sm leading-relaxed mb-6 italic">
                  "{t.quote}"
                </p>
                <div>
                  <p className="text-white font-semibold font-epilogue">{t.name}</p>
                  <p className="text-stone-500 font-manrope text-xs uppercase tracking-wider">
                    {t.city}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Kids Section ─────────────────────────────────────────────────────────── */}
      <section className="py-section-padding max-w-8xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block mb-4">
              Little Royalty
            </span>
            <h2 className="font-headline-xl text-on-surface text-4xl font-bold mb-4 leading-tight">
              Ethnic Wear
              <br />
              for Children
            </h2>
            <p className="font-body-lg text-stone-500 mb-8">
              Soft fabrics, vibrant colours, and festive designs — crafted with
              the same care as our adult collections, sized for joy.
            </p>
            <Link
              href="/collections/kids"
              className="bg-primary text-white font-label-sm px-10 py-4 uppercase tracking-widest hover:bg-primary-container transition-all inline-block"
            >
              Shop Kids Collection
            </Link>
          </div>
          <div className="relative aspect-[4/5]">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBL3kCOK95qamZBuL0eE2DQtbT7qp8ThGiWLT4D-WXBF0x_spNWRhS-uqQSe50yJoM4kfhVWkVqS15BJmLsnNsEf5-HFpbFcGo0IFUePsxOTFA_cS0GdpBb9p_EtD5LEomlFefR0uBHkLDuxiXFg0cRa1uJz7CMLZ5wDXjizVkjVrn3zTID1uK0TWVSrefXPdbnj5-BlTSKJuM9yL-ydWYJvgafsRuQOn-DagUktwGw7ES_CoMi6VlW4YC8P3DWL0d9hRYN_IAuWBN"
              alt="Kids ethnic wear collection"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
