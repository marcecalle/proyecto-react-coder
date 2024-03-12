import { useState, useEffect } from 'react'
import Item from "../Item/Item";
import './ItemList.css'
import { getProducts } from '../../asyncMock/asyncMock';

export default function ItemList() {   

   const [allProductos, setAllProductos] = useState([]);

   useEffect(() => {
      getProducts()
         .then((data) => setAllProductos(data))
         .catch((error) => console.log('Error: ' + error));
   }, []);

   return(
      <>
         <div className='cards-container'>
            <Item productos={allProductos}/>
         </div>
      </>   
   )
}