import styled, { css } from 'styled-components'

export const WrapperCard = styled.div`
  ${({ theme }) => css`
    margin-top: 54px;
    width: 256px;
    height: 360px;
    border-radius: 6px 36px;
    background-color: ${theme['base-card']};
  `}
`

export const WrapperCafe = styled.div`
  ${({ theme }) => css`
    font-family: 'Roboto';
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      position: relative;
      top: -20px;
    }
  `}
`
export const WrapperDescription = styled.div`
  ${({ theme }) => css`
    margin-top: 16px;
    display: flex;
    align-items: center;
    flex-direction: column;
    font-family: 'Roboto';
    text-align: center;
    h1 {
      font-size: 28px;
    }
    p {
      font-size: small;
      color: ${theme['base-label']};
    }
  `}
`
export const WrapperSpan = styled.div`
  ${({ theme }) => css`
    display: flex;
    margin-top: 10px;
    justify-content: center;
    align-items: center;
    span {
      font-size: small;
      color: ${theme['yellow-dark']};
      padding: 6px;
      border-radius: 900px;
      background-color: ${theme['yellow-light']};
      margin-right: 12px;
    }
  `}
`
export const WrapperButtonCoffe = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: flex-start;
    margin-top: 60px;
  `}
`
export const WrapperPrice = styled.div`
  ${({ theme }) => css`
    span {
      color: ${theme['base-text']};
      font-size: 12px;
    }
    strong {
      margin-left: 2px;
      color: ${theme['base-text']};
      font-family: 'Baloo 2';
      font-weight: bold;
      font-size: larger;
    }
  `}
`

export const WrapperActionsCard = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-around;
    align-items: center;
    div {
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin-right: 12px;
      background-color: ${theme['base-button']};
      width: 72px;
      height: 32px;
      color: ${theme.purple};
      border-radius: 8px;
      svg {
        cursor: pointer;
      }
    }
  `}
`
export const ButtonShoppingCar = styled.button`
  ${({ theme }) => css`
    padding: 0.5rem;
    border: 0;
    border-radius: 8px;
    background-color: ${theme.purple};
    color: ${theme.white};
  `}
`
