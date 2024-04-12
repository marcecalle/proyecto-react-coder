import { Link } from 'react-router-dom'
import bagIcon from './assets/bag_icon.svg'
import './CartWidget.css'

export default function CartWidget(){

   return(
      <>
         <Link to="/cart">
            <img className='cart-icon' src={bagIcon} alt="Cart image" />
         </Link>
         <span className='cart-number'>2</span>
      </>
   )
}