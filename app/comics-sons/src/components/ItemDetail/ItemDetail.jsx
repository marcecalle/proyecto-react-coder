import ItemCount from "../ItemCount/ItemCount"
// eslint-disable-next-line react/prop-types
export default function ItemDetail({ pictureUrl, title, description, autor, editorial, category, stock, id }) {

   return(
      <>
         <div className='card-detail-container' >
            <img className='card-detail-img' src={pictureUrl} alt={title} />
            <h3 className='card-detail-title' >{title}</h3>
            <p className='card-detail-description' >Descripción: {description}</p>
            <p className='card-detail-autor'>Autor: {autor}</p>
            <p className='card-detail-editorial'>Editorial: {editorial}</p>
            <p className='card-detail-category' >Category: {category}.-</p>
            <ItemCount itemStock={stock} id={id} onAdd={(count) => console.log('Cantidad agregada al carrito', count)}/>
         </div>
      </>
   )
}