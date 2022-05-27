import { Hit, News } from "@interfaces/News";

export const filterNews = (news: any) => {
  return {
    ...news,
    hits: news.hits.filter((hit: any) => {
      const { author, story_title, story_url, created_at } = hit
      return author && story_title && story_url && created_at
    })
  }
}

export const addLikedToNews = (news: any) => {
  return news.hits.map((hit: any) => {
    const likedNews: Hit[] = localStorage ? JSON.parse(localStorage.getItem('likedNews') || '[]') : []
    const liked = !!likedNews.find(({ objectID }) => objectID === hit.objectID)
    const story_title = hit.story_title.length > 60
      ? `${hit.story_title.substring(0, 60)}...`
      : hit.story_title
    return {...hit, liked, story_title}
  })
}