import { useNavigate } from 'react-router-dom'
import './ItemsCategory.css'

// eslint-disable-next-line react/prop-types
export default function ItemsCategory({ productsCategory }) {
   
   const navigate = useNavigate();

   const handleClick = (id) => {
      navigate(`/item/${id}`);
   }

   return(
      <>
         {/* eslint-disable-next-line react/prop-types */}
         {productsCategory.map((data)=> (
            <div className='card-category-container' key={data.id}>
                  <h4 className='card-category-title' >{data.title}</h4>
                  <img className='card-category-img' src={data.pictureUrl} alt="" />
                  <p className='card-category-price'>$ {data.price}.-</p>
                  <button className='button-category-item-detail' onClick={()=>handleClick(data.id)}>ver detalle</button>
            </div>
         ))}
      </>
   )
}