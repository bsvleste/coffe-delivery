import { WrapperInfoCart, WrapperShopList } from './styles'
import cafe1 from '../../assets/cafe1.png'
import { Minus, Plus, TrashSimple } from 'phosphor-react'
import { useState } from 'react'
export function ShopList() {
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
    <WrapperShopList>
      <h1>Cafes Selecionados</h1>
      <WrapperInfoCart>
        <img src={cafe1} alt="cafe" />
        <div>
          <p>Expresso Tradicional</p>
          <Minus onClick={handleSubTrairQuantidade} />
          {count}
          <Plus onClick={handleAdicionaQuantidade} />
          <TrashSimple />
          <span>Remover</span>
        </div>
        <div>R$9,90</div>
      </WrapperInfoCart>
    </WrapperShopList>
  )
}
