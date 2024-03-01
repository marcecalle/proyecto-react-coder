import logoComicsSons from './assets/logo-comics-sons.svg'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import NavBar from "./components/NavBar/NavBar"
import './App.css'

function App() {
  
  return (
    <>
      <header>
        <img src={logoComicsSons} alt="Logo comics sons" />
        <h1>COMICS SONS</h1>
        <NavBar />
      </header>
      <ItemListContainer greeting='Bienvenido'/>
    </>
  )
}

export default App
