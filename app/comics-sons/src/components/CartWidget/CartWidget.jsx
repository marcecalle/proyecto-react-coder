import { Link } from 'react-router-dom'
import bagIcon from './assets/bag_icon.svg'
import './CartWidget.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

export default function CartWidget() {

const { quantityInCart } = useContext(CartContext)



return(
      <>
         <Link to="/cart">
            <img className='cart-icon' src={bagIcon} alt="Cart image" />
         </Link>
         <p className='cart-number'>{quantityInCart()}</p>
      </>
   )
}