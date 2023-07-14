import { authMiddleware, redirectToSignIn } from '@clerk/nextjs'
import { NextResponse } from 'next/server'

export default authMiddleware({
    afterAuth(auth, req) {
        if (!auth.isPublicRoute) {
            const { user, userId } = auth
            if (!userId) {
                return redirectToSignIn({ returnBackUrl: req.url })
            }
            else if (user?.privateMetadata.role !== 'admin') {
                if (req.url.includes('/admin'))
                    NextResponse.error()
            }
        }
    },
    publicRoutes: ['/', '/tag/:tag', '/profile', '/lettres/:id', '/archive/:page']
})

export const config = {
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
}
