import { useState } from "react"
import ItemCount from "../ItemCount/ItemCount"

// eslint-disable-next-line react/prop-types
export default function ItemDetail({ pictureUrl, title, description, autor, editorial, category, stock, id, initial }) {

   
   
   

   return(
      <>
         <div className='card-detail-container' >
            <img className='card-detail-img' src={pictureUrl} alt={title} />
            <h3 className='card-detail-title' >{title}</h3>
            <p className='card-detail-description' >Descripción: {description}</p>
            <p className='card-detail-autor'>Autor: {autor}</p>
            <p className='card-detail-editorial'>Editorial: {editorial}</p>
            <p className='card-detail-category' >Category: {category}.-</p>
            <ItemCount initial={1} itemStock={stock} id={id} onAdd={handleOnAdd}/>
         </div>
      </>
   )
}