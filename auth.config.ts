import Spotify from "next-auth/providers/spotify";
import type { NextAuthConfig } from "next-auth";

export default {
  providers: [
    Spotify({
      authorization:
        "https://accounts.spotify.com/authorize?scope=user-read-email%20playlist-read-private%20playlist-read-collaborative%20user-follow-read%20user-library-read%20user-top-read",
    }),
  ],
  session: { strategy: "jwt" },
} satisfies NextAuthConfig;
