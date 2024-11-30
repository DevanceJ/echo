import { create } from "zustand";

interface Song {
  name: string;
  artist: [];
  album: {
    name: string;
    images: [{ url: string }];
  };
  external_urls: { spotify: string };
}

interface EchoState {
  latestSongs: Song[];
  setLatestSongs: (latestSongs: Song[]) => void;
}

export const useEcho = create<EchoState>()((set) => ({
  latestSongs: [],
  setLatestSongs: (latestSongs) => set({ latestSongs }),
}));
