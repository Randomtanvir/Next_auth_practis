import NextAuth from "next-auth";
// import GitHub from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";

export const {
  auth,
  handlers: { GET, POST },
  signIn,
  signOut,
} = NextAuth({
  providers: GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  }),
});
