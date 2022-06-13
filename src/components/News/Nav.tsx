import { NewsListNav, NewsTab } from "./styled";
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <NewsListNav>
      <NavLink to="/">
        {({ isActive }) => (
          <NewsTab current={isActive}>All</NewsTab>
        )}
      </NavLink>
      <NavLink to="/favorites">
        {({ isActive }) => (
          <NewsTab current={isActive}>Faves</NewsTab>
        )}
      </NavLink>
    </NewsListNav>
  )
}

export default Nav;