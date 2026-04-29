"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuthStore } from "@/store/authStore";

const NAV_ITEMS = [
  { href: "/admin", label: "Dashboard", icon: "dashboard" },
  { href: "/admin/inventory", label: "Inventory", icon: "inventory_2" },
  { href: "/admin/orders", label: "Orders", icon: "shopping_cart" },
  { href: "/admin/customers", label: "Customers", icon: "group" },
  { href: "/admin/analytics", label: "Analytics", icon: "monitoring" },
  { href: "/admin/discounts", label: "Discounts", icon: "sell" },
  { href: "/admin/delivery", label: "Delivery", icon: "local_shipping" },
  { href: "/admin/settings", label: "Settings", icon: "settings" },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const { user, logout } = useAuthStore();

  return (
    <aside className="flex flex-col fixed left-0 top-0 h-full py-6 bg-stone-50 dark:bg-stone-900 w-64 border-r border-stone-200 dark:border-stone-800 font-epilogue text-sm z-50">
      {/* Brand */}
      <div className="px-6 mb-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-primary-container flex items-center justify-center">
            <span className="material-symbols-outlined text-white text-[18px]">
              auto_awesome
            </span>
          </div>
          <div>
            <h2 className="text-base font-bold text-primary">Admin Portal</h2>
            <p className="text-xs text-stone-500">Management Suite</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
        {NAV_ITEMS.map((item) => {
          const isActive =
            item.href === "/admin"
              ? pathname === "/admin"
              : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 transition-all duration-200 ${
                isActive
                  ? "bg-red-50 text-primary border-r-4 border-primary font-semibold"
                  : "text-stone-500 hover:bg-stone-100 hover:translate-x-1"
              }`}
            >
              <span className="material-symbols-outlined text-[20px]">
                {item.icon}
              </span>
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* User Profile */}
      <div className="px-6 pt-6 border-t border-stone-200 mt-auto">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-primary-container flex items-center justify-center text-white font-bold text-sm">
            {user?.name?.charAt(0) ?? "A"}
          </div>
          <div className="overflow-hidden flex-1">
            <p className="text-xs font-bold text-on-surface truncate">
              {user?.name ?? "Admin User"}
            </p>
            <p className="text-[10px] text-stone-500 uppercase tracking-wider">
              {user?.role?.replace("_", " ") ?? "Super Admin"}
            </p>
          </div>
          <button
            onClick={logout}
            className="text-stone-400 hover:text-primary transition-colors"
            title="Logout"
          >
            <span className="material-symbols-outlined text-[18px]">logout</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
