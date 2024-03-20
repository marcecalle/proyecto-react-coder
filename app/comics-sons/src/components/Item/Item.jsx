import './Item.css'
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
export default function Item({productos}) {

   const navigate = useNavigate();

   const handleClick = (id) => {
      navigate(`/item/${id}`);
   }

   return(
      <>
         {/* eslint-disable-next-line react/prop-types */}
         {productos.map((data)=> (
            <div className='card-container' key={data.id}>
                  <h4 className='card-title' >{data.title}</h4>
                  <img className='card-img' src={data.pictureUrl} alt="" />
                  <p className='card-price'>$ {data.price}.-</p>
                  <button className='button-item-detail' onClick={()=>handleClick(data.id)}>ver detalle</button>
            </div>
         ))}
      </>
   )
}