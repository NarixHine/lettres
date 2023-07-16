/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true
    }
}

const withPWA = require('@imbios/next-pwa')({
    dest: 'public'
})

module.exports = withPWA(nextConfig)
