import { WrapperCard, WrapperInfos, WrapperShopList } from './styles'
import Button from '../Button'
import { ShopingItens } from '../ShopingItens'
export function ShopList() {
  return (
    <WrapperInfos>
      <WrapperShopList>
        <h1>Cafes Selecionados</h1>
      </WrapperShopList>
      <WrapperCard>
        <ShopingItens />

        <Button fullWidth>Confirme seu Pedido</Button>
      </WrapperCard>
    </WrapperInfos>
  )
}
