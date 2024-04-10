import './Item.css'
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
export default function Item({id, title, pictureUrl, price}) {

   const navigate = useNavigate();

   const handleClick = (id) => {
      navigate(`/item/${id}`);
   }

   return(
      <>       
         <div className='card-container' key={id}>
            <h4 className='card-title' >{title}</h4>
            <img className='card-img' src={pictureUrl} alt={title} />
            <p className='card-price'>$ {price}.-</p>
            <button className='button-item-detail' onClick={()=>handleClick(id)}>ver detalle</button>
         </div>
      </>
   )
}