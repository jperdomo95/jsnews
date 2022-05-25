import { useState } from 'react';
import { PaginatorContainer, PaginatorItem, PaginatorItemActive } from './styled'

interface Props {
  pagesNumber: number;
  onPaginate: (page: number)=>void;
}

const Footer = ({ onPaginate, pagesNumber }: Props) => {
  const [currentPage, setCurrentPage] = useState(0)
  const [pages, setPages] = useState<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9])

  const handleClick = (selectedPage: number) => {
    //alert(i)
    const x = selectedPage - pages[Math.trunc(pages.length / 2)]
    onPaginate(selectedPage - 1)
    setPages(pages.map(page => page + x))
    setCurrentPage(selectedPage)
  }

  return (
    <PaginatorContainer>
      {pages.map((page, i: number) => (
        i === Math.trunc(pages.length / 2)?
          <PaginatorItemActive key={i}>
            {page}
          </PaginatorItemActive>
        :
        <PaginatorItem key={i} onClick={() => handleClick(page)}>
          {page}
        </PaginatorItem>
      ))}
    </PaginatorContainer>
  )
}

export default Footer
