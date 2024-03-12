import ItemCount from '../ItemCount/ItemCount'
import './Item.css'

// eslint-disable-next-line react/prop-types
export default function Item({productos}) {

   return(
      <>
         {/* eslint-disable-next-line react/prop-types */}
         {productos.map((data)=> (
            <div className='card-container' key={data.id}>
                  <h3 className='card-title' >{data.id}</h3>
                  <img className='card-img' src={data.pictureUrl} alt="" />
                  <p className='card-description' >{data.description}</p>
                  <p>$ {data.price}.-</p>
                  <ItemCount itemStock={data.stock} />
            </div>
         ))}
      </>
   )
}