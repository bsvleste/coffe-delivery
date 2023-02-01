import { ReactNode, useState } from 'react'
import { CardPayment } from './styles'
export interface CardsPaymentsProsp {
  children: ReactNode
  text: string
  isActive?: boolean
  onActive?: (status: boolean) => void
}

export function CardsPayments({
  children,
  text,
  isActive,
  onActive,
}: CardsPaymentsProsp) {
  const [active, setActive] = useState(isActive)
  function handleIsActive() {
    setActive(!active)
  }
  return (
    <CardPayment isActive={isActive} onClick={handleIsActive}>
      {children}
      <p> {text}</p>
    </CardPayment>
  )
}
