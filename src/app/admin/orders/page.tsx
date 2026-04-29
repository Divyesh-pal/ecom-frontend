"use client";

import { useState } from "react";

function formatINR(n: number) {
  return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n);
}

const ORDER_STATUSES = ["All", "Pending", "Paid", "Processing", "Shipped", "Delivered", "Cancelled", "Returned", "Refunded"];

const STATUS_COLORS: Record<string, string> = {
  DELIVERED: "text-green-700 bg-green-50",
  PROCESSING: "text-blue-700 bg-blue-50",
  SHIPPED: "text-amber-700 bg-amber-50",
  PENDING: "text-stone-600 bg-stone-100",
  PAID: "text-purple-700 bg-purple-50",
  CANCELLED: "text-red-700 bg-red-50",
  RETURNED: "text-orange-700 bg-orange-50",
  REFUNDED: "text-teal-700 bg-teal-50",
};

const ORDERS = [
  { id: "#SD-4821", customer: "Ananya Sharma", email: "ananya@example.com", product: "Zari Embroidered Saree", amount: 42500, status: "DELIVERED", date: "2024-07-15", payment: "UPI" },
  { id: "#SD-4820", customer: "Priya Mehta", email: "priya@example.com", product: "Heritage Banarasi Silk", amount: 84900, status: "PROCESSING", date: "2024-07-14", payment: "Credit Card" },
  { id: "#SD-4819", customer: "Meera Reddy", email: "meera@example.com", product: "Kids Festival Lehenga", amount: 8500, status: "SHIPPED", date: "2024-07-14", payment: "UPI" },
  { id: "#SD-4818", customer: "Kavita Patel", email: "kavita@example.com", product: "Royal Velvet Anarkali", amount: 18500, status: "PENDING", date: "2024-07-13", payment: "COD" },
  { id: "#SD-4817", customer: "Sunita Rao", email: "sunita@example.com", product: "Chiffon Floral Saree", amount: 34000, status: "CANCELLED", date: "2024-07-12", payment: "Credit Card" },
  { id: "#SD-4816", customer: "Deepa Kumar", email: "deepa@example.com", product: "Silk Organza Set", amount: 22000, status: "PAID", date: "2024-07-12", payment: "Net Banking" },
  { id: "#SD-4815", customer: "Nisha Singh", email: "nisha@example.com", product: "Embroidered Kanjivaram", amount: 49000, status: "RETURNED", date: "2024-07-11", payment: "Credit Card" },
];

export default function OrdersPage() {
  const [activeStatus, setActiveStatus] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = ORDERS.filter((o) => {
    const matchStatus = activeStatus === "All" || o.status === activeStatus.toUpperCase();
    const matchSearch = o.customer.toLowerCase().includes(search.toLowerCase()) || o.id.toLowerCase().includes(search.toLowerCase());
    return matchStatus && matchSearch;
  });

  return (
    <main className="flex-1 p-6 lg:p-8 bg-surface min-h-screen">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div>
          <h2 className="font-headline-lg text-primary text-3xl font-semibold mb-1">Orders</h2>
          <p className="font-body-md text-on-surface-variant">Manage and track all customer orders.</p>
        </div>
        <button className="flex items-center gap-2 border border-secondary text-secondary px-6 py-3 font-label-sm text-[10px] uppercase tracking-widest hover:bg-secondary/5 transition-colors">
          <span className="material-symbols-outlined text-[16px]">download</span> Export CSV
        </button>
      </div>

      {/* Status Tabs */}
      <div className="flex overflow-x-auto scrollbar-hide gap-2 mb-6 pb-1">
        {ORDER_STATUSES.map((status) => (
          <button
            key={status}
            onClick={() => setActiveStatus(status)}
            className={`flex-shrink-0 px-4 py-2 font-label-sm text-[10px] uppercase tracking-widest transition-colors rounded-full ${
              activeStatus === status
                ? "bg-primary text-white"
                : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container"
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="flex items-center border border-stone-200 bg-white px-4 py-2 gap-3 mb-6">
        <span className="material-symbols-outlined text-stone-400 text-[20px]">search</span>
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search by order ID or customer name..." className="bg-transparent border-none outline-none flex-1 font-manrope text-sm" />
      </div>

      {/* Orders Table */}
      <div className="bg-surface-container-lowest rounded-xl border border-stone-200 overflow-hidden whisper-shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-stone-100 bg-stone-50">
                {["Order ID", "Customer", "Product", "Amount", "Payment", "Date", "Status", "Actions"].map((h) => (
                  <th key={h} className="text-left px-4 py-3 font-label-sm text-[10px] text-stone-400 uppercase tracking-widest">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-50">
              {filtered.map((order) => (
                <tr key={order.id} className="hover:bg-stone-50 transition-colors group">
                  <td className="px-4 py-4 font-manrope text-sm font-semibold text-primary">{order.id}</td>
                  <td className="px-4 py-4">
                    <div>
                      <p className="font-manrope text-sm font-semibold text-on-surface">{order.customer}</p>
                      <p className="text-[11px] text-stone-400 font-manrope">{order.email}</p>
                    </div>
                  </td>
                  <td className="px-4 py-4 font-manrope text-sm text-on-surface-variant max-w-[160px] truncate">{order.product}</td>
                  <td className="px-4 py-4 font-manrope text-sm font-bold text-on-surface">{formatINR(order.amount)}</td>
                  <td className="px-4 py-4 font-label-sm text-[10px] text-stone-500 uppercase tracking-wider">{order.payment}</td>
                  <td className="px-4 py-4 font-manrope text-xs text-stone-400">{order.date}</td>
                  <td className="px-4 py-4">
                    <span className={`${STATUS_COLORS[order.status] || "text-stone-600 bg-stone-100"} px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="text-[10px] font-label-sm text-primary uppercase tracking-widest hover:opacity-70">View</button>
                      <button className="text-[10px] font-label-sm text-secondary uppercase tracking-widest hover:opacity-70">Invoice</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-4 py-4 border-t border-stone-100 text-stone-400 font-manrope text-xs">
          Showing {filtered.length} of {ORDERS.length} orders
        </div>
      </div>
    </main>
  );
}
