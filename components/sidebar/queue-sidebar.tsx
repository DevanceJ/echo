import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Bell, ChevronDown } from "lucide-react";
import Image from "next/image";
import drake from "@/public/images/drake.jpg";
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

export function QueueSidebar() {
  return (
    <div className="hidden lg:flex flex-col h-full w-72 bg-sidebar">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center space-x-3">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-sm font-semibold">Timothy Luca</h2>
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
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold">Recently Played</h3>
            <button className="text-xs text-muted-foreground">See all</button>
          </div>
          <div className="mt-3 space-y-3">
            {["Savage", "can't look back", "Love Again"].map((song, i) => (
              <div key={i} className="flex items-center space-x-3">
                <Image
                  src={drake} // Replace with album cover source
                  alt={song}
                  height={40}
                  width={40}
                  className="rounded-md object-cover"
                />
                <div className="flex-1">
                  <p className="text-sm truncate">{song}</p>
                  <p className="text-xs text-muted-foreground">4 min ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold">My Playlist</h3>
            <button className="text-xs text-muted-foreground">See all</button>
          </div>
          <div className="mt-3 space-y-3">
            {[
              { name: "land of rising sun", duration: "2 hr 43 min" },
              { name: "burning memories", duration: "1 hr 4 min" },
              { name: "dream 127 U", duration: "1 hr 56 min" },
            ].map((playlist, i) => (
              <div key={i} className="flex items-center space-x-3">
                <Image
                  src={drake} // Replace with playlist cover source
                  alt={playlist.name}
                  height={40}
                  width={40}
                  className="rounded-md object-cover"
                />
                <div className="flex-1">
                  <p className="text-sm truncate">{playlist.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {playlist.duration}
                  </p>
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
