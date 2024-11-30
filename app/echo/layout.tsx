import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { QueueSidebar } from "@/components/sidebar/queue-sidebar";
import { PlayerWrapper } from "@/components/player/player-wrapper";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="relative flex h-screen">
      <SidebarProvider>
        <AppSidebar />
        <div className="flex-1 overflow-auto">
          {children}
          <PlayerWrapper />
        </div>
      </SidebarProvider>
      <QueueSidebar />
    </main>
  );
}
