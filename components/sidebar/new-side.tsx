import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";

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
} from "@/components/ui/sidebar";
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
    icon: Inbox,
  },
  {
    title: "Collections",
    url: "#",
    icon: Calendar,
  },
];

const library = [
  {
    title: "Downloads",
    url: "#",
    icon: Search,
  },
  {
    title: "Favorites",
    url: "#",
    icon: Settings,
  },
  {
    title: "Local Files",
    url: "#",
    icon: Settings,
  },
];
export function Check() {
  return (
    <Sidebar side="right">
      <SidebarHeader>Echo</SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>FEATURES</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {features.map((feature) => (
                <SidebarMenuItem key={feature.title}>
                  <SidebarMenuButton asChild>
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
      <SidebarRail />
    </Sidebar>
  );
}
