import { useState } from 'react';
import './ItemCount.css'
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
export default function ItemCount({itemStock, id}) {

   const [count, setCount] = useState(0);

   const navigate = useNavigate();

   const handleInc = () => {
      if(itemStock <= count) {
         alert('ya no hay stock');
      } else
      setCount(count + 1);
   };

   const handleDec = () => {
      if(count === 0) {
         alert('El contador está en cero');
      } else
      setCount(count - 1);
   };

   const handleClick = (prodId) => {
      navigate(`/productDetail/${prodId}`);
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
         <button className='button-item-detail' onClick={()=>handleClick(id)}>ver el item</button>
      </>
   );
}