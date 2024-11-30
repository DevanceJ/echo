/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.scdn.co',
                port: '',
                search: '',
            },
            {
                protocol: 'https',
                hostname: '**.spotifycdn.com',
                port: '',
                search: '',
            },
        ],
    },
};

export default nextConfig;
