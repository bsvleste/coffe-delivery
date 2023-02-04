import { MapPin, Timer } from 'phosphor-react'
import {
  ImgDelivery,
  WrapperMessageDelivery,
  WrapperMessageSucces,
  WrapperSuccess,
} from './styles'
import motoIntrega from '../../assets/Illustration.png'
import { Itens } from '../../components/Itens'
export function Success() {
  return (
    <WrapperSuccess>
      <WrapperMessageSucces>
        <h1>Uhu!! Pedido Confirmado</h1>
        <p>Agora é so aguardar que logo o cáfe chegara até você</p>
        <WrapperMessageDelivery>
          <Itens color="purple" width={32} height={32}>
            <span>
              <MapPin size={18} weight="fill" />
            </span>
            <p>
              Entrega em <strong>Rua Adolfo Schinabel,132</strong>
              <p>Vila Ema - São Paulo - SP</p>
            </p>
          </Itens>
          <Itens color="yellow" width={32} height={32}>
            <span>
              <Timer size={18} weight="fill" />
            </span>
            <p>
              <p>Previsão de Entrega</p>
              <strong>20min - 30min</strong>
            </p>
          </Itens>
          <Itens color="yellow-dark" width={32} height={32}>
            <span>
              <Timer size={18} weight="fill" />
            </span>
            <p>
              <p>Pagamento na Entrega</p>
              <strong>Cartão de Crédito</strong>
            </p>
          </Itens>
        </WrapperMessageDelivery>
      </WrapperMessageSucces>
      <ImgDelivery>
        <img src={motoIntrega} alt="" />
      </ImgDelivery>
    </WrapperSuccess>
  )
}
