import './ItemDetailContainer.css'
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react"
import { getProduct } from "../../asyncMock/asyncMock";

export default function ItemDetailContainer() {

   const { id } = useParams();

   const [product, setProduct] = useState({})

   useEffect(() => {
      setProduct(getProduct(id))
   }, [id])

   return (
      <>
         <section className='item-detail-container'>
            <h3 className='item-detail-title' >Detalle producto</h3>
            <div className='card-detail-container' >
               <img className='card-detail-img' src={product.pictureUrl} alt={product.title} />
               <h3 className='card-detail-title' >{product.title}</h3>
               <p className='card-detail-description' >Descripción: {product.description}</p>
               <p className='card-detail-autor'>Autor: {product.autor}</p>
               <p className='card-detail-editorial'>Editorial: {product.editorial}</p>
               <p className='card-detail-category' >Category: {product.category}.-</p>
            </div>
         </section>
      </>
   )
}