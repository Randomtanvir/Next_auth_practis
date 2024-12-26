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
        console.log(credentials);
        if (credentials === null) return null;
        console.log(credentials.email);
        await dbConnect();
        try {
          const user = await userModel.findOne({ email: credentials.email });
          if (user) {
            console.log(user);
            const isMatch = user.password === credentials.password;
            if (isMatch) {
              return user;
            } else {
              return { error: true, message: "Email or pass not valid" };
            }
          } else {
            return { error: true, message: "user not found" };
          }
        } catch (error) {
          return { error: true, message: "error" };
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
});
