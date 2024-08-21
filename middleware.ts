import { withAuth } from 'next-auth/middleware';

// ✅ Import the static config - does not use `next-auth`.
import { pages } from './config/pages';

export default withAuth({
    pages
});
export const config = {
    matcher: ['/dashboard/:path*']
};
