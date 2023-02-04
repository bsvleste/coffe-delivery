import { CardCoffe } from '../../components/CardCoffe'
import { Intro } from '../../components/Intro'
import { WrapperCardsCoffes } from './styles'
import { data } from '../../repository/productsRepository'
import { useProductsInCartContext } from '../../contexts/CartContext'
export function Home() {
  const { addItemToCart } = useProductsInCartContext()
  return (
    <>
      <Intro />
      <h1>Nossos Cafés</h1>
      <WrapperCardsCoffes>
        {data.map((product) => (
          <CardCoffe
            key={product.id}
            title={product.title}
            valor={product.valor}
            tag={product.tag}
            description={product.description}
            id={product.id}
            url={product.url}
            addItemToCart={addItemToCart}
          />
        ))}
      </WrapperCardsCoffes>
    </>
  )
}
