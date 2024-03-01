import bagIcon from './assets/bag_icon.svg'
import './CartWidget.css'
export default function CartWidget(){
   return(
      <>
         <a href="#"><img src={bagIcon} alt="Cart image" /></a>
         <span>2</span>
      </>
   )
}