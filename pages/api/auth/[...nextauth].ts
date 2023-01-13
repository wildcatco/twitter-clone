import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: AuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
  callbacks: {
    async session({session, token, user}) {
      const username = session.user?.name?.split(' ').join('').toLocaleLowerCase()
      const uid = token.sub
      return {...session, user: {...session.user, username}, uid}
    }
  }
};

export default NextAuth(authOptions);
