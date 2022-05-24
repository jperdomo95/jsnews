import { PaginatorContainer, PaginatorItem, PaginatorItemActive } from './styled'

const Footer = () => {
  const pages = ['<', 1, 2, 3, 4, 5, 6, 7, 8, 9, '>'];
  return (
    <PaginatorContainer>
      {pages.map((page, i: number) => (
        i === 2 ?
          <PaginatorItemActive key={i}>
            {page}
          </PaginatorItemActive>
        :
        <PaginatorItem key={i}>
          {page}
        </PaginatorItem>
      ))}
    </PaginatorContainer>
  )
}

export default Footer
