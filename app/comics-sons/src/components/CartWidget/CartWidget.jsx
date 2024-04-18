import { Link } from 'react-router-dom'
import bagIcon from './assets/bag_icon.svg'
import '../../index.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

export default function CartWidget() {

const { quantityInCart } = useContext(CartContext)



return(
      <>
         <li className='nav-wraper__link'>
            <Link className='nav-wraper__link-to' to="/cart">
               <img className='link-to__bag-icon' src={bagIcon} alt="Cart image" />
            </Link>
         </li>
         <li className='nav-wraper__link'>
            {quantityInCart()}
         </li>
      </>
   )
}