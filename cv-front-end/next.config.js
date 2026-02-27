/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    images: {
        domains: ['nbesoro.s3.amazonaws.com'],
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'nbesoro.s3.amazonaws.com',
          },
        ],
    },
}

module.exports = nextConfig
