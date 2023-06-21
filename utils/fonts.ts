import { NextFont } from 'next/dist/compiled/@next/font'
import { Poppins, Montserrat, DM_Mono } from 'next/font/google'

export const pop: NextFont = Poppins({
  subsets: ["latin"],
  weight: ["400","500","600","700"]
})

export const mont: NextFont  = Montserrat({
  subsets: ["latin"],
  weight: ["400","500","600","700"]
})

export const mono: NextFont  = DM_Mono({
  subsets: ["latin"],
  weight: ["300","400","500"]
})
