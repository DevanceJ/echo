"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Search,
  ChevronLeft,
  ChevronRight,
  PanelLeft,
  PanelRight,
} from "lucide-react";
import { useMultiSidebar } from "@/components/ui/multisidebar";

export function Header() {
  const { leftSidebar } = useMultiSidebar();
  const { toggleSidebar: toggleLeft } = leftSidebar;
  const { rightSidebar } = useMultiSidebar();
  const { toggleSidebar: toggleRight } = rightSidebar;

  return (
    <div className="flex items-center px-2 mt-6">
      <Button
        variant="ghost"
        size="icon"
        className={"h-10 w-10"}
        onClick={() => {
          toggleLeft();
        }}>
        <PanelLeft />
        <span className="sr-only">Toggle Sidebar</span>
      </Button>
      <div className="hidden md:flex">
        <ChevronLeft
          size={24}
          className="text-muted-foreground hover:text-primary cursor-pointer"
        />
        <ChevronRight
          size={24}
          className="text-muted-foreground hover:text-primary cursor-pointer"
        />
      </div>
      <div className="relative w-full focus:ring-0 focus:ring-offset-0 mx-2">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search for artists, songs, or albums"
          className="pl-8 h-10 rounded-3xl bg-white text-black"
        />
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="text-xl"
        onClick={() => {
          toggleRight();
        }}>
        <PanelRight />
        <span className="sr-only">Toggle Sidebar</span>
      </Button>
    </div>
  );
}
