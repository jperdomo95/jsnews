import styled, { keyframes } from 'styled-components'

export const StyledHeader = styled.header`
  width: 100%;
  margin: 0 0 70px;
  padding: 44px 0 42px 150px;
  box-shadow: 0 1px 4px 0 rgba(0, 21, 41, 0.12);
  background-image: linear-gradient(to bottom, #ececec -32%, #fff 124%);
  max-height: 114px;
  position: fixed;
  top: 0;
  z-index: 20;
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

export const LoadingContainer = styled.div`
  position: fixed;
  z-index: 30;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, .1);
  display: flex;
  justify-content: center;
  align-items: center;
`
const rotateAnimation = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`
export const LoadingSpinner = styled.div`
  border: 8px solid #f3f3f3;
  border-radius: 50%;
  border-top: 8px solid #3498db;
  width: 48px;
  height: 48px;
  animation: ${rotateAnimation} 2s linear infinite;
`