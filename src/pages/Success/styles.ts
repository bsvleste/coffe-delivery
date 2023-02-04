import styled, { css } from 'styled-components'

export const WrapperSuccess = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 102px;
`
export const WrapperMessageSucces = styled.div`
  ${({ theme }) => css`
    h1 {
      color: ${theme.yellow};
      font-family: 'Baloo 2';
      font-style: normal;
      font-weight: 800;
      font-size: 32px;
      line-height: 130%;
    }
    p {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 130%;
      font-stretch: 100;
      color: ${theme['base-subtitle']};
    }
  `}
`
export const WrapperMessageDelivery = styled.div`
  ${({ theme }) => css`
    margin-top: 40px;
    border: 4px solid transparent;
    background: linear-gradient(white, white) padding-box,
      linear-gradient(to right, ${theme.yellow}, ${theme['purple-dark']})
        border-box;
    border-radius: 8px 46px 8px 46px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    padding: 40px;
    gap: 32px;
    p {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 130%;
    }
  `}
`
export const ImgDelivery = styled.div`
  margin-top: 70px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 400px;
  width: 600px;
`
