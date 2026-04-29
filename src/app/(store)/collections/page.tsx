import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Collections — Indian Ethnic Wear",
  description: "Browse our complete range of women's and kids' Indian ethnic wear — sarees, lehengas, kurtis, salwar suits and more.",
};

const COLLECTIONS = [
  { slug: "sarees", title: "Sarees", count: "120+", desc: "Silk, Banarasi, Chiffon & more", imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCqyJn3_PvMXOK4p6mFV9tbDct-lh1v9mwQCv1sK7YM966yGUGyAD7eToiOGIUKCwOGUKOApPe8PQK9VPpoL2eRCJZsBMvonPOzlUbTcIWEjLbo91Mehv4YkNOTDu94eScgUURQayHacdRRW_3boEAKqCTEvaWuBFXnVJmwpRE5lAebtFhnTl0rktTE-ROdTsGEoLGZY-zqaJb5CcucIrGzz1SYuRpmikAiwCHnvK5Ukoy9nkNB3OeHLJ-Uq9vcdA5vkfb51GTZHQG" },
  { slug: "lehengas", title: "Lehengas", count: "80+", desc: "Bridal, Party & Festival", imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQHdwPtgdsy2TubXwNLB4Ev6Aq3Bk9WqShVWVrE1JajYrmeyKwCNx0MDVC2_RelmsR0z8fViwrxN4s3WVUI_22FBlTaEnPqVgh8PPqA8JJvrI9eSH_mQt-VlHJjsWbfo1-dY6Cp8niKf0Q9QRXEKW5zRmVfTgOmBoFZxlJW9_Uh2tLMw_tITiaZmYPcQZG2iWq0vZVkopZRWqaujSfm0hKG8uweapXNn3rJOO1N8Rm0GLRI8nRWhQ6pkwSFh2mteCjIvYoqiNdMU4w" },
  { slug: "kurtis", title: "Kurtis & Tunics", count: "200+", desc: "Casual, Formal & Fusion", imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAepMK680BPJsTlSku0UqLt5XetZULZvqoVvBYaiZHCjBKad0_ignlbmKI4b9FVwKotM_yTqRftG9KRka09kty_GpJy3turJzLTHS1kixuTrAuYbVutagyEQc6KP7cvIRxzZSS1IbNexFXT9rj7Y9h_ecLNw-8tkbdFVxpbOwlk02RjepIPvgwgvma0ToI3E0t134kPQpSu4GYLsCjlg4LgThssje-JZloheyshHwkv3Zs_HnrLm_T3x2iO_EHB_R2PzzFnzWH2CyNs" },
  { slug: "salwar-suits", title: "Salwar Suits", count: "150+", desc: "Anarkali, Patiala & Straight", imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCot6UqnqVXr4lwBGR-539iDp80nEoHsMiU3yIKHfgOuRUos6hm5Ih9BWew3f_l9P0GoC7n9maic0bXVwdGlPEEXgSl5b5N0qq-TDjbsGkQNXt3Vtzthkixj2tM22d0LApPaOxEJpXmtSUyCVXQ0DQYndApviBZFFDkUEIVjSB4kCtTIVg_rJOa8w_qmClUtgfvYzRtUY8BRShQjW8vqQ3EpnmH7gqDo4Fpilz6I0Ktlubq_xSkzhgV9fyb-zv_mtWeUpjorx53V54f" },
  { slug: "kids", title: "Kids Ethnic Wear", count: "90+", desc: "Girls, Boys & Festival", imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBBL3kCOK95qamZBuL0eE2DQtbT7qp8ThGiWLT4D-WXBF0x_spNWRhS-uqQSe50yJoM4kfhVWkVqS15BJmLsnNsEf5-HFpbFcGo0IFUePsxOTFA_cS0GdpBb9p_EtD5LEomlFefR0uBHkLDuxiXFg0cRa1uJz7CMLZ5wDXjizVkjVrn3zTID1uK0TWVSrefXPdbnj5-BlTSKJuM9yL-ydWYJvgafsRuQOn-DagUktwGw7ES_CoMi6VlW4YC8P3DWL0d9hRYN_IAuWBN" },
  { slug: "accessories", title: "Accessories", count: "60+", desc: "Jewellery, Dupattas & Bags", imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxu9GzoF-lwuDlsm7gjucd__zVXoT_aySIsITFCAu_m5OHEZ_dScYJsyW-Bg_jbIK3oXjdKkhOS5_rMPaHwNX2CGjeZKWe7NQQ6MMCbJVr3EK_sbxTRih2xC1K1_NVWLmjA3RPxiwhUuaYfU1l9Ksr5nuODepj5J2twCNbishWjcz_X9Gr8IbDVT8xAgtI72C7fQOL_y8eQIl8zA15NbnWGGsTy1z_JgZQLP3UZWaDEVMqRmlVE4OLKlEbDNUHPSSDcKebyligidKI" },
];

export default function CollectionsPage() {
  return (
    <div className="bg-background min-h-screen">
      <div className="max-w-8xl mx-auto px-6 lg:px-12 py-12">
        <div className="mb-12">
          <span className="font-label-sm text-secondary uppercase tracking-widest block mb-3">Explore</span>
          <h1 className="font-headline-xl text-primary text-4xl font-bold">All Collections</h1>
          <p className="text-stone-500 mt-2 font-manrope">Curated Indian ethnic wear for every occasion</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COLLECTIONS.map((col) => (
            <Link key={col.slug} href={`/collections/${col.slug}`} className="group relative aspect-[4/5] overflow-hidden block">
              <Image src={col.imageUrl} alt={col.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 hero-scrim-bottom" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="font-label-sm text-white/60 uppercase tracking-widest text-[10px] block mb-1">{col.count} Styles · {col.desc}</span>
                <h2 className="font-headline-md text-white text-2xl font-semibold uppercase tracking-wide">{col.title}</h2>
                <span className="font-label-sm text-white/70 border-b border-white/40 pb-0.5 text-[10px] uppercase tracking-widest inline-flex items-center gap-1 mt-2 group-hover:gap-2 transition-all">
                  Shop Now <span className="material-symbols-outlined text-[12px]">arrow_forward</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
