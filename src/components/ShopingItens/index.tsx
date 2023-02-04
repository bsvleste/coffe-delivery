import expresso from '../../assets/expresso.png'
import { Minus, Plus, TrashSimple } from 'phosphor-react'
import { useState } from 'react'
import {
  ButtonPedidos,
  ButtonTrash,
  CardTotalPedidos,
  GroupButtons,
  ItensPedidos,
  TotalPedidos,
  WrapperShopingItens,
} from './styles'

export function ShopingItens() {
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
      <WrapperShopingItens>
        <img src={expresso} alt="" />
        <div>
          <p>Expresso Tradicional</p>
          <ButtonPedidos>
            <GroupButtons>
              <Minus onClick={handleSubTrairQuantidade} />
              {count}
              <Plus onClick={handleAdicionaQuantidade} />
            </GroupButtons>
            <ButtonTrash>
              <TrashSimple />
              <span>Remover</span>
            </ButtonTrash>
          </ButtonPedidos>
        </div>
        <h1>R$9,90</h1>
      </WrapperShopingItens>
      <CardTotalPedidos>
        <ItensPedidos>
          <p>Total de itens</p>
          <h4>R$29,70</h4>
        </ItensPedidos>
        <ItensPedidos>
          <p>Entrega</p>
          <h4>R$3,50</h4>
        </ItensPedidos>
        <TotalPedidos>
          <h1>Total</h1> <h1>R$33,20</h1>
        </TotalPedidos>
      </CardTotalPedidos>
    </>
  )
}
