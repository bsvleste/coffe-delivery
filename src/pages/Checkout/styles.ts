import styled, { css } from 'styled-components'

export const WrapperCheckout = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: flex-start;
    gap: 32px;

    form {
      margin: 40px;
    }
  `}
`
export const WrapperAdrresChekc = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    margin-bottom: 12px;
    width: 700px;
    h1 {
      font-weight: 700;
      font-family: 'Baloo 2';
      font-size: 18px;
    }
  `}
`

export const WrapperShoplist = styled.div`
  ${({ theme }) => css`
    background-color: ${theme['base-card']};
    width: 448px;
    height: 800px;
  `}
`
