import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import '../../index.css'

// eslint-disable-next-line react/prop-types
export default function CartItem({id, title, price, pictureUrl, quantity}) {
   
   const { removeItem } = useContext(CartContext)

   return(
      <>       
         <article className='card-cart-wraper' key={id}>
            <img className="card-cart-image" src={pictureUrl} alt={title} />
            <div className="card-cart-text">
               <h4 className='card-cart-title' >{title}</h4>
               <p className='card-cart-price'>Precio Unitario: $ {price}.-</p>
               <p className="card-cart-subtotal">Cant. {quantity} - Subtotal: $ {price * quantity}</p>
            </div>
            <button className="delete-item-button" onClick={()=>removeItem(id)}>Eliminar item</button>
         </article>
      </>
   )
}