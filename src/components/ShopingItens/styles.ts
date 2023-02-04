import styled, { css } from 'styled-components'

export const WrapperShopingItens = styled.div`
  ${({ theme }) => css`
    display: flex;
    vertical-align: baseline;
    gap: 16px;
    width: 100%;
    margin-bottom: 48px;
    p {
      color: ${theme['base-subtitle']};
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 130%;
    }
    h1 {
      color: ${theme['base-text']};
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 130%;
      margin-left: 60px;
    }
    img {
      width: 64px;
      height: 64px;
    }
  `}
`

export const ButtonPedidos = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`

export const GroupButtons = styled.div`
  ${({ theme }) => css`
    border-radius: 6px;
    padding: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
    color: ${theme.purple};
    background-color: ${theme['base-button']};
    svg {
      cursor: pointer;
    }
  `}
`
export const ButtonTrash = styled.div`
  ${({ theme }) => css`
    border-radius: 6px;
    padding: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
    color: ${theme.purple};
    background-color: ${theme['base-button']};
    cursor: pointer;
  `}
`
export const CardTotalPedidos = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

export const ItensPedidos = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    margin-bottom: 16px;
    justify-content: space-between;
    color: ${theme['base-text']};
    p {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 130%;
    }
    h4 {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 130%;
    }
  `}
`
export const TotalPedidos = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    margin-bottom: 16px;
    justify-content: space-between;
    color: ${theme['base-text']};
    h1 {
      color: ${theme['base-subtitle']};
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 130%;
    }
  `}
`

//   .totalPedido {
//     width: 100%;
//     display: flex;
//     margin-bottom: 16px;
//     justify-content: space-between;
//     color: ${theme['base-text']};
//     h1 {
//       color: ${theme['base-subtitle']};
//       font-family: 'Roboto';
//       font-style: normal;
//       font-weight: 700;
//       font-size: 20px;
//       line-height: 130%;
//     }
//   }
