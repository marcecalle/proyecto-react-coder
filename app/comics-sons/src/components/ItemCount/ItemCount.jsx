import { useState } from 'React';
import './ItemCount.css'

export default function ItemCount() {

   const [count, setCount] = useState(0);

   const handleInc = () => {
      setCount(count + 1);
   };

   const handleDec = () => {
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