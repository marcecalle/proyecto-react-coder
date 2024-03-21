import Item from "../Item/Item";
import './ItemList.css'

// eslint-disable-next-line react/prop-types
export default function ItemList({products}) {   


   return(
      <>
         <div className='cards-container'>
            {
               // eslint-disable-next-line react/prop-types
               products.map (prod => <Item key={prod.id} {...prod} />)
            }
         </div>
      </>   
   )
}