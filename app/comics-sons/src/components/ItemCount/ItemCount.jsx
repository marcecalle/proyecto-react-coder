import { useState } from 'react';
import './ItemCount.css'

// eslint-disable-next-line react/prop-types
export default function ItemCount({itemStock}) {

   const [count, setCount] = useState(0);


   const handleInc = () => {
         setCount(count + 1);
   };

   const handleDec = () => {
      setCount(count - 1);
   };

   return(
      <>
         <div className='button-container'>
            {
               itemStock <= count ? <button className='button-count-disabled' disabled ><span className='button-text'>+</span></button> : <button className='button-count' onClick={handleInc}><span className='button-text'>+</span></button>
            }
            <span>{count}</span>
            {
               count === 0 ? <button className='button-count-disabled' disabled ><span className='button-text'>-</span></button> : <button className='button-count' onClick={handleDec}><span className='button-text'>-</span></button>
            }
         </div>
         <button className='button-item-detail'>agregar al carrito</button>
      </>
   );
}