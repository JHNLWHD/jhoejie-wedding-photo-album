import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [{ hostname: "jhoejie-wedding-photo-album.vercel.app" }],
    },
};

export default nextConfig;
