import { useState } from 'React';
import './ItemCount.css'

// eslint-disable-next-line react/prop-types
export default function ItemCount({itemStock}) {

   const [count, setCount] = useState(0);

   const handleInc = () => {
      if(itemStock <= count) {
         alert('ya no hay stock')
      } else
      setCount(count + 1);
   };

   const handleDec = () => {
      if(count === 0) {
         alert('El contador está en cero')
      } else
      setCount(count - 1);
   }

   return(
      <>
         <div className='button-container'>
            <button className='button-count' onClick={handleInc}>
               <span className='button-text'>+</span>
            </button>
            <span>{count}</span>
            <button className='button-count' onClick={handleDec}>
               <span className='button-text'>-</span>
            </button>
         </div>
         <button className='button-add-cart'>agregar al carrito</button>
      </>
   );
}