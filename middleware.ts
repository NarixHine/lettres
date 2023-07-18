import { authMiddleware, redirectToSignIn } from '@clerk/nextjs'

export default authMiddleware({
    afterAuth(auth, req) {
        if (!auth.isPublicRoute && !auth.userId) {
            return redirectToSignIn({ returnBackUrl: req.url })
        }
    },
    publicRoutes: ['/', '/tag/:tag', '/profile', '/lettres/:id', '/archive/:page']
})

export const config = {
    matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
}
