import NextAuth from "next-auth";
import authConfig from "./auth.config";

declare module "next-auth" {
  interface Session {
    access_token: string;
  }
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  callbacks: {
    async session({ session, token }) {
      if (token.access_token) {
        session.access_token = token.access_token as string; // Put the provider's access token in the session so that we can access it client-side and server-side with `auth()`
      }

      return session;
    },
    async jwt({ token, account }) {
      if (account) {
        token.access_token = account.access_token; // Store the provider's access token in the token so that we can put it in the session in the session callback above
      }

      return token;
    },
  },
  ...authConfig,
});
