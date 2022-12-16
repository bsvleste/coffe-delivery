import { MapPin, ShoppingCart } from 'phosphor-react'
import { useState } from 'react'
import { Logo } from '../Logo'
import {
  Bedges,
  ButtonShoppingCar,
  Location,
  WrapperHeader,
  WrapperInfoCarshopping,
} from './styles'

export function Header() {
  const [hasItemInCar, setHasItemInCar] = useState(false)
  return (
    <>
      <WrapperHeader>
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
      </WrapperHeader>
    </>
  )
}
