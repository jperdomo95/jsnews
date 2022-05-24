import Header from './Header'
import Footer from './Footer'
import { StyledBody } from './styled'

interface Props {
  children: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: Props) => {
  return (
    <>
    <Header />
    <StyledBody>
      {children}
    </StyledBody>
    <Footer />
    </>
  )
}

export default Layout