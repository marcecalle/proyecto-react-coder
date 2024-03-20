import './App.css'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import NavBar from "./components/NavBar/NavBar"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AboutUsContainer from './components/AboutUs/AboutUsContainer'
import ContactContainer from './components/ContactContainer/ContactContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemCategoryContainer from './components/ItemCategoryContainer/ItemCategoryContainer'

function App() {
  
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<AboutUsContainer />} />
          <Route exact path='/products' element={<ItemListContainer greeting='Bienvenidos'/>} />
          <Route exact path='/contact' element={<ContactContainer />} />
          <Route exact path='/item/:id' element={ <ItemDetailContainer />} />
          <Route exact path='/products/:category' element={ <ItemCategoryContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
