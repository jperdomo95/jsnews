import NewsList from "./NewsList"
import Header from './Header'
import Dropdown from "./Dropdown"
import Footer from '@components/layout/Footer'
import { ActionsContainer } from './styled'
import { useNews } from "@hooks/useNews"

const News = () => {
  const { news, getNews, query, page } = useNews()
  const handleDropdown = (value: string) => {
    localStorage.setItem('dropdown', value)
    getNews(value)
  }
  const handlePaginator = (page: number) => {
    getNews(query, page)
  }

  return (
    <>
      <Header />
      <ActionsContainer>
        <Dropdown onChange={handleDropdown} selected={query}/>
      </ActionsContainer>
      <NewsList news={news.hits} />
      <Footer onPaginate={handlePaginator} pagesNumber={news.nbPages}/>
    </>
  )
}

export default News