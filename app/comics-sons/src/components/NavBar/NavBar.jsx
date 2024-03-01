import CartWidget from "../CartWidget/CartWidget";

export default function NavBar(){
   return(
      <>
         <ul>
            <li><a href="#">Nosotros</a></li>
            <li><a href="#">Productos</a></li>
            <li><a href="#">Contacto</a></li>
         </ul>
         <CartWidget />
      </>
   )
}