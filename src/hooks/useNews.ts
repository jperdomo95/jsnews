import { useContext, useEffect, useState, useCallback } from "react"
import newsDB from "@api/newsDB"
import { News as NewsInterface, Query } from '@interfaces/News';
import { LoadingContext } from '../context/LoadingContext';
import { filterNews, addLikedToNews } from "../utils/manageLikes";

export const useNews = () => {
  
  const [news, setNews] = useState<NewsInterface>({
    hits:             [],
    nbHits:           0,
    page:             0,
    nbPages:          0,
    hitsPerPage:      0,
    exhaustiveNbHits: false,
    exhaustiveTypo:   false,
    query:            Query.default,
    params:           '',
    processingTimeMS: 0,
  })
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(0)

  const {isLoading, showLoading, hideLoading} = useContext(LoadingContext)
    
  const getNews = async (filter: string = '', page: number = 0) => {
    const storedFilter = localStorage.getItem('dropdown') || filter
    setQuery(storedFilter)
    setPage(page)
    try {
      showLoading()
      const newsResponse = await newsDB.get<NewsInterface>('/search_by_date', {
        params: {
          query: storedFilter,
          page
        },
      })

      const filteredNewsResponse = filterNews(newsResponse.data)
      const likedFilteredNewsResponse = addLikedToNews(filteredNewsResponse)

      setNews({...filteredNewsResponse, hits: likedFilteredNewsResponse});
      hideLoading()
    } catch (error) {
      hideLoading()
      console.log(error)
    }
  }

  const getNewsCallback = useCallback(getNews, [showLoading, hideLoading])

  useEffect(() => {
    const storedFilter = localStorage.getItem('dropdown') || query
    setQuery(storedFilter)
    getNewsCallback()
  }, [getNewsCallback, query])
  
  return {
    news,
    isLoading,
    getNews: getNewsCallback,
    query,
    page
  }
}