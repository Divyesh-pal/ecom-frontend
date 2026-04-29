"use client";

import Image from "next/image";
import { useState } from "react";

function formatINR(n: number) {
  return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n);
}

const PRODUCTS = [
  { id: "SD-001", name: "Royal Banarasi Silk Saree", category: "Sarees", price: 84900, stock: 6, status: "Low Stock", sku: "SD-BAN-001", imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCot6UqnqVXr4lwBGR-539iDp80nEoHsMiU3yIKHfgOuRUos6hm5Ih9BWew3f_l9P0GoC7n9maic0bXVwdGlPEEXgSl5b5N0qq-TDjbsGkQNXt3Vtzthkixj2tM22d0LApPaOxEJpXmtSUyCVXQ0DQYndApviBZFFDkUEIVjSB4kCtTIVg_rJOa8w_qmClUtgfvYzRtUY8BRShQjW8vqQ3EpnmH7gqDo4Fpilz6I0Ktlubq_xSkzhgV9fyb-zv_mtWeUpjorx53V54f" },
  { id: "SD-002", name: "Zari Embroidered Lehenga", category: "Lehengas", price: 42500, stock: 18, status: "In Stock", sku: "SD-LEH-002", imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDNKdLmjwhxNXurWsXHZ5mnWrOHdQ-M-TLLvyDhWd8D54MgG2wr8RB8D6mBSWp3rwqVm0l8fIH5RVXR8h4r6M8BXUm0yXmf14Xp50TdzxY8qCee2YHOTgL8hD9euomFydePN3Vib0zHL7vhiH_89bl3vKJkg2Eu3dGY4bkI_3hTj5a-jla_f9mO_ezG0Unaam4dz8aWPBwyxn2N28Y0KAD6sSVtmxKMAssJTl6ItAX6lHgDqMABML3ihURpTI5lw3gOf6IAnE8hgoax" },
  { id: "SD-003", name: "Heritage Banarasi Saree", category: "Sarees", price: 28900, stock: 0, status: "Out of Stock", sku: "SD-BAN-003", imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAUAoeKI45mA4_SlATYkVB5bf8sMNJm1KpU9W_X6U7qIBnbkMkxrWzSMuUYyXSy1P8EYapi-B6lE1tMB2C4CG_dxedYYr08GIeidGS9cnZTX9v1Kt2SpCYPBEa5N5ZEYGD8OfY6p--vKa-TyF3ZqXa2fDKzWQpxtchEEoWxFuWRN9xXwy64m9_GAvL9r_yZ1EMr9DH4QhiNEwf5LdjVhgZfG7To1PyXEWZf5-OGSQbuziDS6jHE51B9QlzisROfX9LsJP6v8t8IuF3v" },
  { id: "SD-004", name: "Kids Festival Lehenga", category: "Kids", price: 8500, stock: 34, status: "In Stock", sku: "SD-KID-004", imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBBL3kCOK95qamZBuL0eE2DQtbT7qp8ThGiWLT4D-WXBF0x_spNWRhS-uqQSe50yJoM4kfhVWkVqS15BJmLsnNsEf5-HFpbFcGo0IFUePsxOTFA_cS0GdpBb9p_EtD5LEomlFefR0uBHkLDuxiXFg0cRa1uJz7CMLZ5wDXjizVkjVrn3zTID1uK0TWVSrefXPdbnj5-BlTSKJuM9yL-ydWYJvgafsRuQOn-DagUktwGw7ES_CoMi6VlW4YC8P3DWL0d9hRYN_IAuWBN" },
  { id: "SD-005", name: "Chiffon Floral Saree", category: "Sarees", price: 34000, stock: 12, status: "In Stock", sku: "SD-SAR-005", imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAepMK680BPJsTlSku0UqLt5XetZULZvqoVvBYaiZHCjBKad0_ignlbmKI4b9FVwKotM_yTqRftG9KRka09kty_GpJy3turJzLTHS1kixuTrAuYbVutagyEQc6KP7cvIRxzZSS1IbNexFXT9rj7Y9h_ecLNw-8tkbdFVxpbOwlk02RjepIPvgwgvma0ToI3E0t134kPQpSu4GYLsCjlg4LgThssje-JZloheyshHwkv3Zs_HnrLm_T3x2iO_EHB_R2PzzFnzWH2CyNs" },
];

const STATUS_COLORS: Record<string, string> = {
  "In Stock": "text-green-700 bg-green-50",
  "Low Stock": "text-amber-700 bg-amber-50",
  "Out of Stock": "text-red-700 bg-red-50",
};

export default function InventoryPage() {
  const [search, setSearch] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);

  const filtered = PRODUCTS.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.sku.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="flex-1 p-6 lg:p-8 bg-surface min-h-screen">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div>
          <h2 className="font-headline-lg text-primary text-3xl font-semibold mb-1">Inventory Management</h2>
          <p className="font-body-md text-on-surface-variant">Update, track, and curate your high-fashion apparel catalog.</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center justify-center gap-2 bg-primary text-on-primary px-8 py-3 uppercase font-label-sm text-[10px] tracking-widest hover:bg-primary-container transition-colors whisper-shadow-sm"
        >
          <span className="material-symbols-outlined text-[18px]">add</span>
          Add New Product
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter mb-8">
        {[
          { label: "Total Catalog", value: "1,240 Pieces", color: "border-secondary" },
          { label: "Low Stock Alerts", value: "14 Items", color: "border-primary" },
          { label: "Out of Stock", value: "3 Items", color: "border-error" },
          { label: "New This Month", value: "28 Added", color: "border-tertiary" },
        ].map((stat) => (
          <div key={stat.label} className={`bg-surface-container-low p-5 border-b-2 ${stat.color}`}>
            <span className="font-label-sm text-[10px] text-stone-500 uppercase block mb-1">{stat.label}</span>
            <span className="font-headline-md text-on-surface text-xl font-semibold">{stat.value}</span>
          </div>
        ))}
      </div>

      {/* Search + Filters Bar */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="flex-1 flex items-center border border-stone-200 bg-white px-4 py-2 gap-3">
          <span className="material-symbols-outlined text-stone-400 text-[20px]">search</span>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name, SKU, or category..."
            className="bg-transparent border-none outline-none flex-1 font-manrope text-sm"
          />
        </div>
        <select className="border border-stone-200 bg-white px-4 py-2 font-manrope text-sm outline-none cursor-pointer">
          <option>All Categories</option>
          <option>Sarees</option>
          <option>Lehengas</option>
          <option>Kids</option>
          <option>Accessories</option>
        </select>
        <select className="border border-stone-200 bg-white px-4 py-2 font-manrope text-sm outline-none cursor-pointer">
          <option>All Stock Status</option>
          <option>In Stock</option>
          <option>Low Stock</option>
          <option>Out of Stock</option>
        </select>
        <button className="border border-stone-200 bg-white px-4 py-2 font-label-sm text-[10px] uppercase tracking-widest flex items-center gap-2 hover:bg-stone-50 transition-colors">
          <span className="material-symbols-outlined text-[16px]">upload</span>
          Bulk Upload
        </button>
      </div>

      {/* Product Table */}
      <div className="bg-surface-container-lowest rounded-xl border border-stone-200 overflow-hidden whisper-shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-stone-100 bg-stone-50">
                <th className="text-left px-6 py-3">
                  <input type="checkbox" className="w-4 h-4 border-outline text-primary rounded" />
                </th>
                {["Product", "SKU", "Category", "Price", "Stock", "Status", "Actions"].map((h) => (
                  <th key={h} className="text-left px-4 py-3 font-label-sm text-[10px] text-stone-400 uppercase tracking-widest">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-50">
              {filtered.map((product) => (
                <tr key={product.id} className="hover:bg-stone-50 transition-colors group">
                  <td className="px-6 py-4">
                    <input type="checkbox" className="w-4 h-4 border-outline text-primary rounded" />
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-14 relative bg-surface-container overflow-hidden flex-shrink-0">
                        <Image src={product.imageUrl} alt={product.name} fill className="object-cover" />
                      </div>
                      <span className="font-manrope text-sm font-semibold text-on-surface max-w-[180px] truncate">{product.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4 font-label-sm text-[10px] text-stone-500 uppercase tracking-wider">{product.sku}</td>
                  <td className="px-4 py-4 font-label-sm text-[10px] text-stone-500 uppercase tracking-wider">{product.category}</td>
                  <td className="px-4 py-4 font-manrope text-sm font-bold text-on-surface">{formatINR(product.price)}</td>
                  <td className="px-4 py-4 font-manrope text-sm text-on-surface">{product.stock}</td>
                  <td className="px-4 py-4">
                    <span className={`${STATUS_COLORS[product.status]} px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider`}>
                      {product.status}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="text-stone-400 hover:text-primary transition-colors" title="Edit">
                        <span className="material-symbols-outlined text-[18px]">edit</span>
                      </button>
                      <button className="text-stone-400 hover:text-primary transition-colors" title="Duplicate">
                        <span className="material-symbols-outlined text-[18px]">content_copy</span>
                      </button>
                      <button className="text-stone-400 hover:text-error transition-colors" title="Delete">
                        <span className="material-symbols-outlined text-[18px]">delete</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-6 py-4 border-t border-stone-100 flex justify-between items-center">
          <p className="text-stone-400 font-manrope text-xs">Showing {filtered.length} of {PRODUCTS.length} products</p>
          <div className="flex gap-1">
            {[1, 2, 3, "...", 12].map((p, i) => (
              <button key={i} className={`w-8 h-8 font-manrope text-xs transition-colors ${p === 1 ? "bg-primary text-white" : "border border-stone-200 text-stone-500 hover:border-primary"}`}>
                {p}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Add Product Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setShowAddModal(false)}>
          <div className="bg-white max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-headline-md text-on-surface text-2xl font-semibold">Add New Product</h3>
              <button onClick={() => setShowAddModal(false)} className="text-stone-400 hover:text-stone-600">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <div className="space-y-5">
              {[
                { label: "Product Title", type: "text", placeholder: "e.g. Royal Banarasi Silk Saree" },
                { label: "SKU", type: "text", placeholder: "e.g. SD-BAN-001" },
                { label: "Price (₹)", type: "number", placeholder: "e.g. 84900" },
                { label: "Sale Price (₹)", type: "number", placeholder: "Optional" },
                { label: "Stock Quantity", type: "number", placeholder: "e.g. 25" },
              ].map((f) => (
                <div key={f.label} className="flex flex-col gap-2">
                  <label className="font-label-sm text-[10px] text-on-surface-variant uppercase tracking-widest">{f.label}</label>
                  <input type={f.type} placeholder={f.placeholder} className="input-boutique" />
                </div>
              ))}
              <div className="flex flex-col gap-2">
                <label className="font-label-sm text-[10px] text-on-surface-variant uppercase tracking-widest">Category</label>
                <select className="border-b border-stone-300 bg-transparent py-2 font-manrope text-sm outline-none cursor-pointer focus:border-primary">
                  <option>Sarees</option>
                  <option>Lehengas</option>
                  <option>Kurtis</option>
                  <option>Salwar Suits</option>
                  <option>Kids</option>
                  <option>Accessories</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-label-sm text-[10px] text-on-surface-variant uppercase tracking-widest">Description</label>
                <textarea rows={3} className="border border-stone-200 p-3 font-manrope text-sm resize-none focus:border-primary outline-none" placeholder="Product description..." />
              </div>
              <div className="border-2 border-dashed border-stone-200 p-8 text-center hover:border-primary transition-colors cursor-pointer">
                <span className="material-symbols-outlined text-stone-300 text-[48px]">cloud_upload</span>
                <p className="font-label-sm text-[10px] text-stone-400 uppercase tracking-widest mt-2">Click or drag to upload images</p>
              </div>
              <div className="flex gap-3 pt-2">
                <button
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 border border-stone-200 py-4 font-label-sm text-[10px] uppercase tracking-widest hover:bg-stone-50 transition-colors"
                >
                  Cancel
                </button>
                <button className="flex-1 bg-primary text-white py-4 font-label-sm text-[10px] uppercase tracking-widest hover:bg-primary-container transition-colors">
                  Add Product
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
