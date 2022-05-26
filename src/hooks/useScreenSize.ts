import { useEffect, useState } from "react"

export const useScreenSize = () => {
  const [ screenDimensions, setScreenDimensions ] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })

  const getDimensions = () => {
    setScreenDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    })
  }

  useEffect(() => {
    window.addEventListener('resize', getDimensions)
    return () => {
      window.removeEventListener('resize', getDimensions)
    }
  }, [screenDimensions])

  return {
    screenDimensions
  }
}