/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            'hmbvniosirxtuiewcspp.supabase.co', '**.supabase.co',
        ],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**.scdn.co',
                port: '',
                search: '',
            },
            {
                protocol: 'https',
                hostname: '**.spotifycdn.com',
                port: '',
                search: '',
            },
            {
                protocol: 'https',
                hostname: '**.supabase.co',
                port: '',
                search: '',
            },
            {
                protocol: 'https',
                hostname: 'hmbvniosirxtuiewcspp.supabase.co',
                port: '',
                search: '',
            }
        ],
    },
};

export default nextConfig;
