/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  //리다이렉트 : 경로 변경 source : 현재주소, destination: 변경 주소
  redirects: async function redirects() {
    return [
      {
        source: '/products/:id',
        destination: '/items/:id',
        permanent: false,
      },
    ]
  },
};

export default nextConfig;
