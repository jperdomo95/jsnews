import NewsList from "./NewsList"
import Nav from './Nav'
import Dropdown from "./Dropdown"
import Paginator from '@components/layout/Paginator'
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
      <Nav />
      <ActionsContainer>
        <Dropdown onChange={handleDropdown} selected={query}/>
      </ActionsContainer>
      <NewsList news={news.hits} />
      <Paginator onPaginate={handlePaginator} pagesNumber={news.nbPages}/>
    </>
  )
}

export default News