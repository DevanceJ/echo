"use client";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Bell, ChevronDown } from "lucide-react";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEcho } from "@/hooks/useStore";
import { useSession } from "next-auth/react";
import { useState } from "react";

export function QueueSidebar() {
  const { latestSongs } = useEcho();
  const { data: session } = useSession();
  const [showAll, setShowAll] = useState(false);
  const displayedSongs = showAll ? latestSongs : latestSongs.slice(0, 8);
  return (
    <div className="hidden lg:flex flex-col h-full w-72 bg-sidebar">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center space-x-3">
          <Avatar>
            <AvatarImage
              src={session?.user?.image ?? "github.com/shadcn.png"}
              alt="@shadcn"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-sm font-semibold">
              {session?.user?.name ?? "Shad"}
            </h2>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Bell className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <ChevronDown className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Echo Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                Log out
                <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <ScrollArea className="flex-1">
        <div className="px-4 py-3">
          <div className="flex items-center gap-8">
            <h3 className="text-sm font-semibold">Recently Played</h3>
            {latestSongs.length > 8 && (
              <button
                onClick={() => setShowAll((prev) => !prev)}
                className="text-xs">
                {showAll ? "Show less" : "See all"}
              </button>
            )}
          </div>
          <div className="mt-3 space-y-3">
            {displayedSongs.map((song, i) => (
              <div
                onClick={() => {
                  window.open(song.external_urls.spotify, "_blank");
                }}
                key={i}
                className="flex items-center space-x-3 cursor-pointer">
                <Image
                  src={song.album.images[0].url} // Replace with album cover source
                  alt={song.name}
                  height={40}
                  width={40}
                  className="rounded-md object-cover"
                />
                <div className="flex-1">
                  <p className="text-sm truncate">{song.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollArea>

      <div className="px-4 py-3">
        <Button variant="secondary" className="w-full">
          Create New Playlist
        </Button>
      </div>
    </div>
  );
}
