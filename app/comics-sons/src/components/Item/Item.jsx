import { useNavigate } from 'react-router-dom';
import '../../index.css'

// eslint-disable-next-line react/prop-types
export default function Item({id, title, pictureUrl, price}) {

   const navigate = useNavigate();

   const handleClick = (id) => {
      navigate(`/item/${id}`);
   }

   return(
      <>       
         <article className='card-wraper' key={id}>
            <img className='card-img' src={pictureUrl} alt={title} />
            <h4 className='card-title' >{title}</h4>
            <p className='card-price'>$ {price}.-</p>
            <button className='button-card-detail' onClick={()=>handleClick(id)}>ver detalle</button>
         </article>
      </>
   )
}