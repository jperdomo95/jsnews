import { useState } from "react";
import { useLocation } from "react-router";
import { NewsListNav, NewsTab } from "./styled";

const Nav = () => {
  const [activeTab, setActiveTab] = useState('all')
  const isFavoritesPage = useLocation().pathname === '/favorites'
  const isNewsPage = useLocation().pathname === '/'

  const handleSetActiveTab = () => {
    setActiveTab(activeTab === 'all' ? 'faves' : 'all');
  }

  return (
    <NewsListNav onClick={handleSetActiveTab}>
      <NewsTab current={(isNewsPage ? 'current' : '')} to="/">All</NewsTab>
      <NewsTab current={(isFavoritesPage ? 'current' : '')} to="favorites">My faves</NewsTab>
    </NewsListNav>
  )
}

export default Nav;