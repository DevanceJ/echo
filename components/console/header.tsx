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
    <div className="flex items-center px-6 py-3">
      <Button
        variant="ghost"
        size="icon"
        className={"h-7 w-7"}
        onClick={() => {
          toggleLeft();
        }}>
        <PanelLeft />
        <span className="sr-only">Toggle Sidebar</span>
      </Button>
      <div className="hidden md:flex space-x-2">
        <ChevronLeft
          size={32}
          className="text-muted-foreground hover:text-primary cursor-pointer"
        />
        <ChevronRight
          size={32}
          className="text-muted-foreground hover:text-primary cursor-pointer"
        />
      </div>
      <div className="relative w-full focus:ring-0 focus:ring-offset-0">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search for artists, songs, or albums"
          className="pl-8 h-10 rounded-3xl bg-white text-black"
        />
      </div>
      <Button
        variant="ghost"
        size="icon"
        className={"h-7 w-7"}
        onClick={() => {
          toggleRight();
        }}>
        <PanelRight />
        <span className="sr-only">Toggle Sidebar</span>
      </Button>
    </div>
  );
}
