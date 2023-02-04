import { Logo } from '../Logo'
import {
  Bedges,
  ButtonShoppingCar,
  Location,
  WrapperNav,
  WrapperInfoCarshopping,
} from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { useProductsInCartContext } from '../../contexts/CartContext'
export function Header() {
  const { itemsInCart } = useProductsInCartContext()
  const bedge = itemsInCart.length
  console.log(`numero de ${bedge}`)
  const hasItemInCar = itemsInCart.length > 0
  console.log(itemsInCart)
  return (
    <header>
      <WrapperNav>
        <Logo />
        <WrapperInfoCarshopping>
          <Location>
            <MapPin size={22} weight="fill" />
            São Paulo, SP
          </Location>
          <ButtonShoppingCar>
            <ShoppingCart size={22} weight="fill" />
          </ButtonShoppingCar>
          {hasItemInCar && <Bedges>{bedge}</Bedges>}
        </WrapperInfoCarshopping>
      </WrapperNav>
    </header>
  )
}
