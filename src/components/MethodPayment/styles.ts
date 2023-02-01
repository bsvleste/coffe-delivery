import styled, { css } from 'styled-components'

export const WrapperMethodsPayment = styled.div`
  ${({ theme }) => css`
    height: 207px;
    background-color: ${theme['base-card']};
    width: 700px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
  `}
`

export const TitlePayment = styled.div`
  ${({ theme }) => css`
    display: flex;
    vertical-align: baseline;
    margin: 40px;

    gap: 16px;
    font-family: 'Roboto';
    font-size: 1rem;
    h1 {
      font-weight: 400;
      line-height: 28.8px;
      color: ${theme['base-subtitle']};
    }
    p {
      line-height: 18.2px;
      font-size: 14px;
      color: ${theme['base-text']};
    }
    svg {
      margin-top: 4px;
      color: ${theme.purple};
    }
  `}
`
export const WrapperCardsPayments = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 12px;
  margin-left: 40px;
  margin-right: 40px;
`
