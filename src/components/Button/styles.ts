import styled, { css, DefaultTheme } from 'styled-components'
import { ButtonProps } from '.'

export type WrapperProps = { hasIcon: boolean } & Pick<
  ButtonProps,
  'size' | 'fullWidth'
>

const wrapperModifier = {
  smal: (theme: DefaultTheme) => css`
    height: 3rem;
    font-size: 0.5rem;
  `,
  fullWidth: () => css`
    width: 100%;
  `,
}

export const WrapperButton = styled.button<WrapperProps>`
  ${({ theme, size, fullWidth, hasIcon }) => css`
    background-color: ${theme.yellow};
    color: ${theme.purple};
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
