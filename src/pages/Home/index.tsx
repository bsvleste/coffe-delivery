import { CardCoffe } from '../../components/CardCoffe'
import { Intro } from '../../components/Intro'
import { WrapperCardsCoffes } from './styles'

export function Home() {
  return (
    <>
      <Intro />
      <h1>Nossos Cafés</h1>
      <WrapperCardsCoffes>
        <CardCoffe />
        <CardCoffe />
        <CardCoffe />
        <CardCoffe />
        <CardCoffe />
        <CardCoffe />
        <CardCoffe />
      </WrapperCardsCoffes>
    </>
  )
}
