"use client";
import { Header } from "@/components/console/header";
import { Album as AlbumComponent } from "@/components/console/album";
import { PlaylistGrid } from "@/components/console/playlist";
import { useQuery } from "@tanstack/react-query";
import { Album, UserPlaylists } from "@/types";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { NowPlaying } from "@/components/player/now-playing";
export default function Home() {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/");
    },
  });
  console.log("from frontend", session);
  const {
    data: userPlaylist,
    isLoading: playlistLoading,
    error: playlistError,
  } = useQuery({
    queryKey: ["my-playlists"],
    queryFn: async () => {
      if (!session?.access_token) {
        throw new Error("No access token available");
      }
      const res = await fetch("https://api.spotify.com/v1/me/playlists", {
        headers: {
          Authorization: `Bearer ${session.access_token}`,
        },
      });
      if (!res.ok) {
        throw new Error("Failed to fetch playlists");
      }
      return res.json();
    },
    enabled: !!session?.access_token,
  });
  const {
    data: newReleases,
    isLoading: newReleasesLoading,
    error: newReleasesError,
  } = useQuery({
    queryKey: ["new-releases"],
    queryFn: async () => {
      if (!session?.access_token) {
        throw new Error("No access token available");
      }
      const res = await fetch(
        "https://api.spotify.com/v1/browse/new-releases",
        {
          headers: {
            Authorization: `Bearer ${session.access_token}`,
          },
        }
      );
      if (!res.ok) {
        throw new Error("Failed to fetch new releases");
      }
      return res.json();
    },
    enabled: !!session?.access_token,
  });

  if (status === "loading" || playlistLoading || newReleasesLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  // Error handling
  if (playlistError || newReleasesError) {
    redirect("/");
  }
  const newReleasesPlaylists = newReleases.albums.items.map((album: Album) => ({
    name: album.name,
    cover: album.images[0]?.url,
    artists: album.artists.map((artist: any) => artist.name).join(", "),
    url: album.external_urls.spotify,
  }));

  const userPlaylists = userPlaylist.items.map((playlist: UserPlaylists) => ({
    name: playlist.name,
    cover: playlist.images[0]?.url,
    artists: playlist.public
      ? `By ${playlist.owner.display_name}`
      : "Your Playlist",
    url: playlist.external_urls.spotify,
  }));

  return (
    <div className="container mx-auto pb-24">
      <Header />
      <div className="flex flex-col items-center justify-center px-4 space-y-6">
        <AlbumComponent />
        <PlaylistGrid title="New Releases" playlists={newReleasesPlaylists} />
        <PlaylistGrid title="Your Playlists" playlists={userPlaylists} />
      </div>
    </div>
  );
}
