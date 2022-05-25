import { Hit as HitInterface } from '@interfaces/News'
import { Section } from './styled'
import Article from './Article'

interface Props {
  news: HitInterface[];
}

const NewsList = ({ news }: Props) => {
  
  return (
    <Section>
      {news.map((article: HitInterface, i: number) => (
        <Article article={article} key={i} />
      ))}
    </Section>
  );
}

export default NewsList;
