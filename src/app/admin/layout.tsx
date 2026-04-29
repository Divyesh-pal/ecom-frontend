import AdminSidebar from "@/components/admin/AdminSidebar";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-surface">
      <AdminSidebar />
      <div className="ml-64 flex-1 flex flex-col">
        {children}
      </div>
    </div>
  );
}
