import { FormDelivery } from '../../components/FormDelivery'
import { WrapperAdrresChekc, WrapperCheckout } from './styles'

export function Checkout() {
  return (
    <>
      <WrapperCheckout>
        <WrapperAdrresChekc>
          <h1>Complete seu pedido</h1>
          <FormDelivery />
          <div className="pagamentos">Formas de Pagamentos</div>
        </WrapperAdrresChekc>
        <div className="carrinho">
          <h1>Cafes Selecionados</h1>
          <div className="cafe"> infotr</div>
        </div>
      </WrapperCheckout>
    </>
  )
}
