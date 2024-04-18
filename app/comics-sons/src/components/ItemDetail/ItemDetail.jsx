import { useContext, useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import '../../index.css'

// eslint-disable-next-line react/prop-types
export default function ItemDetail({ pictureUrl, title, description, autor, editorial, category, stock, id, price }) {

   const [quantityAdded, setQuantityAdded] = useState(0)

   const { addItem } = useContext(CartContext)

   const handleOnAdd = (quantity) => {
      setQuantityAdded(quantity)

      const item = {
         id,
         title,
         price,
         pictureUrl
      }

      addItem(item, quantity)
   }

   return(
      <>
         <article className='card-detail' >
            <img className='card-detail__img' src={pictureUrl} alt={title} />
            <div className="card-detail__description">
               <h3 className='card-detail__description__title' >{title}</h3>
               <p className='card-detail__description__paragraph' >Descripción: <span className='paragraph-detail'>{description}</span>
               </p>
               <p className='card-detail__description__paragraph'>Autor: <span className='paragraph-detail'>{autor}</span></p>
               <p className='card-detail__description__paragraph'>Editorial: <span className='paragraph-detail'>{editorial}</span></p>
               <p className='card-detail__description__paragraph' >Category: <span className='paragraph-detail'>{category}.-</span></p>
               <p className='card-detail__description__paragraph' >Stock: <span className='paragraph-detail'>{stock}</span></p>
               <div className="card-detail__buttons-wraper">
                  {
                     quantityAdded > 0 ? ( <Link to='/cart' ><button className='card-detail__button-wraper__button primary-button' >Finalizar compra</button></Link> ) : ( <ItemCount initial={0} itemStock={stock} id={id} onAdd={(quantity) => handleOnAdd(quantity)} /> )
                  }
               </div>
            </div>
         </article>
      </>
   )
}