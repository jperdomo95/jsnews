import { createContext, useState } from 'react'

export interface LoadingContextProps {
    isLoading: boolean;
    toggleLoading: () => void;
}

export const LoadingContext = createContext( {} as LoadingContextProps )

export const LoadingProvider = ({ children }: any ) => {
  const [isLoading, setIsLoading] = useState(true)
  const toggleLoading = () => {
    setIsLoading(!isLoading)
  }
    return (
        <LoadingContext.Provider value={{
          isLoading,
          toggleLoading,
        }}>
            { children }
        </LoadingContext.Provider>
    )
}
