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
      <SidebarHeader className="my-6 pl-4 text-2xl font-medium">
        Echo
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>FEATURES</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {features.map((feature) => (
                <SidebarMenuItem key={feature.title}>
                  <SidebarMenuButton asChild side="left">
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
          <SidebarGroupLabel>LIBRARY</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {library.map((lib) => (
                <SidebarMenuItem key={lib.title}>
                  <SidebarMenuButton asChild>
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
