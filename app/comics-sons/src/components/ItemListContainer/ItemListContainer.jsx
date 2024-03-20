import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css'
import { useNavigate } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
export default function ItemListContainer({greeting}){
   
   const greetingStyles = {
      color: 'white',
      fontFamily: 'monospace',
      fontSize: '2rem'
   };
   
   const navigate = useNavigate();

   const handleClickManga = () => {
      navigate(`/products/${'manga'}`);
   }

   const handleClickComic = () => {
      navigate(`/products/${'comic'}`);
   }

   return(
      <>
         <h3 className='items-container-title' style={greetingStyles} >{greeting}</h3>
         <section className='items-container'>
            <h5 className='category-title'>categorias</h5>
            <div className='buttons-container'>
               <button className='button-category-detail' onClick={handleClickManga}>manga</button>
               <button className='button-category-detail' onClick={handleClickComic}>comic</button>
            </div>
            <ItemList />
         </section>
      </>
   )
}