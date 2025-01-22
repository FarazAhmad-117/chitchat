/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["ik.imagekit.io"],
  },
  experimental: {
    swcPlugins: [["next-superjson-plugin", {}]],
  },
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "ik.imagekit.com",
      "res.cloudinary.com",
      "avatars.githubusercontent.com",
    ],
  },
};

export default nextConfig;
