import { Noto_Serif_SC } from 'next/font/google'
import { Anton } from 'next/font/google'
import { Raleway } from 'next/font/google'
import { Dancing_Script } from 'next/font/google'

export const noto = Noto_Serif_SC({ subsets: ['latin'], weight: ['400', '600'] })
export const anto = Anton({ subsets: ['latin'], weight: '400' })
export const raleway = Raleway({ subsets: ['latin'] })
export const dancing = Dancing_Script({ subsets: ['latin'] })
