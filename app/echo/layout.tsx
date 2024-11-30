import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { QueueSidebar } from "@/components/sidebar/queue-sidebar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex h-screen">
      <SidebarProvider>
        <AppSidebar />
        <div className="flex-1 overflow-auto">{children}</div>
      </SidebarProvider>
      <QueueSidebar />
    </main>
  );
}
