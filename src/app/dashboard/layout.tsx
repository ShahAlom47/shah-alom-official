import DashboardWrapper from "@/ProtectedRoute/DashboardWrapper";


export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-800 text-white">Sidebar content</aside>
      <main className="flex-1 p-4">
        <DashboardWrapper>{children}</DashboardWrapper>
      </main>
    </div>
  );
}
