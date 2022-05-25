import { useState, useContext } from 'react'
import Header from './Header'
import Loading from './Loading'
import { StyledBody, LoadingSpinner, } from './styled'
import { LoadingContext } from '../../context/LoadingContext';
interface Props {
  children: JSX.Element | JSX.Element[];
}


const Layout = ({ children }: Props) => {
  const { isLoading } = useContext(LoadingContext)

  return (
    <>
    <Header />
    <Loading open={isLoading}><LoadingSpinner /></Loading>
    <StyledBody>
      {children}
    </StyledBody>
    </>
  )
}

export default Layout