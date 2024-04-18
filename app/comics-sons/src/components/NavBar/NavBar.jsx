import '../../index.css'
import CartWidget from "../CartWidget/CartWidget"
import logoComicsSons from '../../assets/logo-comics-sons.svg'
import { Link } from 'react-router-dom'

export default function NavBar(){
   
   return(
      <>
         <header className='header'>
            <Link to='/'> 
               <img className='header__logo' src={logoComicsSons} alt="Logo comics sons" />
            </Link>
            <h1 className='header__title'>COMICS-SONS</h1>
            <nav className='header__nav-wraper'>
               <ul className='nav-wraper__links'>
                  <li className='nav-wraper__link'>
                     <Link className='nav-wraper__link-to' to='/nosotros' >Nosotros</Link>
                  </li>
                  <li className='nav-wraper__link'>
                     <Link className='nav-wraper__link-to' to='/' >Productos</Link>
                  </li>
                  <li className='nav-wraper__link'>
                     <Link className='nav-wraper__link-to' to='/contact' >Contacto</Link>
                  </li>
                  <CartWidget />
               </ul>
            </nav>
         </header>
      </>
   )
}