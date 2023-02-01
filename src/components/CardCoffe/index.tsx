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
import { useState } from 'react'

export function CardCoffe() {
  const [count, setCount] = useState(0)
  function handleSubTrairQuantidade() {
    if (count === 0) {
      return
    }
    setCount((count) => count - 1)
  }
  function handleAdicionaQuantidade() {
    setCount((count) => count + 1)
  }

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
                <Minus onClick={handleSubTrairQuantidade} />
                {count}
                <Plus onClick={handleAdicionaQuantidade} />
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
