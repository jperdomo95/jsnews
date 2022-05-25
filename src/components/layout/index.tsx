import { useState, useContext } from 'react'
import Header from './Header'
import Loading from './Loading'
import Footer from './Footer'
import { StyledBody, LoadingSpinner, } from './styled'
import { LoadingContext } from '../../context/LoadingContext';
interface Props {
  children: JSX.Element | JSX.Element[];
}


const Layout = ({ children }: Props) => {
  const { isLoading, toggleLoading } = useContext(LoadingContext)

  return (
    <>
    <Header />
    <Loading open={isLoading} toggleLoading={toggleLoading}><LoadingSpinner /></Loading>
    <StyledBody>
      {children}
    </StyledBody>
    <Footer />
    </>
  )
}

export default Layout