import {createContext, useState} from 'react'

export const addCartItem = (cartItems, productToAdd) =>{
 const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);

 if(existingCartItem){
  return cartItems.map((cartItem) =>
  cartItem.id === productToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1}
  : cartItem
  )
 }
 return [...cartItems, {...productToAdd, quantity: 1}]
}
export const RemoveCartItem = (cartItems, ProductToRemove) =>{
 
   return cartItems.map((cartItem) =>
   cartItem.id === ProductToRemove.id && ProductToRemove.quantity > 1? {...cartItem, quantity: cartItem.quantity - 1}
   : cartItem
   )
 
 }

  const DeleteCartItem = (cartItem, productToDelite) =>{
    return cartItem.filter((cartItem) => cartItem.id !== productToDelite.id)
  }
export const CartContext = createContext({
  toggle: false,
  setToggle: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItem: () => {},
  deleteItem: () => {}
})

export const CartProvider = ({children}) =>{
    const [toggle, setToggle] = useState(false);
    const [cartItems, setCartItems] = useState([])

    const addItemToCart = (Product) => setCartItems(addCartItem(cartItems, Product))
    const removeItem = (Product) => setCartItems(RemoveCartItem(cartItems, Product))
    const deleteItem = (Product) => setCartItems(DeleteCartItem(cartItems, Product))
    const value = {toggle, setToggle, cartItems, addItemToCart, removeItem, deleteItem}
    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}