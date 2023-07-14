import { getXataClient } from '@/lib/xata'
import { AskResult } from '@xata.io/client'
import { NextResponse } from 'next/server'
import { z } from 'zod'

export const config = {
    runtime: 'edge',
}

const bodySchema = z.object({
    database: z.string(),
    question: z.string(),
})

export async function POST(req: Request): Promise<Response> {
    const body = await req.json()

    const encoder = new TextEncoder()

    const xata = getXataClient()
    const stream = new ReadableStream({
        async start(controller) {
            xata.db.lettres.ask(body.question, {
                searchType: 'keyword',
                onMessage: (message: AskResult) => {
                    controller.enqueue(encoder.encode(`event: message\n`))
                    controller.enqueue(
                        encoder.encode(`data: ${JSON.stringify(message)}\n\n`)
                    )
                },
            })
        },
    })

    return new NextResponse(stream, {
        headers: {
            Connection: 'keep-alive',
            'Cache-Control': 'no-cache, no-transform',
            'Content-Type': 'text/event-stream;charset=utf-8',
        },
    })
}
