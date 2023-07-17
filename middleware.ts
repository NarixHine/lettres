import { authMiddleware, redirectToSignIn } from '@clerk/nextjs'

export default authMiddleware({
    afterAuth(auth, req) {
        console.log(JSON.stringify(auth))
        if (!auth.isPublicRoute && !auth.userId) {
            console.log('not logged in')
            return redirectToSignIn({ returnBackUrl: req.url })
        }
    },
    publicRoutes: ['/', '/tag/:tag', '/profile', '/lettres/:id', '/archive/:page']
})

export const config = {
    matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
}
