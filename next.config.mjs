/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'app.netlify.com',
                protocol: 'https',
                pathname: '/.netlify/**'
            }
        ]
    }
};

export default nextConfig;
