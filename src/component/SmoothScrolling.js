import React, { useEffect, useRef, useState } from "react"

export const SmoothScrolling = ({children}) => {
    const [isVisible, setIsVisible] = useState(false)
    const ref = useRef(null)

    useEffect(() => {
        const onWindScroll = () => {
            const el = ref.current
            if(el){
                const {top} = el.getBoundingClientRect()
                const isVisible = top < window.innerHeight
                setIsVisible(isVisible)
            }
        }
        window.addEventListener("scroll", onWindScroll)
        return () => {
            window.removeEventListener("scroll", onWindScroll)
        }
        
    },[])

    const classes = `transition-opacity duration-1000 
    ${isVisible ? "opacity-100, " : "opacity-0"}`
  return (
    <div ref={ref} className={classes}>
        {children}
    </div>
  )
}
