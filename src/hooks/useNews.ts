import { useContext, useEffect, useState } from "react"
import newsDB from "@api/newsDB"
import { News as NewsInterface, Query, Hit as HitInterface } from '@interfaces/News';
import { LoadingContext } from '../context/LoadingContext';

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

      const filteredNewsResponse = {
        ...newsResponse.data,
        hits: newsResponse.data.hits.filter((hit: HitInterface) => {
          const { author, story_title, story_url, created_at } = hit
          return author && story_title && story_url && created_at
        }).map((hit: HitInterface) => {
          const likedNews = JSON.parse(localStorage.getItem('likedNews') || '[]')
          const liked = !!likedNews.find(({ objectID }: HitInterface) => objectID === hit.objectID)
          const story_title = hit.story_title.length > 60
            ? `${hit.story_title.substring(0, 60)}...`
            : hit.story_title
          return {...hit, liked, story_title}
        })
      }

      setNews(filteredNewsResponse);
      hideLoading()
    } catch (error) {
      hideLoading()
      console.log(error)
    }
  }

  useEffect(() => {
    const storedFilter = localStorage.getItem('dropdown') || query
    setQuery(storedFilter)
    getNews()
  }, [])
  
  return {
    news,
    isLoading,
    getNews,
    query,
    page
  }
}