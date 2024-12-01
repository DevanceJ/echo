import {
  Download,
  Home,
  FileMusic,
  Compass,
  Heart,
  FolderOpen,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/multisidebar";
import Link from "next/link";
import Image from "next/image";
import echoLogo from "@/public/images/logo.png";

// Features.
const features = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Discover",
    url: "#",
    icon: Compass,
  },
  {
    title: "Collections",
    url: "#",
    icon: FileMusic,
  },
];

const library = [
  {
    title: "Downloads",
    url: "#",
    icon: Download,
  },
  {
    title: "Favorites",
    url: "#",
    icon: Heart,
  },
  {
    title: "Local Files",
    url: "#",
    icon: FolderOpen,
  },
];
export function AppSidebar() {
  return (
    <Sidebar side="left">
      <Link href="/echo">
        <SidebarHeader className="p-4 flex-row gap-4 items-center cursor-pointer">
          <Image src={echoLogo} alt="Echo" width={32} height={32} />
          <h1 className="font-bold text-2xl">Echo</h1>
        </SidebarHeader>
      </Link>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Features</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {features.map((feature) => (
                <SidebarMenuItem key={feature.title}>
                  <SidebarMenuButton
                    asChild
                    side="left"
                    className="data-[active=true]:bg-transparent data-[active=true]:text-blue-600 text-gray-400"
                    isActive={feature.title === "Home"}>
                    <Link href={feature.url}>
                      <feature.icon />
                      <span>{feature.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Library</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {library.map((lib) => (
                <SidebarMenuItem key={lib.title}>
                  <SidebarMenuButton
                    asChild
                    side="left"
                    className="text-gray-400">
                    <Link href={lib.url}>
                      <lib.icon />
                      <span>{lib.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail side="left" />
    </Sidebar>
  );
}
