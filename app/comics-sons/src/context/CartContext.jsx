import { createContext, useState } from "react";

export const CartContext = createContext( {cart:[]} );

// eslint-disable-next-line react/prop-types
export function CartProvider({ children }){
   
   const [cart, setCart] = useState([]);
   
   const addItem = (item, quantity) => {
      
      const newItem = {...item, quantity}
      
      const newCart = [...cart]
      
      const isInCart = newCart.find(prod => prod.id === newItem.id)
      
      if(isInCart) {
         isInCart.quantity += quantity
         setCart(newCart)
      } else {
         setCart([...cart, newItem])
      }
   }
   
   const removeItem = (itemId) => {
      const cartUpdated = cart.filter(prod => prod.id !== itemId)
      setCart(cartUpdated)
   }
   
   const clearCart = () => {
      setCart([])
   }

   const quantityInCart = () => {
      return cart.reduce((acc, prod) => acc + prod.quantity, 0)
   }

   console.log(quantityInCart())

   const total = () => {
      return cart.reduce((acc, prod) => acc + prod.quantity * prod.price, 0)
   }
         
   return(
      <CartContext.Provider value={ {cart, addItem, removeItem, clearCart, quantityInCart, total} }>
         {children}
      </CartContext.Provider>
   );
}