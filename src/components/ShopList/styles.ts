import styled, { css } from 'styled-components'

export const WrapperShopList = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    border-radius: 6px 44px;
    margin-bottom: 12px;
    h1 {
      font-weight: 700;
      font-family: 'Baloo 2';
      font-size: 18px;
    }
  `}
`
export const WrapperInfoCart = styled.div`
  ${({ theme }) => css`
    background-color: blanchedalmond;
    height: 498px;
    width: 460px;
    display: flex;
    align-items: flex-start;
    padding: 40px;
    gap: 24px;
  `}
`
