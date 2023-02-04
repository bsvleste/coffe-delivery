import { ReactNode } from 'react'
import { ItensWrapper } from './styles'
export type Colors = 'purple' | 'yellow-dark' | 'yellow' | 'base-text'
export type ItensProps = {
  children: ReactNode
  color?: Colors
  width?: number
  height?: number
}

export function Itens({
  children,
  color,
  width = 24,
  height = 24,
}: ItensProps) {
  return (
    <ItensWrapper color={color} width={width} height={height}>
      {children}
    </ItensWrapper>
  )
}
