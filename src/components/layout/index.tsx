import { useContext } from 'react'
import { ThemeProvider } from 'styled-components'
import Header from './Header'
import Loading from './Loading'
import { StyledBody, LoadingSpinner, } from './styled'
import { LoadingContext } from '../../context/LoadingContext';
import { Theme } from '../../Theme';
interface Props {
  children: JSX.Element | JSX.Element[];
}


const Layout = ({ children }: Props) => {
  const { isLoading } = useContext(LoadingContext)

  return (
    <ThemeProvider theme={Theme}>
      <Header />
      <Loading open={isLoading}><LoadingSpinner /></Loading>
      <StyledBody>
        {children}
      </StyledBody>
    </ThemeProvider>
  )
}

export default Layout