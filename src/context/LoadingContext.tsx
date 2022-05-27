import { createContext, useCallback, useState } from 'react'

export interface LoadingContextProps {
    isLoading: boolean;
    showLoading: () => void;
    hideLoading: () => void;
}

export const LoadingContext = createContext( {} as LoadingContextProps )

export const LoadingProvider = ({ children }: any ) => {
  const [isLoading, setIsLoading] = useState(false)
  
  const showLoading = useCallback(() => {
    setIsLoading(true)
  }, [])

  const hideLoading = useCallback(() => {
    setIsLoading(false)
  }, [])

  return (
    <LoadingContext.Provider value={{
      isLoading,
      showLoading,
      hideLoading,
    }}>
      { children }
    </LoadingContext.Provider>
  )
}
