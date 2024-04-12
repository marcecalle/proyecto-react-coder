import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

// eslint-disable-next-line react/prop-types
export default function CartItem({id, title, price, pictureUrl}) {
   
   const { removeItem } = useContext(CartContext)

   return(
      <>       
         <div className='card-cart-container' key={id}>
            <h4 className='card-cart-title' >{title}</h4>
            <p className='card-cart-price'>Precio Unitario $ {price}.-</p>
            <p className="card-cart-subtotal"> Subtotal $ {}</p>
            <img className="card-cart-image" src={pictureUrl} alt={title} />
            <button className="button-item-detail" onClick={()=>removeItem(id)}>Eliminar item</button>
         </div>
      </>
   )
}