import { CardProps } from '../../components/CardCoffe'
import { ActionTypes } from './actions'
import { produce } from 'immer'
export interface CartState {
  cart: CardProps[]
}
export function cartReducer(state: CartState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_PRODUCT:
      return produce(state, (draft) => {
        draft.cart.push(action.playload.newProduct)
      })
  }
}
