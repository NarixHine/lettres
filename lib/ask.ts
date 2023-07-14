import { fetchEventSource } from '@microsoft/fetch-event-source'
import { useState, useCallback } from 'react'

export default function useAskXata() {
    const [answer, setAnswer] = useState<string>()
    const [isLoading, setIsLoading] = useState(false)

    const askQuestion = useCallback((question: string) => {
        if (!question) return

        setAnswer(undefined)
        setIsLoading(true)

        void fetchEventSource(`/api/ask`, {
            method: 'POST',
            body: JSON.stringify({ question }),
            headers: { 'Content-Type': 'application/json' },
            onmessage(ev) {
                try {
                    const { answer = '', done } = JSON.parse(ev.data)
                    setAnswer((prev = '') => `${prev}${answer}`)
                    setIsLoading(!done)
                } catch (e) { }
            },
        })
    }, [])

    // Clear answer function
    const clearAnswer = useCallback(() => {
        setAnswer(undefined)
        setIsLoading(false)
    }, [])

    return { isLoading, answer, askQuestion, clearAnswer }
}
