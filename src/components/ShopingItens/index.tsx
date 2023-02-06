/* eslint-disable prettier/prettier */
import { Minus, Plus, TrashSimple } from 'phosphor-react'
import {
  ButtonPedidos,
  ButtonTrash,
  CardTotalPedidos,
  EmptyCart,
  GroupButtons,
  ItensPedidos,
  TotalPedidos,
  WrapperShopingItens,
} from './styles'
import { useProductsInCartContext } from '../../contexts/CartContext'
import { formatPrice } from '../../util/formatPrice'

export function ShopingItens() {
  const { itemsInCart, getItemsData, removeItemFromCart, incrementCartItemAmount, decrementCartItemAmount, calculateTotalCartPrice } = useProductsInCartContext()
  const carsItens = getItemsData()
  const DELIVERY_FLAT_RATE: number = 3.5
  const totalOrderCart = DELIVERY_FLAT_RATE + calculateTotalCartPrice()

  function handleSubTrairQuantidade(id: string) {

    decrementCartItemAmount(id)
  }
  function handleAdicionaQuantidade(id: string) {

    incrementCartItemAmount(id)
  }

  console.log(itemsInCart)
  return (
    <>
      {
        carsItens.length > 0 ? (
          <div>
            {
              carsItens.map((itens, index) => (
                <>
                  <WrapperShopingItens key={index}>
                    <img src={itens.url} alt="" />
                    <div>
                      <p>{itens.title}</p>
                      <ButtonPedidos>
                        <GroupButtons>
                          <Minus onClick={() => { handleSubTrairQuantidade(itens.id) }} />
                          {itens.quantity ? itens.quantity : 1}
                          <Plus onClick={() => { handleAdicionaQuantidade(itens.id) }} />
                        </GroupButtons>
                        <ButtonTrash onClick={() => { removeItemFromCart({ id: itens.id, valor: 0, quantity: 0 }) }}>
                          <TrashSimple />
                          <span>Remover</span>
                        </ButtonTrash>
                      </ButtonPedidos>
                    </div>
                    <h1>{formatPrice(itens.valor * itens.quantity)}</h1>
                  </WrapperShopingItens>
                </>

              ))
            }
            <CardTotalPedidos>
              <ItensPedidos>
                <p>Total de itens</p>
                <h4>{formatPrice(calculateTotalCartPrice())}</h4>
              </ItensPedidos>
              <ItensPedidos>
                <p>Entrega</p>
                <h4>{formatPrice(DELIVERY_FLAT_RATE)}</h4>
              </ItensPedidos>
              <TotalPedidos>
                <h1>Total</h1> <h1>{formatPrice(totalOrderCart)}</h1>
              </TotalPedidos>
            </CardTotalPedidos>
          </div>
        ) : (<EmptyCart>Carrinho vazio</EmptyCart>)
      }
    </>

  )
}
