import { useContext } from 'react'
import { ThemeProvider } from 'styled-components'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Loading from './Loading'
import { StyledBody, LoadingSpinner, } from './styled'
import { LoadingContext } from '../../context/LoadingContext';
import { Theme } from '../../Theme';

const Layout = () => {
  const { isLoading } = useContext(LoadingContext)

  return (
    <ThemeProvider theme={Theme}>
      <Header />
      <Loading open={isLoading}><LoadingSpinner /></Loading>
      <StyledBody>
        <Outlet />
      </StyledBody>
    </ThemeProvider>
  )
}

export default Layout