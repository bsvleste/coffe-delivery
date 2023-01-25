import styled, { css } from 'styled-components'
import media from 'styled-media-query'

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
