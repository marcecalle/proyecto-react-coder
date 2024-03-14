import { useParams } from "react-router-dom";
import { useState, useEffect } from "react"
import { getProduct } from "../../asyncMock/asyncMock";

export default function ItemDetailContainer() {

   const { prodId } = useParams();

   const [product, setProduct] = useState({})

   useEffect(() => {
      setProduct(getProduct(prodId))
   }, [prodId])

   return (
      <>
         <section className='item-detail-container'>
            <h3 className='item-detail-title' >Detalle producto {prodId}</h3>
            <div className='card-container' >
               <h3 className='card-title' >{product.id}</h3>
               <img className='card-img' src={product.pictureUrl} alt="" />
               <p className='card-description' >{product.description}</p>
               <p>Category {product.category}.-</p>
            </div>
         </section>
      </>
   )
}