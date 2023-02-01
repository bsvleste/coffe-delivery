import styled, { css, DefaultTheme } from 'styled-components'
import { CardsPaymentsProsp } from '.'
export type CarPaymentProps = Pick<CardsPaymentsProsp, 'isActive'>

const carsdModifiers = {
  active: (theme: DefaultTheme) => css`
    border: 1px solid ${theme.purple};
    background-color: ${theme['base-button']};
  `,
}

export const CardPayment = styled.button<CarPaymentProps>`
  ${({ theme, isActive }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 16px;
    gap: 12px;
    border: none;
    width: 230px;
    height: 51px;
    background-color: ${theme['base-button']};
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 160%;
    /* or 19px */
    border-radius: 6px;
    text-transform: uppercase;
    cursor: pointer;
    svg {
      color: ${theme.purple};
    }
    :hover {
      background-color: ${theme['base-hover']};
    }
    ${isActive && carsdModifiers.active(theme)}
  `}
`
