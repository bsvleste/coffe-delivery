import { MapPinLine } from 'phosphor-react'
import { TitleForm, WrapperForm, WrapperFormInputs } from './style'

export function FormDelivery() {
  return (
    <WrapperForm>
      <TitleForm>
        <MapPinLine size={22} />
        <div>
          <h1>Endereço de Entrega</h1>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>
      </TitleForm>
      <form action="">
        <WrapperFormInputs>
          <input type="text" placeholder="CEP" className="cep" />
          <input type="text" placeholder="rua" className="rua" />
          <div>
            <input type="text" placeholder="numero" className="numero" />
            <input
              type="text"
              placeholder="complemento"
              className="complemento"
            />
          </div>
          <div>
            <input type="text" placeholder="bairro" className="bairro" />
            <input type="text" placeholder="cidade" className="cidade" />
            <input type="text" placeholder="uf" className="uf" />
          </div>
        </WrapperFormInputs>
      </form>
    </WrapperForm>
  )
}
