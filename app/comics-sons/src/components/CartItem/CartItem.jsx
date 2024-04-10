import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

// eslint-disable-next-line react/prop-types
export default function CartItem({id, title, price, pictureUrl}) {
   
   const { removeItem } = useContext(CartContext)

   return(
      <>       
         <div className='card-container' key={id}>
            <h4 className='card-title' >{title}</h4>
            <p className='card-price'>Precio Unitario $ {price}.-</p>
            <p> Subtotal $ {}</p>
            <img src={pictureUrl} alt="" />
            <button onClick={()=>removeItem(id)}>Eliminar item</button>
         </div>
      </>
   )
}