import { createContext, useCallback, useState } from 'react'

export interface LoadingContextProps {
    isLoading: boolean;
    showLoading: () => void;
    hideLoading: () => void;
}

export const LoadingContext = createContext( {} as LoadingContextProps )

interface LoadingProviderProps {
  children: JSX.Element | JSX.Element[];
}

export const LoadingProvider = ({ children }: LoadingProviderProps ) => {
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
