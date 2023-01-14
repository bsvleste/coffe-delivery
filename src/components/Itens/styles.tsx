import styled, { css } from 'styled-components'
import { ItensProps } from '.'

export const ItensWrapper = styled.div<ItensProps>`
  ${({ theme, color }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-bottom: 28px;
    color: ${theme['base-text']};
    span {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 24px;
      height: 24px;
      border-radius: 999%;
      color: #fff;
      background-color: ${theme[color!]};
    }
  `}
`
