import { Hit, News } from "@interfaces/News";

export const filterNews = (news: News) => {
  return {
    ...news,
    hits: news.hits.filter(hit => {
      const { author, story_title, story_url, created_at } = hit
      return author && story_title && story_url && created_at
    })
  }
}

export const addLikedToNews = (news: News) => {
  return news.hits.map(hit => {
    const likedNews: Hit[] = localStorage ? JSON.parse(localStorage.getItem('likedNews') || '[]') : []
    const liked = !!likedNews.find(({ objectID }) => objectID === hit.objectID)
    const story_title = hit.story_title.length > 60
      ? `${hit.story_title.substring(0, 60)}...`
      : hit.story_title
    return {...hit, liked, story_title}
  })
}

export const likeArticle = ((news: Hit[], article: Hit) => {
  const wasLiked = !!news.find(({ objectID }) => objectID === article.objectID)
  if (wasLiked) {
    return news.filter(({ objectID }) => objectID !== article.objectID)
  } else {
    return [...news, {...article, liked: true}]
  }
})