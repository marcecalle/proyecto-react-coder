import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'
export default function NavBar(){
   return(
      <>
         <nav>
            <ul>
               <li><a href="#">Nosotros</a></li>
               <li><a href="#">Productos</a></li>
               <li><a href="#">Contacto</a></li>
               <CartWidget />
            </ul>
         </nav>
      </>
   )
}