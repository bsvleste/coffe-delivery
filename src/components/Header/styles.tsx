import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const WrapperNav = styled.nav`
  height: 6.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const WrapperInfoCarshopping = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`
export const ButtonShoppingCar = styled.button`
  ${({ theme }) => css`
    padding: 0.5rem;
    border: 0;
    border-radius: 8px;
    background-color: ${theme['yellow-light']};
    color: ${theme['yellow-dark']};
  `}
`
export const Location = styled.div`
  ${({ theme }) => css`
    width: 9rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0.5rem;
    background-color: ${theme['purple-light']};
    color: ${theme['purple-dark']};
    border-radius: 8px;
  `}
`
export const Bedges = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: -8px;
  right: 25px;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme['yellow-dark']};
  width: 20px;
  height: 20px;
  border-radius: 50%;
  font-size: 0.875rem;
`

export const WrapperHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 56px;
  ${media.greaterThan('medium')`
  grid-template-columns: 1fr 1fr;
   `}
`
export const IntroTitle = styled.h1`
  ${({ theme }) => css`
    font-size: 3rem;
    font-weight: 900;
    font-family: 'Baloo 2';
    margin-bottom: 16px;
    line-height: 130%;
    color: ${theme['base-title']};
  `}
`
export const IntroSubTitle = styled.p`
  ${({ theme }) => css`
    font-size: 1.25rem;
    line-height: 130%;
    color: ${theme['base-subtitle']};
  `}
`
export const WrapperIntro = styled.div`
  ${media.lessThan('medium')`
    order: 2;
   `};
`
export const WrapperItems = styled.div`
  margin-top: 66px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  div {
    display: flex;
    justify-content: start;
    align-items: center;
    p {
      font-size: 14px;
    }
  }
`
export const WrapperImg = styled.div`
  img {
    width: 476px;
    height: 360px;
  }
`
