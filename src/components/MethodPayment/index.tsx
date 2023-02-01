import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { useState } from 'react'
import { CardsPayments } from '../CardsPayments'
import {
  TitlePayment,
  WrapperCardsPayments,
  WrapperMethodsPayment,
} from './styles'
interface MethodPaymentProps {
  onActive?: (status: boolean) => void
}
export function MethodPayment({ onActive }: MethodPaymentProps) {
  const [active, setActive] = useState(false)
  function handleIsActive() {
    setActive(!active)
  }
  return (
    <WrapperMethodsPayment>
      <TitlePayment>
        <CurrencyDollar size={22} />
        <div>
          <h1>Pagamento</h1>
          <p>
            O pagamento é feito na Entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </TitlePayment>
      <WrapperCardsPayments>
        <CardsPayments text="cartão de crétido" onActive={handleIsActive}>
          <CreditCard size={22} />
        </CardsPayments>
        <CardsPayments text="cartão de débito" onActive={handleIsActive}>
          <Bank size={22} />
        </CardsPayments>
        <CardsPayments text="dinheiro" onActive={handleIsActive}>
          <Money size={22} />
        </CardsPayments>
      </WrapperCardsPayments>
    </WrapperMethodsPayment>
  )
}
