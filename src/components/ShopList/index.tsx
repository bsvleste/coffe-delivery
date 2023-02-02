import { WrapperCard, WrapperInfos, WrapperShopList } from './styles'
import cafe1 from '../../assets/cafe1.png'
import { Minus, Plus, TrashSimple } from 'phosphor-react'
import { useState } from 'react'
import Button from '../Button'
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
    <WrapperInfos>
      <WrapperShopList>
        <h1>Cafes Selecionados</h1>
      </WrapperShopList>
      <WrapperCard>
        <div className="wrapperPedidos">
          <img src={cafe1} alt="" />
          <div className="wrapperButtons">
            <p>Expresso Tradicional</p>
            <div className="buttonPedidos">
              <div className="buttonPlusMinus">
                <Minus onClick={handleSubTrairQuantidade} />
                {count}
                <Plus onClick={handleAdicionaQuantidade} />
              </div>
              <div className="trash">
                <TrashSimple />
                <span>Remover</span>
              </div>
            </div>
          </div>
          <h1>R$9,90</h1>
        </div>
        <div className="totalPedidos">
          <div className="itensPedidos">
            <p>Total de itens</p>
            <h4>R$29,70</h4>
          </div>
          <div className="itensPedidos">
            <p>Entrga</p>
            <h4>R$3,50</h4>
          </div>
          <div className="totalPedido">
            <h1>Total</h1> <h1>R$33,20</h1>
          </div>
        </div>
        <Button fullWidth>Confirme seu Pedido</Button>
      </WrapperCard>
    </WrapperInfos>
  )
}
