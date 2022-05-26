import { Hit as HitInterface } from '@interfaces/News';

export const useFavorites = () => {
  const likedArticles: HitInterface[] = JSON.parse(localStorage.getItem('likedNews') || '[]')

  return {
    likedArticles
  }
}