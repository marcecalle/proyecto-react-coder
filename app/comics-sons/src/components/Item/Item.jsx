import ItemCount from '../ItemCount/ItemCount'
import './Item.css'

// eslint-disable-next-line react/prop-types
export default function Item({title, picture, description, price, stock}) {


   return(
      <>
         <div className='card-container'>
            <h3 className='card-title'>{title}</h3>
            <img className='card-img' src={picture} alt="" />
            <p className='card-description' >{description}</p>
            <p>$ {price}.-</p>
            <ItemCount itemStock={stock}/>
         </div>
      </>
   )
}