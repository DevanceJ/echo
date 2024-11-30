/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import {
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/multisidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

export function NavSong({ recentlyPlayed }: any) {
  const [showAll, setShowAll] = useState(false);
  const displayedSongs = showAll ? recentlyPlayed : recentlyPlayed.slice(0, 8);
  return (
    <SidebarGroup>
      <SidebarGroupLabel className="text-white font-bold text-sm">
        Recently Played
      </SidebarGroupLabel>
      {recentlyPlayed.length > 8 && (
        <SidebarGroupAction className="">
          {showAll ? (
            <Minus onClick={() => setShowAll(false)} />
          ) : (
            <Plus onClick={() => setShowAll(true)} />
          )}
        </SidebarGroupAction>
      )}
      <SidebarGroupContent>
        <SidebarMenu>
          {displayedSongs.map((song: any) => (
            <SidebarMenuItem
              key={song.name}
              onClick={() => window.open(song.external_urls.spotify, "_blank")}>
              <SidebarMenuButton side="right" size="lg">
                <Avatar className="h-10 w-10 rounded-sm">
                  <AvatarImage src={song.album.images[0].url} alt={song.name} />
                  <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">{song.name}</span>
                  <span className="truncate text-xs">
                    {song.artists[0].name}
                  </span>
                </div>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
