import { Logo } from '../Logo'
import {
  Bedges,
  ButtonShoppingCar,
  Location,
  WrapperNav,
  WrapperInfoCarshopping,
} from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'
export function Header() {
  const hasItemInCar = false
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
          {hasItemInCar && <Bedges>3</Bedges>}
        </WrapperInfoCarshopping>
      </WrapperNav>
    </header>
  )
}
