import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react'

export interface IProductInCartData {
  id: string
  quantity: number
  valor: number
}
export interface IProductCard {
  id: string
  url: string
  tag: string[]
  title: string
  description: string
  valor: number
  quantity?: number | null
  addItemToCart?: (item: IProductInCartData) => void
}
interface IProductsInCart {
  itemsInCart: Array<IProductInCartData>
  setItemsInCart: Dispatch<SetStateAction<IProductInCartData[]>>
}
export interface IProductsInCartProviderProps {
  children: ReactNode
}
export const ProductsInCartContext = createContext({} as IProductsInCart)

export const ProductsInCartProvider = ({
  children,
}: IProductsInCartProviderProps) => {
  const [itemsInCart, setItemsInCart] = useState<IProductInCartData[]>([])

  return (
    <ProductsInCartContext.Provider value={{ itemsInCart, setItemsInCart }}>
      {children}
    </ProductsInCartContext.Provider>
  )
}
export const useProductsInCartContext = () => {
  const { itemsInCart, setItemsInCart } = useContext(ProductsInCartContext)

  function addItemToCart(newItem: IProductInCartData) {
    // Check if the item already exists in the cart
    const existingItem = itemsInCart.find((item) => item.id === newItem.id)

    if (existingItem) {
      // If the item already exists, update its quantity
      const updatedItems = itemsInCart.map((item) => {
        if (item.id === newItem.id) {
          return {
            ...item,
            quantity: item.quantity + newItem.quantity,
            valor: item.valor,
          }
        }

        return item
      })

      setItemsInCart(updatedItems)
      console.log(itemsInCart)
    } else {
      // If the item does not exist, add it to the cart
      setItemsInCart([...itemsInCart, newItem])
    }
  }
  function incrementCartItemAmount(itemId: string) {
    const itemExists = itemsInCart.find((item) => item.id === itemId)
    if (itemExists) {
      const newCartItem = itemsInCart.map((cartItem: IProductInCartData) => {
        if (cartItem.id === itemId) {
          cartItem.quantity += 1
        }
        return cartItem
      })
      console.log(itemsInCart)
      setItemsInCart(newCartItem)
    }
  }

  const decrementCartItemAmount = (itemId: string) => {
    const cartWithUpdatedAmount = itemsInCart.map(
      (cartItem: IProductInCartData) => {
        if (cartItem.id === itemId) {
          const shouldRemoveItem = cartItem.quantity - 1 === 0

          return shouldRemoveItem
            ? undefined
            : { ...cartItem, quantity: cartItem.quantity - 1 }
        }

        return cartItem
      },
    )

    setItemsInCart(
      cartWithUpdatedAmount.filter((item) => !!item) as IProductInCartData[],
    )
    console.log(itemsInCart)
  }

  // function removeItemFromCart(itemToRemove: IProductInCartData) {
  //   const updatedItems = itemsInCart.filter(
  //     (item) => item.id !== itemToRemove.id,
  //   )

  //   setItemsInCart(updatedItems)
  // }

  // function incrementCartItemAmount(itemId: number) {
  //   const itemExists = itemsInCart.find((item) => item.id === itemId)
  //   if (itemExists) {
  //     const newCartItem = itemsInCart.map((cartItem: IProductInCartData) => {
  //       if (cartItem.id === itemId) {
  //         cartItem.quantity += 1
  //       }
  //       return cartItem
  //     })

  //     setItemsInCart(newCartItem)
  //   }
  // }

  // const decrementCartItemAmount = (itemId: number) => {
  //   const cartWithUpdatedAmount = itemsInCart.map(
  //     (cartItem: IProductInCartData) => {
  //       if (cartItem.id === itemId) {
  //         const shouldRemoveItem = cartItem.quantity - 1 === 0

  //         return shouldRemoveItem
  //           ? undefined
  //           : { ...cartItem, quantity: cartItem.quantity - 1 }
  //       }

  //       return cartItem
  //     },
  //   )

  //   setItemsInCart(
  //     cartWithUpdatedAmount.filter((item) => !!item) as IProductInCartData[],
  //   )
  // }

  // function getTotalQuantity() {
  //   let totalAmount: number = 0

  //   for (const i in itemsInCart) {
  //     totalAmount += itemsInCart[i].quantity
  //   }

  //   return totalAmount
  // }

  // function getItemsData() {
  //   const itemsIds = itemsInCart.map((item) => item.id)
  //   const itemsRetrieved = PRODUCTS_REPOSITORY.filter((product) => {
  //     return itemsIds.includes(product.id)
  //   })

  //   itemsRetrieved.forEach((product) => {
  //     const itemInCart = itemsInCart.find((item) => item.id === product.id)
  //     if (itemInCart) {
  //       product.quantity = itemInCart.quantity
  //     }
  //   })

  //   return itemsRetrieved
  // }

  // function emptyCart() {
  //   setItemsInCart([])
  // }

  // function calculateTotalCartPrice() {
  //   let totalPriceAmount = 0

  //   for (const item of itemsInCart) {
  //     totalPriceAmount += item.price * item.quantity
  //   }

  //   return totalPriceAmount
  // }

  return {
    itemsInCart,
    setItemsInCart,
    addItemToCart,
    incrementCartItemAmount,
    decrementCartItemAmount,
    // removeItemFromCart,
    // getTotalQuantity,
    // getItemsData,
    // calculateTotalCartPrice,
    // emptyCart,
  }
}
