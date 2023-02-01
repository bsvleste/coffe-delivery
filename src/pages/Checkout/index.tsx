import { FormDelivery } from '../../components/FormDelivery'
import { MethodPayment } from '../../components/MethodPayment'
import { ShopList } from '../../components/ShopList'
import { WrapperAdrresChekc, WrapperCheckout } from './styles'

export function Checkout() {
  return (
    <>
      <WrapperCheckout>
        <WrapperAdrresChekc>
          <h1>Complete seu pedido</h1>
          <FormDelivery />
          <MethodPayment />
        </WrapperAdrresChekc>
        <ShopList />
      </WrapperCheckout>
    </>
  )
}
