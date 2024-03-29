import './App.css'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import NavBar from "./components/NavBar/NavBar"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AboutUsContainer from './components/AboutUs/AboutUsContainer'
import ContactContainer from './components/ContactContainer/ContactContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

function App() {
  
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path='/nosotros' element={<AboutUsContainer />} />
          <Route exact path='/' element={<ItemListContainer greeting='Bienvenidos'/>} />
          <Route exact path='/category/:categoryId' element={ <ItemListContainer greeting='Bienvenidos' />} />
          <Route exact path='/item/:itemId' element={ <ItemDetailContainer />} />
          <Route exact path='/contact' element={<ContactContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App