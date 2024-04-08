import { createContext, useEffect, useState } from "react";

export const CartContext = createContext( {cart:[]} );

// eslint-disable-next-line react/prop-types
export function CartProvider({ children }){
   
   const [cart, setCart] = useState([]);

   console.log(cart)
   
   useEffect(() => {
      setCart(cart)
   }, [cart])

   const addItem = (item, quantity) => {
      if(!isInCart(item.id)) {
         setCart(prev => [...prev, {...item, quantity}])
      } else {
         console.error('El producto ya fue agregado')
      }
   }
   
   const removeItem = (itemId) => {
      const cartUpdated = cart.filter(prod => prod.id !== itemId)
      setCart(cartUpdated)
   }
   
   const clearCart = () => {
      setCart([])
   }
   
   const isInCart = (itemId) => {
      return cart.some(prod => prod.id === itemId)
   }

   console.log(isInCart())
      
   return(
      <CartContext.Provider value={ {cart, addItem, removeItem, clearCart} }>
         {children}
      </CartContext.Provider>
   );
}