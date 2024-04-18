import { useState } from 'react';
import '../../index.css'

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
         <div className='item-count__wraper'>
            {
               quantity === 0 ?
                  <button className='item-count__button button-disabled' disabled >
                     -
                  </button> : 
                  <button className='item-count__button' onClick={handleDec}>
                     -
                  </button>
            }
            <span className='item-count__quantity'>{quantity}</span>
            {
               itemStock <= quantity ?
                  <button className='item-count__button button-disabled' disabled >
                     +
                  </button> :
                  <button className='item-count__button' onClick={handleInc}>
                     +
                  </button>
            }
         </div>
         <div className='item-add-cart__wraper'>
            {
               quantity === 0 ?
               <button className='item-add-cart__button button-disabled' onClick={() => onAdd(quantity)} disabled >agregar al carrito</button> :
               <button className='item-add-cart__button button-active primary-button' onClick={() => onAdd(quantity)} >agregar al carrito</button>
            }
         </div>
      </>
   );
}