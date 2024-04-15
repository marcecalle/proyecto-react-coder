import { useContext } from 'react'
import './Cart.css'
import { CartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'

export default function Cart() {
   
   const { cart, clearCart } = useContext(CartContext)

   return(
      <>
      <section className='cart-container'>
         <h3 className='cart-title' >Detalle Carrito</h3>
         <div className='cards-container'>
            {
               cart ? (
               // eslint-disable-next-line react/prop-types
               cart.map (prod => <CartItem key={prod.id} {...prod} />)) : ( <Link to={'/'}>Productos</Link>)
            }
         </div>
         <button className='button-item-detail' onClick={()=>clearCart()} >Vaciar carrito</button>
      </section>
      </>
   )
}