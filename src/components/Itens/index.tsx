import { ReactNode } from 'react'
import { ItensWrapper } from './styles'
export type Colors = 'purple' | 'yellow-dark' | 'yellow' | 'base-text'
export type ItensProps = {
  children: ReactNode
  color?: Colors
}

export function Itens({ children, color }: ItensProps) {
  return <ItensWrapper color={color}>{children}</ItensWrapper>
}
