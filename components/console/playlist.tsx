"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Play } from "lucide-react";
import Image from "next/image";
import clsx from "clsx";

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
    <div className="w-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-bold">{title}</h2>
        {playlists.length > 5 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-sm font-medium text-primary hover:underline transition-colors duration-300">
            {showAll ? "Show Less" : "See All"}
          </button>
        )}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {visiblePlaylists.map((playlist, index) => (
          <Card
            onClick={() => window.open(playlist.url, "_blank")}
            key={index}
            className={clsx(
              "group relative overflow-hidden transform transition-transform hover:scale-105 cursor-pointer",
              "animate-fade-in-fast",
              `animation-delay-${index * 100}`
            )}>
            <CardContent className="p-0">
              <Image
                src={playlist.cover}
                alt={playlist.name}
                width={300}
                height={300}
                className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Play className="text-blue-500 h-12 w-12 animate-bounce-slow" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold truncate">{playlist.name}</h3>
                <p className="text-sm text-gray-400 truncate">
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
