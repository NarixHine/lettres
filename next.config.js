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

const { withAxiom } = require('next-axiom')

const withPWA = require('@imbios/next-pwa')({
    dest: 'public'
})

module.exports = withAxiom(withPWA(nextConfig))
