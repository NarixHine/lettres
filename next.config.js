/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'static.narix.link',
                port: '',
                pathname: '/**',
            },
        ],
    },
    experimental: {
        serverActions: true
    }
}

const withPWA = require('@imbios/next-pwa')({
    dest: 'public'
})

module.exports = withPWA(nextConfig)
