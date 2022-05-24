import { useState } from "react"
import { newsMock } from '../../mocks/news'
import { Hit as HitInterface } from '@interfaces/News'
import { Section } from './styled'
import Article from './Article'
import Header from './Header'

const NewsList = () => {
  const [news, setNews] = useState<HitInterface[]>(newsMock.hits);
  
  return (
    <>
    <Header />
    <Section>
      {news.map((article: HitInterface, i: number) => (
        <Article article={article} key={i} />
      ))}
    </Section>
    </>
  );
}

export default NewsList;
