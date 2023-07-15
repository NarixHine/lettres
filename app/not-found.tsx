import ErrorPanel from '@/components/error'

export default function NotFound() {
  return <ErrorPanel error={new Error('404 NOT FOUND')}></ErrorPanel>
}
