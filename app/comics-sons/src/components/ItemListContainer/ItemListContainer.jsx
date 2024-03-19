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
         <main className='main-container'>
            <section className='items-container'>
               <h3 className='items-container-title' style={greetingStyles} >{greeting}</h3>
               <ItemList />
            </section>
            <aside className='category-container'>
               <button>manga</button>
               <button>comic</button>
            </aside>
         </main>
      </>
   )
}