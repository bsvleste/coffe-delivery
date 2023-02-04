/* eslint-disable no-unused-vars */
import { CardProps } from '../../components/CardCoffe'

export enum ActionTypes {
  ADD_NEW_PRODUCT = 'ADD_NEW_PRODUCT',
  //   REMOVE_PRODUCT = 'REMOVE_PRODUCT',
  //   UPDATE_PRODUCT_AMOUNT = 'UPDATE_PRODUCT_AMOUNT',
}

export function addNewProduct(newProduct: CardProps) {
  return {
    type: ActionTypes.ADD_NEW_PRODUCT,
    playload: {
      newProduct,
    },
  }
}
