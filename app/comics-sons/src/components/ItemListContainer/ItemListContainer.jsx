import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css'

// eslint-disable-next-line react/prop-types
export default function ItemListContainer({greeting}){
   
   const greetingStyles = {
      color: 'white',
      fontFamily: 'monospace',
      fontSize: '2rem'
   };
   
   return(
      <>
         <section className='items-container'>
            <h3 className='items-container-title' style={greetingStyles} >{greeting}</h3>
            <ItemList />
         </section>
      </>
   )
}