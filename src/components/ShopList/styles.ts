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
