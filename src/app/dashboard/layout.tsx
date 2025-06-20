import DashboardWrapper from "@/components/wrappers/DashboardWrapper";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <DashboardWrapper>
        <div className="">
          <header className=" w-full min-h-10 border-b border-white "></header>
          <div className="flex gap-2 min-h-screen ">
            <aside className="w-2/12 h-full overflow-y-scroll scroll-hide  text-white">Sidebar content</aside>
            <main className="flex-1 flex flex-col justify-between  ">
              <div className="flex-1 overflow-y-scroll bg-blackMid ">
                {children}
              </div>
            <div className="text-center text-xs py-1 text-gray-500 border-t border-white">
              © {new Date().getFullYear()} Shah Alom. All rights reserved.
            </div>
            </main>
          </div>
        </div>
      </DashboardWrapper>
    </>
  );
}
