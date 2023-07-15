'use client'

import ErrorPanel from '@/components/error'

export default function ErrorPage({
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return <ErrorPanel error={new Error('An error has occurred.')} reset={reset}></ErrorPanel>
}
