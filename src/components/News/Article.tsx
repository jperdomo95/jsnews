
import { useState } from 'react'
import moment from 'moment'
import { Hit as HitInterface } from "@interfaces/News"
import {
  Article as StyledArticle,
  ArticleDetail,
  ArticleButton,
  DetailText,
  DetailContainer,
  TitleText,
  Image
} from "./styled"
import Likedheart from '@assets/likedheart.png'
import Heart from '@assets/heart.png'
import ClockIcon from '../icons/ClockIcon'

interface Props {
  article: HitInterface;
}

const Article = ({ article }: Props) => {
  const [liked, setLiked] = useState(false)
  const wasCreated = moment().diff(article.created_at, 'hour')
  const detail = `${wasCreated} hours ago by ${article.author}`

  const handleOpenArticle = () => {
    if (article.story_url)
      window.open(article.story_url, '_blank');
  }

  const handleLikeArticle = (e: any) => {
    e.stopPropagation();
    const likedArticles: HitInterface[] = JSON.parse(localStorage.getItem('likedNews') || '[]')
    const wasLiked = !!likedArticles.find(({ objectID }) => objectID === article.objectID)
    if (wasLiked) {
      const removedLiked = likedArticles.filter(({ objectID }) => objectID !== article.objectID)
      localStorage.setItem('likedNews',JSON.stringify(removedLiked))
    } else {
      likedArticles.push({...article, liked: true})
      localStorage.setItem('likedNews',JSON.stringify(likedArticles))
    }
    setLiked(!liked)
  }

  return (
    <StyledArticle onClick={handleOpenArticle}>
      <ArticleDetail>
        <DetailContainer>
          <ClockIcon />
          <DetailText>{detail}</DetailText>
        </DetailContainer>
        <TitleText>{article.story_title}</TitleText>
      </ArticleDetail>
      <ArticleButton onClick={(e) => { handleLikeArticle(e) }}>
         <Image
          src={article.liked || liked ? Likedheart : Heart} alt="liked"
        />
      </ArticleButton>
    </StyledArticle>
  )
}

export default Article