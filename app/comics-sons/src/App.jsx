import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import NavBar from "./components/NavBar/NavBar"

function App() {
  
  return (
    <>
      <header>
        <h1>COMICS SONS</h1>
      </header>
      <nav>
        <NavBar />
      </nav>
      <ItemListContainer greeting='Bienvenido a nuestros COMICS'/>
    </>
  )
}

export default App
