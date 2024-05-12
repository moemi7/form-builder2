import '../../index.css'
import { ClientOnly } from './client'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'React App',
  description: 'Web site created with Next.js.',
}
 
export function generateStaticParams() {
  return [{ slug: [''] }]
}
 
export default function Page() {
  return <ClientOnly />
}