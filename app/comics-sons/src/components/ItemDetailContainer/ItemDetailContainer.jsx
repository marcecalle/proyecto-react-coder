import '../../index.css'
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react"
import { getProductById } from "../../firebase/firebase";
import ItemDetail from '../ItemDetail/ItemDetail';

export default function ItemDetailContainer() {

   const { itemId } = useParams();

   const [product, setProduct] = useState(null)

   useEffect(() => {

      let ignore = false;

      const asyncFunc = getProductById
      
      !ignore && asyncFunc(itemId)
         .then((data) => setProduct(data))
         .catch((error) => console.log('Error: ' + error))

         return () => {
            ignore = true;
         }

   }, [itemId])
   
   return (
      <>
         <section className='main-wraper'>
            <h3 className='main-wraper__title' >Detalle del producto</h3>
               <ItemDetail  {...product}/>
         </section>
      </>
   )
}