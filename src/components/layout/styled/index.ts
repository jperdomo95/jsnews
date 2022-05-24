import styled from 'styled-components'

export const StyledHeader = styled.header`
  width: 100%;
  margin: 0 0 70px;
  padding: 44px 0 42px 150px;
  box-shadow: 0 1px 4px 0 rgba(0, 21, 41, 0.12);
  background-image: linear-gradient(to bottom, #ececec -32%, #fff 124%);
  max-height: 114px;
  position: fixed;
  top: 0;
`
export const StyledBody = styled.main`
  margin-top: 184px;
  padding: 0 150px;
`
export const Image = styled.img`
  height: 28px;
`

export const PaginatorContainer = styled.div`
  display: flex;
  grid-column-gap: 8px;
  justify-content: center;
  margin-bottom: 98px;
`

export const PaginatorItem = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 6px;
  background-color: #fff;
  border: solid 1px #979797;
  font-size: 14px;
  color: rgba(0, 0, 0, .65);
`

export const PaginatorItemActive = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 6px;
  border: none;
  background-color: #1890ff;
  color: #fff;
  font-size: 14px;
`