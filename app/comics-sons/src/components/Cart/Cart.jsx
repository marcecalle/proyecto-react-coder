import { useContext } from 'react'
import '../../index.css'
import { CartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'

export default function Cart() {
   
   const { cart, clearCart, total } = useContext(CartContext)

   return(
      <>
      <section className='main-wraper'>
         <h3 className='main-wraper__title' >Detalle Carrito</h3>
         <section className='cart-wraper'>
            {
               cart ? (
               // eslint-disable-next-line react/prop-types
               cart.map (prod => <CartItem key={prod.id} {...prod} />)) : ( <Link to={'/'}>Productos</Link>)
            }
            {
            cart == '' ? (<p className='empty-cart-text' >El Carrito está vacío</p>) :
            <>
               <span className='cart-text__total'>Total del carrito: $ {total()}</span>
               <button className='delete-cart-button' onClick={()=>clearCart()} >Vaciar carrito</button>
               <Link className='checkout-button' to={'/checkout'}><button className='checkout-button'>Checkout</button></Link>
            </>
            }
         </section>
      </section>
      </>
   )
}