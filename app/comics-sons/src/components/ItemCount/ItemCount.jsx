import { useContext, useState } from 'react';
import './ItemCount.css'
import { CartContext } from "../../context/CartContext"


// eslint-disable-next-line react/prop-types
export default function ItemCount({initial, itemStock, onAdd}) {

   const [quantity, setQuantity] = useState(initial);

   const { addItem  } = useContext(CartContext)

   const handleInc = () => {
      setQuantity(quantity + 1);
   };

   const handleDec = () => {
      setQuantity(quantity - 1);
   };

   const cartItems = {
      id, title, price
   }
   
   addItem(cartItems, quantity)

   const [quantityAdd, setQuantityAdd] = useState(initial)

   
   
   const handleOnAdd = (quantity) => {
      setQuantityAdd(quantityAdd)
   }

   return(
      <>
         <div className='button-container'>
            {
               quantity === 0 ? <button className='button-count-disabled' disabled ><span className='button-text'>-</span></button> : <button className='button-count' onClick={handleDec}><span className='button-text'>-</span></button>
            }
            
            <span>{quantity}</span>
            {
               itemStock <= quantity ? <button className='button-count-disabled' disabled ><span className='button-text'>+</span></button> : <button className='button-count' onClick={handleInc}><span className='button-text'>+</span></button>
            }
         </div>
         <button className='button-item-detail' onClick={(quantity) => onAdd(handleOnAdd)} disabled={!itemStock}>agregar al carrito</button>
      </>
   );
}