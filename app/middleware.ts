import { authMiddleware, redirectToSignIn } from '@clerk/nextjs'
import { NextResponse } from 'next/server'

export default authMiddleware({
    afterAuth(auth, req) {
        if (req.url.includes('/admin')) {
            const { user } = auth
            if (!user) {
                return redirectToSignIn({ returnBackUrl: req.url })
            }
            else if (user.privateMetadata.role !== 'admin') {
                NextResponse.error()
            }
        }
    }
})
