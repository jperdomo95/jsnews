import { createContext, useState } from 'react'

export interface LoadingContextProps {
    isLoading: boolean;
    showLoading: () => void;
    hideLoading: () => void;
}

export const LoadingContext = createContext( {} as LoadingContextProps )

export const LoadingProvider = ({ children }: any ) => {
  const [isLoading, setIsLoading] = useState(false)
  
  const showLoading = () => {
    setIsLoading(true)
  }

  const hideLoading = () => {
    setIsLoading(false)
  }

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
