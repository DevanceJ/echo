"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarRail,
} from "@/components/ui/multisidebar";
import { useQuery } from "@tanstack/react-query";
import { NavUser } from "./internal/nav-user";
import { useSession } from "next-auth/react";
import { NavSong } from "./internal/nav-song";
import React from "react";
import { redirect } from "next/navigation";

export function QueueSidebar() {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/");
    },
  });
  const {
    data: recentlyPlayed,
    error: recentlyPlayedError,
    isLoading: recentlyPlayedLoading,
  } = useQuery({
    queryKey: ["recently-played"],
    queryFn: async () => {
      if (!session?.access_token) {
        throw new Error("No access token available");
      }
      const res = await fetch("https://api.spotify.com/v1/me/top/tracks", {
        headers: {
          Authorization: `Bearer ${session.access_token}`,
        },
      });
      if (!res.ok) {
        throw new Error("Failed to fetch recently played");
      }
      return res.json();
    },
    enabled: !!session?.access_token,
  });
  if (status === "loading" || recentlyPlayedLoading || recentlyPlayedError) {
    return (
      <Sidebar side="right">
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuSkeleton showIcon />
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Projects</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {Array.from({ length: 5 }).map((_, index) => (
                  <SidebarMenuItem key={index}>
                    <SidebarMenuSkeleton />
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    );
  }
  return (
    <Sidebar side="right">
      <SidebarHeader>
        <NavUser user={session?.user} />
      </SidebarHeader>
      <SidebarContent className="mt-4 pb-24">
        <NavSong recentlyPlayed={recentlyPlayed.items} />
      </SidebarContent>
      <SidebarRail side="right" />
    </Sidebar>
  );
}
