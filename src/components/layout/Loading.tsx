import { createPortal } from "react-dom"
import { LoadingContainer } from "./styled"

interface Props {
  children: JSX.Element | JSX.Element[];
  open: boolean;
  toggleLoading: ()=>void;
}

const Loading = ({ children, open, toggleLoading }: Props) => {
  if(!open) return null
  const loadingDiv = document.getElementById('portal') as HTMLElement

  return createPortal(
    <LoadingContainer onClick={toggleLoading}>
      {children}
    </LoadingContainer>
    ,
    loadingDiv
  )
}

export default Loading