import { Link } from 'react-router-dom'
import { StyledHeader } from './styled'
import Logo from './Logo'

const Header = () => {
  return (
    <StyledHeader>
      <Link to="/">
        <Logo />
      </Link>
    </StyledHeader>
  )
}

export default Header
