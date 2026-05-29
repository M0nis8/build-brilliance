import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Admin Login',
      credentials: {
        username: { label: "Username", type: "text", placeholder: "admin" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (
          credentials.username === process.env.ADMIN_USERNAME &&
          credentials.password === process.env.ADMIN_PASSWORD
        ) {
          return { id: '1', name: 'Admin', email: 'admin@buildbrilliance.com' };
        }
        return null;
      }
    })
  ],
  pages: {
    signIn: '/admin',
  },
  session: { strategy: 'jwt' },
  secret: process.env.NEXTAUTH_SECRET || 'fallback-secret-for-development'
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
