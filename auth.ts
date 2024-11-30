import Spotify from "next-auth/providers/spotify";
import NextAuth from "next-auth";

import type { NextAuthConfig } from "next-auth";

export const config = {
  providers: [
    Spotify({
      authorization:
        "https://accounts.spotify.com/authorize?scope=user-read-email%20playlist-read-private%20playlist-read-collaborative%20user-follow-read%20user-library-read%20user-top-read",
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    session({ session, token }) {
      //   console.log(`Auth Sess = ${JSON.stringify(session)}`);
      //   console.log(`Auth Tok = ${JSON.stringify(token)}`);
      if (token.access_token) {
        session.access_token = token.access_token as string; // Put the provider's access token in the session so that we can access it client-side and server-side with `auth()`
      }
      return session;
    },
    jwt({ token, account }) {
      //   console.log(`Auth JWT Tok = ${JSON.stringify(token)}`);
      // console.log(`Router Auth JWT account = ${JSON.stringify(account)}`);

      if (account) {
        token.access_token = account.access_token; // Store the provider's access token in the token so that we can put it in the session in the session callback above
      }

      return token;
    },
  },
} satisfies NextAuthConfig;

declare module "next-auth" {
  interface Session {
    access_token: string;
  }
}

export const { handlers, auth, signIn, signOut } = NextAuth(config);
