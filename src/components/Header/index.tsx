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
import { NavLink } from 'react-router-dom'
export function Header() {
  const { itemsInCart } = useProductsInCartContext()
  const bedge = itemsInCart.length
  const hasItemInCar = itemsInCart.length > 0
  return (
    <header>
      <WrapperNav>
        <NavLink to="/">
          <Logo />
        </NavLink>
        <WrapperInfoCarshopping>
          <Location>
            <MapPin size={22} weight="fill" />
            São Paulo, SP
          </Location>
          <NavLink to="/checkout">
            <ButtonShoppingCar>
              <ShoppingCart size={22} weight="fill" />
            </ButtonShoppingCar>
          </NavLink>
          {hasItemInCar && <Bedges>{bedge}</Bedges>}
        </WrapperInfoCarshopping>
      </WrapperNav>
    </header>
  )
}
