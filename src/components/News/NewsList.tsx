import { Hit as HitInterface } from '@interfaces/News'
import { Section, EmptyNewsMessage } from './styled'
import Article from './Article'

interface Props {
  news: HitInterface[];
}

const NewsList = ({ news }: Props) => {
  
  if (!news.length) {
    return (
      <EmptyNewsMessage>There are no posts available...</EmptyNewsMessage>
    )
  }

  return (
    <Section>
      {news.map((article: HitInterface, i: number) => (
        <Article article={article} key={i} />
      ))}
    </Section>
  );
}

export default NewsList;
