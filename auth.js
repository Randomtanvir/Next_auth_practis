import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import mongoClientPromise from "@/lib/mongoClientPromise";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import { userModel } from "./models/user-model";
import { dbConnect } from "./lib/db";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  adapter: MongoDBAdapter(mongoClientPromise, {
    databaseName: process.env.MONGODB_URI,
  }),
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        if (credentials === null) return null;
        await dbConnect();
        try {
          const user = await userModel.findOne({ email: credentials?.email });
          if (user) {
            const isMatch = user?.password === credentials.password;

            if (isMatch) {
              return user;
            } else {
              throw new Error("Email or Password is not correct");
            }
          } else {
            throw new Error("User not found");
          }
        } catch (error) {
          throw new Error(error);
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
});
