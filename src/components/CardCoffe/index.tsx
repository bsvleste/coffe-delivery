import {
  ButtonShoppingCar,
  WrapperActionsCard,
  WrapperButtonCoffe,
  WrapperCafe,
  WrapperCard,
  WrapperDescription,
  WrapperPrice,
  WrapperSpan,
} from './styles'
import cafe1 from '../../assets/cafe1.png'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'

export function CardCoffe() {
  return (
    <>
      <WrapperCard>
        <WrapperCafe>
          <img src={cafe1} alt="foto de cafe" />
          <WrapperSpan>
            <span>Tradicional</span>
          </WrapperSpan>
          <WrapperDescription>
            <h1>Expresso Gelado</h1>
            <p>Bebida preparada com cafe expresso e cubos de gelo</p>
          </WrapperDescription>

          <WrapperButtonCoffe>
            <WrapperPrice>
              <span>R$</span>
              <strong>9,90</strong>
            </WrapperPrice>
            <WrapperActionsCard>
              <div>
                <Minus />
                5
                <Plus />
              </div>
              <ButtonShoppingCar>
                <ShoppingCart weight="fill" />
              </ButtonShoppingCar>
            </WrapperActionsCard>
          </WrapperButtonCoffe>
        </WrapperCafe>
      </WrapperCard>
    </>
  )
}
