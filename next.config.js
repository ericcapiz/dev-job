/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "ihoqibmavwtaowp3.public.blob.vercel-storage.com",
      },
    ],
  },
};

module.exports = nextConfig;
