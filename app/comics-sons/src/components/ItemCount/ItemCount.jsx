import { useState } from 'react';
import './ItemCount.css'

// eslint-disable-next-line react/prop-types
export default function ItemCount({initial, itemStock, onAdd }) {

   const [quantity, setQuantity] = useState(initial);

   const handleInc = () => {
      setQuantity(quantity + 1);
   };

   const handleDec = () => {
      setQuantity(quantity - 1);
   };

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
         {
            quantity === 0 ? <button className='button-item-detail-disabled' onClick={() => onAdd(quantity)} disabled >agregar al carrito</button> : <button className='button-item-detail' onClick={() => onAdd(quantity)} >agregar al carrito</button>
         }
      </>
   );
}