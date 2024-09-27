import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import Github from "next-auth/providers/github";

const handler = NextAuth({
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "email", placeholder: "Email", type: "text" },
        password: {
          label: "password",
          placeholder: "password",
          type: "password",
        },
      },
      async authorize(credentials, req) {
        return {
          id: String(Math.floor(Math.random() * 1000)),
          email: credentials?.email,
          password: credentials?.password,
        };
      },
    }),
    // Google({
    //   clientId: process.env.GOOGLE_CLIENT_ID || "",
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    // }),
    // Github({
    //   clientId: "",
    //   clientSecret: "",
    // }),
  ],
  secret: process.env.NEXTAUTH_SECRET || "mysecpassword",
  callbacks: {
    async redirect({ url, baseUrl }: { url: string; baseUrl: string }) {
      return baseUrl;
    },
    async session({ session, user, token }) {
      return session;
    },
  },
  pages: {
    signIn: "/pages/signin",
  },
});

export const GET = handler;
export const POST = handler;
