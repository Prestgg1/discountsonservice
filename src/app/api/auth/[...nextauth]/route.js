import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { PrismaClient } from "@prisma/client";
import { compare, hash } from "bcryptjs";

const prisma = new PrismaClient();

const authHandler = NextAuth({
  providers: [

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      async profile(profile) {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
        };
      },
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const user = await prisma.user.findUnique({
          where: { email: credentials?.email }
        });
        if(!credentials.captchaToken){
          throw new Error("Captcha Doğrulanmadı");
        }
        if (!user || !(await compare(credentials.password, user.password))) {
          throw new Error("Invalid credentials");
        }

        return { id: user.id, name: user.name, email: user.email };
      }
    }),
  ],
  session: {
       
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.id = token.id;
      }
      return session;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl; 
    },
    async signIn({ user, profile }) {
      if (profile) {
        const existingUser = await prisma.user.findUnique({
          where: { email: profile.email },
        });

        // Yoxdusa Hesap Yarat
        if (!existingUser) {
          const hashedPassword = await hash('random-string', 10); 
          await prisma.user.create({
            data: {
              email: profile.email,
              name: profile.name,
              password: hashedPassword,
            },
          });
        }
      }
      return true; 
    },
  },
  pages: {
    signIn: null, 
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { authHandler as GET, authHandler as POST };
