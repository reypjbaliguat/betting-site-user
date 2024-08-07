import { login } from 'core/services/auth';
import jwt, { Secret } from 'jsonwebtoken';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: {
                    label: 'Email',
                    type: 'text'
                },
                password: {
                    label: 'Password',
                    type: 'password'
                }
            },
            authorize: async function (credentials: Record<'email' | 'password', string> | undefined): Promise<any> {
                if (!credentials) return null;

                const res = await login(credentials);
                const user = await res.json();

                if (user.status === 200) {
                    return {
                        token: user.token,
                        id: user.id,
                        email: user.email,
                        role: user.role
                    };
                }

                if (user.status === 401) throw new Error('Invalid email or password!');

                return null;
            }
        })
    ],
    callbacks: {
        async jwt({ token, user, account }: { token: any; user: any; account: any }) {
            if (account && user) {
                const check = (await jwt.verify(user.token, process.env.JWT_SECRET as Secret)) as { email: string; role: string };
                return {
                    token: user.token,
                    email: check.email,
                    role: check.role,
                    id: user.id
                };
            }
            return token;
        },
        async session({ session, token }: { session: any; token: any }) {
            session.user.token = token.token;
            session.user.role = token.role;
            session.user.email = token.email;
            session.user.id = token.id;
            return session;
        }
    },
    session: {
        strategy: 'jwt',
        maxAge: 2 * 24 * 60 * 60 // 2 days
    },
    pages: {
        signIn: '/sign-in'
    }
});

export { handler as GET, handler as POST };
