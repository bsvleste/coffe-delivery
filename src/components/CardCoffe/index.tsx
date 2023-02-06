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
import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useState } from 'react'
import {
  IProductCard,
  useProductsInCartContext,
} from '../../contexts/CartContext'

export interface IProductInCartData {
  id: string
  quantity: number
  valor: number
}

export function CardCoffe({
  id,
  description,
  url,
  tag,
  title,
  valor,
  addItemToCart,
}: IProductCard) {
  const { incrementCartItemAmount, decrementCartItemAmount } =
    useProductsInCartContext()
  const [quantity, setQuantity] = useState(0)

  function handleSubTrairQuantidade(id: string) {
    if (quantity <= 0) {
      return
    }
    setQuantity((quantity) => quantity - 1)
    decrementCartItemAmount(id)
  }
  function handleAdicionaQuantidade(id: string) {
    setQuantity((quantity) => quantity + 1)
    incrementCartItemAmount(id)
  }
  function handleAddItemToCart() {
    if (quantity > 0 && addItemToCart) {
      addItemToCart({
        id,
        quantity,
        valor,
      })
    } else {
      alert('Selecione a quantidade')
    }
  }
  return (
    <>
      <WrapperCard>
        <WrapperCafe>
          <img src={url} alt={title} />
          <WrapperSpan>
            {tag.map((tags, index) => (
              <span key={index}>{tags}</span>
            ))}
          </WrapperSpan>
          <WrapperDescription>
            <h1>{title}</h1>
            <p>{description}</p>
          </WrapperDescription>
          <WrapperButtonCoffe>
            <WrapperPrice>
              <span>R$</span>
              <strong>{valor.toFixed(2)}</strong>
            </WrapperPrice>
            <WrapperActionsCard>
              <div>
                <Minus
                  onClick={() => {
                    handleSubTrairQuantidade(id)
                  }}
                />
                {quantity}
                <Plus
                  onClick={() => {
                    handleAdicionaQuantidade(id)
                  }}
                />
              </div>

              <ButtonShoppingCar onClick={handleAddItemToCart}>
                <ShoppingCart weight="fill" />
              </ButtonShoppingCar>
            </WrapperActionsCard>
          </WrapperButtonCoffe>
        </WrapperCafe>
      </WrapperCard>
    </>
  )
}
