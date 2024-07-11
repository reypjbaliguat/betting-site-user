import Credentials from 'next-auth/providers/credentials';
import SignInPayload from 'app/(auth)/sign-in/schema';
import { getUserByEmail } from 'core/helpers/auth';
import bcrypt from 'bcryptjs';
import type { NextAuthConfig } from 'next-auth';

export default {
    providers: [
        Credentials({
            async authorize(credentials) {
                const validatedFields = SignInPayload.safeParse(credentials);
                if (validatedFields.success) {
                    const { email, password } = validatedFields.data;
                    const user = await getUserByEmail(email);
                    if (!user || !user.password) return null;
                    const passwordsMatch = await bcrypt.compare(password, user.password);
                    if (passwordsMatch) return user;
                }
                return null;
            }
        })
    ],
    secret: '536c2c1f562f2d32124a4ec4a6d2ca98065342f1f35943bee33f5c28d0f80e88'
} satisfies NextAuthConfig;
