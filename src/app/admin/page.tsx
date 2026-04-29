"use client";

import { useState } from "react";
import Link from "next/link";

function formatINR(amount: number) {
  return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(amount);
}

const METRICS = [
  { label: "Total Revenue", value: 2450000, change: "+12.5%", positive: true, color: "text-green-700 bg-green-50", bars: [40, 60, 80, 100, 50, 70, 30] },
  { label: "Total Orders", value: 1284, prefix: "", change: "-2.4%", positive: false, color: "text-red-700 bg-red-50", bars: [80, 60, 90, 40, 70, 100, 50] },
  { label: "New Customers", value: 432, prefix: "", change: "+8.1%", positive: true, color: "text-green-700 bg-green-50", bars: [30, 50, 100, 80, 60, 40, 70] },
];

const RECENT_ORDERS = [
  { id: "#SD-4821", customer: "Ananya Sharma", product: "Zari Embroidered Saree", amount: 42500, status: "DELIVERED", statusColor: "text-green-700 bg-green-50" },
  { id: "#SD-4820", customer: "Priya Mehta", product: "Heritage Banarasi Silk", amount: 84900, status: "PROCESSING", statusColor: "text-blue-700 bg-blue-50" },
  { id: "#SD-4819", customer: "Meera Reddy", product: "Kids Festival Lehenga", amount: 8500, status: "SHIPPED", statusColor: "text-amber-700 bg-amber-50" },
  { id: "#SD-4818", customer: "Kavita Patel", product: "Royal Velvet Anarkali", amount: 18500, status: "PENDING", statusColor: "text-stone-600 bg-stone-100" },
  { id: "#SD-4817", customer: "Sunita Rao", product: "Chiffon Floral Saree", amount: 34000, status: "CANCELLED", statusColor: "text-red-700 bg-red-50" },
];

const TOP_PRODUCTS = [
  { name: "Royal Banarasi Silk Saree", sold: 48, revenue: 4075200, trend: 12 },
  { name: "Zari Embroidered Lehenga", sold: 35, revenue: 1487500, trend: 8 },
  { name: "Heritage Anarkali Set", sold: 62, revenue: 1147000, trend: -3 },
  { name: "Kids Diwali Collection", sold: 91, revenue: 773500, trend: 24 },
];

