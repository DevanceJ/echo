import { MultiSidebarProvider } from "@/components/ui/multisidebar";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { PlayerWrapper } from "@/components/player/player-wrapper";
import { QueueSidebar } from "@/components/sidebar/queue-sidebar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="relative flex h-screen">
      <MultiSidebarProvider>
        <AppSidebar />
        <div className="flex-1 overflow-auto no-scrollbar">
          {children}
          <PlayerWrapper />
        </div>
        <QueueSidebar />
      </MultiSidebarProvider>
    </main>
  );
}
