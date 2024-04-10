import { useContext, useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"

// eslint-disable-next-line react/prop-types
export default function ItemDetail({ pictureUrl, title, description, autor, editorial, category, stock, id, price }) {

   const [quantityAdded, setQuantityAdded] = useState(0)

   const { addItem } = useContext(CartContext)

   const handleOnAdd = (quantity) => {
      setQuantityAdded(quantity)

      const item = {
         id,
         title,
         price
      }

      addItem(item, quantity)
   }

   return(
      <>
         <div className='card-detail-container' >
            <img className='card-detail-img' src={pictureUrl} alt={title} />
            <h3 className='card-detail-title' >{title}</h3>
            <p className='card-detail-description' >Descripción: {description}</p>
            <p className='card-detail-autor'>Autor: {autor}</p>
            <p className='card-detail-editorial'>Editorial: {editorial}</p>
            <p className='card-detail-category' >Category: {category}.-</p>
            <p className='' >Stock: {stock} </p>
            {
               quantityAdded > 0 ? ( <Link to='/cart' ><button className='button-item-detail' >Finalizar compra</button></Link> ) : ( <ItemCount initial={0} itemStock={stock} id={id} onAdd={(quantity) => handleOnAdd(quantity)} /> )
            }
         </div>
      </>
   )
}