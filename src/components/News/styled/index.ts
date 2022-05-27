import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px 40px;
  margin-bottom: 96px;
  @media only screen and (max-width: 576px) {
    grid-row-gap: 10px;
    margin-bottom: 38px;
  }
  @media only screen and (max-width: 762px) {
    grid-template-columns: 1fr;
    grid-gap: 10px 10px;
  }
`
export const Article = styled.article`
  height: 90px;
  border: #979797 1px solid;
  background: #ffffff;
  border-radius: 6px;
  padding: 0 0 0 26px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  opacity: .7;
  transition: .4s;
  &:hover{
    opacity: 1;
  }
  @media only screen and (max-width: 762px) {
    height: 97px;
  }
`
export const ArticleDetail = styled.div`
  background: #fff;
  flex-grow: 1;
`
export const ArticleButton = styled.button`
  background-color: #fcfcfc;
  height: 100%;
  border: none;
  border-radius: inherit;
  min-width: 68px;
`
export const DetailText = styled.p`
  font-size: 11px;
  color: #767676;
  margin-left: 8px;
  font-weight: 400;
`
export const DetailContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 6px;
  margin: 0;
`
export const TitleText = styled.p`
  color: #6b6b6b;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: .25;
  font-weight: 500;
  overflow-wrap: anywhere;
  margin: 0;
`
export const Image = styled.img`
  width: 24px;
  height: 22px;
  transition: .3s;
  &:hover{
    transform: scale(1.25);
  }
`
export const NewsListNav = styled.nav`
  display: flex;
  justify-content: center;
  margin-bottom: 63px;
  @media only screen and (max-width: 576px) {
    margin-bottom: 38px;
  }
`
interface NewsTabActiveProps {
  readonly current: string | boolean;
}
export const NewsTab = styled(Link)<NewsTabActiveProps>`
  min-width: 98px;
  min-height: 31px;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
  border-style: solid;
  border-width: 1px;
  border-color: ${({current, theme: { colors }}) =>
    current ? colors.primary : colors.secondary};
  background-color: #fcfcfc;
  color: ${({current, theme: { colors }}) =>
    current ? colors.primary : colors.secondary};;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: ${({current}) => current ? 'none' : ''};
`
export const NewsTabDefault = styled(Link)`
  min-width: 98px;
  min-height: 31px;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  border: solid 1px #d6d6d6;
  background-color: #fcfcfc;
  color: #606060;
  font-size: 16px;
  cursor: pointer;
`
export const DropdownContainer = styled.div`
  height: 32px;
  background-color: #fff;
  border-radius: 4px;
  border: #2e2e2e 1px solid;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 240px;
  z-index: 10;
`
export const DropdownText = styled.p`
  font-size: 14px;
  padding: 0 12px;
  color: #343434;
  display: flex;
  align-items: center;
`
export const DropdownList = styled.ul`
  position: absolute;
  top: 34px;
  box-shadow: 0 2px 2px 0 #dad8d8;
  background-color: #ffffff;
  width: 100%;
  padding: 0;
  margin: 0;
`
export const DropdownListItem = styled.li`
  display: flex;
  height: 46px;
  align-items: center;
  padding: 0 10px;
  color: #343434;
  &:hover {
    background-color: #eaeaea;
  }
`
export const DropdownBackdrop  = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: transparent;
  z-index: 0;
`
export const DropdownListItemText = styled.div`
  font-size: 14px;
  color: #343434;
`
export const DropdownImage = styled.img`
  margin-right: 13px;
`
export const DropdownCaret = styled.span`
  margin-right: 13px;
  transition: .35s;
  transform: rotate(90deg);
  &:hover {
    transform: rotate(270deg);
  }
`
export const ActionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 38px;
`
export const EmptyNewsMessage = styled.p`
  text-align: center;
  color: tomato;
`