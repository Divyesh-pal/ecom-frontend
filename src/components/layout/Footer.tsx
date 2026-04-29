import Link from "next/link";

const FOOTER_LINKS = {
  Collections: [
    { label: "Sarees", href: "/collections/sarees" },
    { label: "Lehengas", href: "/collections/lehengas" },
    { label: "Kurtis", href: "/collections/kurtis" },
    { label: "Salwar Suits", href: "/collections/salwar-suits" },
    { label: "Kids Wear", href: "/collections/kids" },
    { label: "Accessories", href: "/collections/accessories" },
  ],
  "Customer Care": [
    { label: "Shipping & Delivery", href: "/shipping" },
    { label: "Returns & Refunds", href: "/returns" },
    { label: "Size Guide", href: "/size-guide" },
    { label: "Care Instructions", href: "/care-guide" },
    { label: "Track Order", href: "/track-order" },
  ],
  Company: [
    { label: "About Stylish Desi", href: "/about" },
    { label: "Sustainability", href: "/sustainability" },
    { label: "Artisan Stories", href: "/artisans" },
    { label: "Press", href: "/press" },
    { label: "Careers", href: "/careers" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
  ],
};

const SOCIAL_LINKS = [
  { icon: "instagram", label: "Instagram", href: "https://instagram.com/stylishdesi" },
  { icon: "facebook", label: "Facebook", href: "https://facebook.com/stylishdesi" },
  { icon: "pinterest", label: "Pinterest", href: "https://pinterest.com/stylishdesi" },
];

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-400">
      {/* Newsletter Section */}
      <div className="border-b border-stone-800">
        <div className="max-w-8xl mx-auto px-6 lg:px-12 py-12 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-label-sm font-label-sm text-secondary uppercase tracking-widest mb-3 block">
                Join the Inner Circle
              </span>
              <h3 className="text-headline-lg font-headline-lg text-white mb-2">
                Heritage Delivered to Your Inbox
              </h3>
              <p className="text-body-md font-body-md text-stone-500">
                Get early access to new collections, artisan stories, and exclusive offers.
              </p>
            </div>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 bg-stone-900 border border-stone-700 text-white px-4 py-3 font-manrope text-sm outline-none focus:border-secondary transition-colors placeholder:text-stone-600"
              />
              <button className="bg-primary text-white px-8 py-3 font-label-sm text-label-sm uppercase tracking-widest hover:bg-primary-container transition-colors flex-shrink-0">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-8xl mx-auto px-6 lg:px-12 py-12 lg:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="text-xl font-bold tracking-widest text-white uppercase font-epilogue block mb-4">
              Stylish Desi
            </Link>
            <p className="text-stone-500 text-sm font-manrope leading-relaxed mb-6">
              Premium Indian ethnic wear crafted with centuries-old artisanship for the modern woman.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-stone-500 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-stone-500 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-stone-500 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-label-sm font-label-sm text-white uppercase tracking-widest mb-4">
                {heading}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-stone-500 hover:text-white transition-colors font-manrope text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-stone-800 mt-12 pt-8 flex flex-col lg:flex-row justify-between items-center gap-4">
          <p className="text-stone-600 font-epilogue text-xs tracking-widest uppercase">
            © {new Date().getFullYear()} Stylish Desi. A Tribute to Craftsmanship.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-stone-600 font-manrope text-xs">
              Secure payments via
            </span>
            <div className="bg-[#2B3144] px-3 py-1 rounded text-white font-bold italic text-xs tracking-tighter">
              Razorpay
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
