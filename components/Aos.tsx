"use client"
import { useRef } from "react"
import { useElementOnScreen } from "@/hooks/useElementOnScreen"

type Props = {
    children: React.ReactElement
}
export default function AnimateIn({children}: Props) {
    const ref = useRef<HTMLDivElement>(null)
    const onScreen = useElementOnScreen(ref)

    return (
        <div ref={ref}
        style={{
            opacity: onScreen ? 1 : 0,
            translate: onScreen ? 'none' : '0 2rem',
            transition : '1000ms ease-in-out'
        }}>
            {children}
        </div>
    )
}

