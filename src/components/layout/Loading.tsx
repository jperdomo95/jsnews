import { createPortal } from "react-dom"
import { LoadingContainer } from "./styled"

interface Props {
  children: JSX.Element | JSX.Element[];
  open: boolean;
}

const Loading = ({ children, open }: Props) => {
  if(!open) return null
  const loadingDiv = document.getElementById('portal') as HTMLElement

  return createPortal(
    <LoadingContainer>
      {children}
    </LoadingContainer>
    ,
    loadingDiv
  )
}

export default Loading