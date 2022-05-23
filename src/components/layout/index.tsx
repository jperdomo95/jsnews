import Header from './Header'
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
    </>
  )
}

export default Layout