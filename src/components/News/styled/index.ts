import styled from 'styled-components'

export const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px 40px;
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
  width: 68px;
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
`
export const TitleText = styled.p`
  color: #6b6b6b;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: .25;
  font-weight: 500;
`
export const Image = styled.img`
  width: 24px;
  height: 22px;
`