import bagIcon from './assets/bag_icon.svg'
import './CartWidget.css'

export default function CartWidget(){

   return(
      <>
         <a href="#">
            <img className='cart-icon' src={bagIcon} alt="Cart image" />
         </a>
         <span className='cart-number'>2</span>
      </>
   )
}