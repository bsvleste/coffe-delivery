import styled, { css } from 'styled-components'
import { ButtonProps } from '.'

export type WrapperProps = { hasIcon: boolean } & Pick<
  ButtonProps,
  'size' | 'fullWidth'
>

const wrapperModifier = {
  fullWidth: () => css`
    width: 100%;
  `,
}

export const WrapperButton = styled.button<WrapperProps>`
  ${({ theme, size, fullWidth, hasIcon }) => css`
    background-color: ${theme.yellow};
    border-radius: 6px;
    color: ${theme.white};
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 0;
    padding: 1rem;
    &:hover {
      background-color: ${theme['yellow-dark']};
    }
    ${!!fullWidth && wrapperModifier.fullWidth()}
  `}
`
