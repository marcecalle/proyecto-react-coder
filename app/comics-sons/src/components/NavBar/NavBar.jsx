import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget"
import logoComicsSons from '../../assets/logo-comics-sons.svg'
import { Link } from 'react-router-dom'

export default function NavBar(){
   
   return(
      <>
         <header className='header-container'>
            <img className='logo-img' src={logoComicsSons} alt="Logo comics sons" />
            <h1>COMICS SONS</h1>
            <nav>
               <ul className='header-links'>
                  <li className='header-link'><Link className='header-link_a' to='/' >Nosotros</Link></li>
                  <li className='header-link'><Link className='header-link_a' to='/products' >Productos</Link></li>
                  <li className='header-link'><Link className='header-link_a' to='/contact' >Contacto</Link></li>
                  <CartWidget />
               </ul>
            </nav>
         </header>
      </>
   )
}