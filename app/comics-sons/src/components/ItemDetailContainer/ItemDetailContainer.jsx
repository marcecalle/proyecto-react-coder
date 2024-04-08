import './ItemDetailContainer.css'
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react"
import { getProduct } from "../../asyncMock/asyncMock";
import ItemDetail from '../ItemDetail/ItemDetail';

export default function ItemDetailContainer() {

   const { itemId } = useParams();

   const [product, setProduct] = useState(null)

   useEffect(() => {

      let ignore = false;

      !ignore && getProduct(itemId)
         .then((data) => setProduct(data))
         .catch((error) => console.log('Error: ' + error))

         return () => {
            ignore = true;
         }

   }, [itemId])
   
   return (
      <>
         <section className='item-detail-container'>
            <h3 className='item-detail-title' >Detalle producto</h3>
               <ItemDetail  {...product}/>
         </section>
      </>
   )
}