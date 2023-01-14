import { Logo } from '../Logo'
import {
  Bedges,
  ButtonShoppingCar,
  Location,
  WrapperNav,
  WrapperInfoCarshopping,
  WrapperHeader,
  WrapperItems,
  WrapperIntro,
  IntroTitle,
  IntroSubTitle,
  WrapperImg,
} from './styles'
import cafeHeader from '../../assets/cafeHeader.png'
import { Itens } from '../Itens'
import { Coffee, MapPin, Package, ShoppingCart, Timer } from 'phosphor-react'
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
      <WrapperHeader>
        <WrapperIntro>
          <IntroTitle>
            Encontre o café perfeito para qualquer hora do dia
          </IntroTitle>
          <IntroSubTitle>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </IntroSubTitle>
          <WrapperItems>
            <div>
              <Itens color="yellow-dark">
                <span>
                  <ShoppingCart size={16} weight="fill" />
                </span>
                <p>Compra Simples e segura</p>
              </Itens>
            </div>
            <div>
              <Itens color="base-text">
                <span>
                  <Timer size={16} weight="fill" />
                </span>
                <p>Embalagem mantém o café intacto</p>
              </Itens>
            </div>
            <div>
              <Itens color="yellow">
                <span>
                  <Package size={16} weight="fill" />
                </span>
                <p>Entrega rapída e rastreavel</p>
              </Itens>
            </div>
            <div>
              <Itens color="purple">
                <span>
                  <Coffee size={16} weight="fill" />
                </span>
                <p>O café chega fresquinho até você</p>
              </Itens>
            </div>
          </WrapperItems>
        </WrapperIntro>
        <WrapperImg>
          <img src={cafeHeader} alt="copo de cafe com grãos" />
        </WrapperImg>
      </WrapperHeader>
    </header>
  )
}
