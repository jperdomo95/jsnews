import { useState } from "react";
import { NewsListHeader, NewsTabActive, NewsTabDefault } from "./styled";

const Header = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  const handleSetActiveTab = () => {
    setActiveTab(activeTab === 'all' ? 'faves' : 'all');
  }

  return (
    <NewsListHeader onClick={handleSetActiveTab}>
      <NewsTabActive>All</NewsTabActive>
      <NewsTabDefault>My faves</NewsTabDefault>
    </NewsListHeader>
  )
}

export default Header;