import moment from 'moment'
import { Hit as HitInterface } from "../../interfaces/News"
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
import { useState } from 'react'

interface Props {
  article: HitInterface;
}

const Article = ({ article }: Props) => {
  const [liked, setLiked] = useState(false)
  const wasCreated = moment().diff(article.created_at, 'hour')
  const detail = `${wasCreated} hours ago by ${article.author}`

  return (
    <StyledArticle>
      <ArticleDetail>
        <DetailContainer>
          <ClockIcon />
          <DetailText>{detail}</DetailText>
        </DetailContainer>
        <TitleText>{article.story_title}</TitleText>
      </ArticleDetail>
      <ArticleButton>
         <Image
          src={liked ? Likedheart : Heart} alt="liked"
          onClick={() => setLiked(!liked)}
        />
      </ArticleButton>
    </StyledArticle>
  )
}

export default Article