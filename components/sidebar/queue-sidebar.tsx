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
import { NavUser } from "./internal/nav-user";
import { useSession } from "next-auth/react";
import { NavSong } from "./internal/nav-song";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { useSongsStore } from "@/hooks/useStore";

export function QueueSidebar() {
  const { setSongs } = useSongsStore();
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/");
    },
  });

  const supabase = createClient();
  const [songsLoading, setSongsLoading] = useState(true);
  useEffect(() => {
    const fetchRecentlyPlayed = async () => {
      const { data, error } = await supabase.from("Song").select("*");
      if (error) {
        console.error("error", error);
      }
      console.log(data);
      if (data) {
        setSongs(data);
      }
      setSongsLoading(false);
    };
    fetchRecentlyPlayed();
  }, [supabase]);

  if (status === "loading" || songsLoading) {
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
            <SidebarGroupLabel>Jukebox</SidebarGroupLabel>
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
        <NavSong />
      </SidebarContent>
      <SidebarRail side="right" />
    </Sidebar>
  );
}
