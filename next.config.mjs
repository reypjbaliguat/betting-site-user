/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/dashboard/games',
                permanent: true
            }
        ];
    }
};

export default nextConfig;
