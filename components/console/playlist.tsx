"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Play } from "lucide-react";
import Image from "next/image";

type Playlist = {
  name: string;
  cover: string;
  artists: string;
  url: string;
};

type PlaylistGridProps = {
  title: string;
  playlists: Playlist[];
};

export function PlaylistGrid({ title, playlists }: PlaylistGridProps) {
  const [showAll, setShowAll] = useState(false);

  const visiblePlaylists = showAll ? playlists : playlists.slice(0, 5);

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">{title}</h2>
        {playlists.length > 5 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-sm font-medium text-primary hover:underline">
            {showAll ? "Show Less" : "See All"}
          </button>
        )}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {visiblePlaylists.map((playlist, index) => (
          <Card key={index} className="group relative overflow-hidden">
            <CardContent className="p-0">
              <Image
                src={playlist.cover}
                alt={playlist.name}
                width={300}
                height={300}
                className="w-full aspect-square object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Play className="text-white h-12 w-12" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold truncate">{playlist.name}</h3>
                <p className="text-sm text-muted-foreground truncate">
                  {playlist.artists}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
