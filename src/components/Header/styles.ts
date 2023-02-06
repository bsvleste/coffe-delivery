import styled, { css } from 'styled-components'

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
    cursor: pointer;
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
