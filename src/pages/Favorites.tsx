import Nav from "@components/News/Nav"
import NewsList from "@components/News/NewsList"
import { useFavorites } from '../hooks/useFavorites';

const Favorites = () => {
  const { likedArticles } = useFavorites()
  return (
    <>
    <Nav />
    <NewsList news={likedArticles} />
    </>
  )
}

export default Favorites