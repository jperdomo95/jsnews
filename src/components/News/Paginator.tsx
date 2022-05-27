import { useEffect, useState } from 'react';
import { PaginatorContainer, PaginatorItem } from '@components/layout/styled'
import { useScreenSize } from '@hooks/useScreenSize';

interface Props {
  pagesNumber: number;
  onPaginate: (page: number)=>void;
}

const Footer = ({ onPaginate, pagesNumber }: Props) => {
  const [currentPage, setCurrentPage] = useState(0)
  const [activeIndex, setActiveIndex] = useState(1)
  const { screenDimensions } = useScreenSize()

  let paginatorItems = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  if (screenDimensions.width < 762) {
    paginatorItems = [1, 2, 3, 4, 5]
  }

  const [pages, setPages] = useState<number[]>(paginatorItems)

  const handleClick = (selectedPage: number) => {
    const midleIndex = Math.trunc(pages.length / 2)
    const sumToItems = selectedPage - pages[midleIndex]

    onPaginate(selectedPage - 1)
    
    if ((selectedPage - pages[midleIndex]) < 1 && selectedPage > pages[midleIndex]) {
      setPages(paginatorItems)
    } else if (pages.find(page => page === 1) && selectedPage < pages[midleIndex]){
      setPages(pages)
    } else if (pages.find(page => page === pagesNumber && selectedPage > pages[midleIndex] )) {
      setPages(pages.map((_, i) => pagesNumber - pages.length + i + 1))
    } else {
      setPages(pages.map(page => page + sumToItems))
    }
    setCurrentPage(selectedPage)
  }

  useEffect(() => {
    const newIndex = pages.findIndex(page => page === currentPage)
    setActiveIndex(newIndex)
  }, [pages, currentPage])

  return (
    <PaginatorContainer>
      {pages.map((page, i: number) => (
        <PaginatorItem isActive={i === activeIndex} key={i} onClick={() => handleClick(page)}>
          {page}
        </PaginatorItem>
      ))}
    </PaginatorContainer>
  )
}

export default Footer