export default function AdminDashboardPage() {
  const [chartPeriod, setChartPeriod] = useState("Last 6 Months");

  const CHART_DATA = [
    { month: "Jan", value: 240000, height: "h-32" },
    { month: "Feb", value: 310000, height: "h-48" },
    { month: "Mar", value: 280000, height: "h-40" },
    { month: "Apr", value: 420000, height: "h-64" },
    { month: "May", value: 350000, height: "h-52" },
    { month: "Jun", value: 380000, height: "h-56" },
  ];

  return (
    <main className="p-8 bg-surface min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-end mb-10 flex-wrap gap-6">
        <div>
          <h1 className="font-headline-xl text-primary text-4xl font-bold mb-2">Dashboard Overview</h1>
          <p className="font-body-md text-on-surface-variant">Welcome back, Admin. Here is what is happening with Stylish Desi today.</p>
        </div>
        <div className="flex gap-4">
          <button className="px-5 py-3 border border-secondary text-secondary font-label-sm text-[10px] rounded-lg hover:bg-secondary/5 transition-colors uppercase tracking-widest flex items-center gap-2">
            <span className="material-symbols-outlined text-[16px]">download</span> Export Report
          </button>
          <Link href="/admin/inventory" className="px-5 py-3 bg-primary text-on-primary font-label-sm text-[10px] rounded-lg hover:opacity-90 transition-all uppercase tracking-widest flex items-center gap-2">
            <span className="material-symbols-outlined text-[16px]">add</span> New Collection
          </Link>
        </div>
      </header>

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter mb-8">
        {METRICS.map((m) => (
          <div key={m.label} className="bg-surface-container-lowest p-6 rounded-xl border border-stone-200 whisper-shadow-sm flex flex-col justify-between">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="font-label-sm text-[10px] text-stone-500 uppercase mb-1">{m.label}</p>
                <h3 className="font-headline-md text-on-surface text-2xl font-semibold">
                  {m.label === "Total Revenue" ? formatINR(m.value) : m.value.toLocaleString("en-IN")}
                </h3>
              </div>
              <div className={`${m.color} px-2 py-1 rounded-md text-[10px] font-bold flex items-center gap-0.5`}>
                <span className="material-symbols-outlined text-[12px]">{m.positive ? "trending_up" : "trending_down"}</span>
                {m.change}
              </div>
            </div>
            <div className="h-12 w-full flex items-end gap-1">
              {m.bars.map((h, i) => (
                <div
                  key={i}
                  className={`flex-1 rounded-t-sm ${m.positive ? "bg-red-100" : "bg-stone-100"}`}
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Sales Chart + Top Products */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter mb-8">
        {/* Sales Chart */}
        <div className="lg:col-span-2 bg-surface-container-lowest p-8 rounded-xl border border-stone-200 whisper-shadow-sm">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h4 className="font-headline-md text-on-surface text-xl font-semibold">Sales Analytics</h4>
              <p className="text-on-surface-variant font-manrope text-sm">Monthly performance data across all boutiques</p>
            </div>
            <select
              value={chartPeriod}
              onChange={(e) => setChartPeriod(e.target.value)}
              className="bg-transparent border-b border-stone-300 font-label-sm text-[11px] text-primary py-1 px-2 focus:ring-0 focus:border-primary outline-none cursor-pointer"
            >
              <option>Last 6 Months</option>
              <option>Year to Date</option>
              <option>All Time</option>
            </select>
          </div>
          <div className="h-[280px] flex items-end justify-between gap-4 px-4 pt-4 border-l border-b border-stone-100">
            {CHART_DATA.map((d, i) => (
              <div key={d.month} className="flex flex-col items-center gap-2 flex-1 group">
                <div
                  className={`w-full ${i === 3 ? "bg-primary-container" : "bg-stone-100 group-hover:bg-primary/20"} rounded-t-lg ${d.height} transition-colors relative`}
                >
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-on-surface text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {formatINR(d.value)}
                  </div>
                </div>
                <span className={`font-label-sm text-[10px] ${i === 3 ? "text-primary font-bold" : "text-stone-400"}`}>{d.month}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Top Products */}
        <div className="bg-surface-container-lowest p-6 rounded-xl border border-stone-200 whisper-shadow-sm">
          <h4 className="font-headline-md text-on-surface text-lg font-semibold mb-6">Top Performers</h4>
          <div className="space-y-4">
            {TOP_PRODUCTS.map((p, i) => (
              <div key={p.name} className="flex items-center gap-3">
                <span className="text-[11px] font-bold text-stone-400 w-4 flex-shrink-0">{i + 1}</span>
                <div className="flex-1 min-w-0">
                  <p className="font-manrope text-sm font-semibold text-on-surface truncate">{p.name}</p>
                  <p className="text-[10px] text-stone-400 font-manrope">{p.sold} sold · {formatINR(p.revenue)}</p>
                </div>
                <span className={`text-[10px] font-bold ${p.trend >= 0 ? "text-green-600" : "text-red-600"}`}>
                  {p.trend >= 0 ? "↑" : "↓"} {Math.abs(p.trend)}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="bg-surface-container-lowest rounded-xl border border-stone-200 whisper-shadow-sm overflow-hidden">
        <div className="p-6 border-b border-stone-100 flex justify-between items-center">
          <h4 className="font-headline-md text-on-surface text-xl font-semibold">Recent Orders</h4>
          <Link href="/admin/orders" className="font-label-sm text-[10px] text-primary uppercase tracking-widest border-b border-primary pb-0.5 hover:opacity-70 transition-opacity">
            View All
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-stone-100">
                {["Order ID", "Customer", "Product", "Amount", "Status", "Action"].map((h) => (
                  <th key={h} className="text-left px-6 py-3 font-label-sm text-[10px] text-stone-400 uppercase tracking-widest">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-50">
              {RECENT_ORDERS.map((order) => (
                <tr key={order.id} className="hover:bg-stone-50 transition-colors">
                  <td className="px-6 py-4 font-manrope text-sm font-semibold text-primary">{order.id}</td>
                  <td className="px-6 py-4 font-manrope text-sm text-on-surface">{order.customer}</td>
                  <td className="px-6 py-4 font-manrope text-sm text-on-surface-variant truncate max-w-[200px]">{order.product}</td>
                  <td className="px-6 py-4 font-manrope text-sm font-bold text-on-surface">{formatINR(order.amount)}</td>
                  <td className="px-6 py-4">
                    <span className={`${order.statusColor} px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="font-label-sm text-[10px] text-primary uppercase tracking-widest hover:opacity-70 transition-opacity">
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
