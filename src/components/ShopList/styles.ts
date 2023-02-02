import styled, { css } from 'styled-components'

export const WrapperInfos = styled.div`
  display: flex;
  flex-direction: column;
`
export const WrapperShopList = styled.div`
  ${({ theme }) => css`
    h1 {
      font-weight: 700;
      font-family: 'Baloo 2';
      font-size: 18px;
    }
    margin-bottom: 15px;
  `}
`
export const WrapperCard = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: flex-start;
    padding: 40px;
    border-radius: 6px 44px;
    background-color: ${theme['base-card']};
    gap: 24px;
    width: 448px;
    height: 498px;

    .wrapperPedidos {
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
    }
    .wrapperButtons {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }
    .buttonPedidos {
      display: flex;
      flex-direction: row;
      gap: 8px;
    }
    .buttonPlusMinus {
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
    }
    .trash {
      border-radius: 6px;
      padding: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 4px;
      color: ${theme.purple};
      background-color: ${theme['base-button']};

      cursor: pointer;
    }
    .totalPedidos {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
    }
    .itensPedidos {
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
    }
    .totalPedido {
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
    }
  `}
`
// export const WrapperInfoCart = styled.div`
//   ${({ theme }) => css`
//     background-color: ${theme['base-card']};
//     display: flex;
//     flex-direction: column;
//     align-items: flex-start;
//     gap: 24px;
//   `}
// `

// export const WrapperItens = styled.div`
//   ${({ theme }) => css`
//     display: flex;
//     flex-direction: row;
//     justify-content: flex-start;
//     align-items: flex-start;
//     gap: 12px;
//     width: 400px;
//     height: 80px;
//     img {
//       width: 64px;
//       height: 64px;
//     }
//   `}
// `
// export const WrapperButtons = styled.div`
//   ${({ theme }) => css`
//     display: flex;
//     justify-content: flex-start;
//     align-items: flex-start;
//     div {
//       p {
//         color: ${theme['base-subtitle']};
//         font-family: 'Roboto';
//         font-style: normal;
//         font-weight: 400;
//         font-size: 16px;
//         line-height: 130%;
//       }
//     }
//   `}
// `
// export const WrapperQuantity = styled.div`
//   ${({ theme }) => css`
//     padding: 16px;
//     background-color: ${theme['base-button']};
//   `}
// `
