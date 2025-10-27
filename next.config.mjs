/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'your-supabase-url.supabase.co'], // opsional kalau kamu pakai Supabase
  },
};

export default nextConfig;

