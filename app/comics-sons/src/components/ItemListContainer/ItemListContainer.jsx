import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css'
import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
// import { getProducts, getProductsByCat } from '../../asyncMock/asyncMock';
import { getProducts, getProductsByCat } from '../../firebase/firebase'

// eslint-disable-next-line react/prop-types
export default function ItemListContainer({greeting}){
   
   const greetingStyles = {
      color: 'white',
      fontFamily: 'monospace',
      fontSize: '2rem'
   };

   const [products, setProducts] = useState([]);

   const { categoryId } = useParams()

   useEffect(() => {

      let ignore = false;

      const asyncFunc = categoryId ? getProductsByCat : getProducts 

      !ignore && asyncFunc(categoryId)
         
         .then(response => {
            setProducts(response)
         })
         .catch(error => {
            console.error(error)
         })
      
      return () => {
         ignore = true;
      }
      
   }, [categoryId]);

   const navigate = useNavigate();

   const handleClickManga = (category) => {
      navigate(`/category/${category}`);
   }

   const handleClickComic = (category) => {
      navigate(`/category/${category}`);
   }

   return(
      <>
         <h3 className='items-container-title' style={greetingStyles} >{greeting}</h3>
         <section className='items-container'>
            <h5 className='category-title'>categorias</h5>
            <div className='buttons-container'>
               <button className='button-category-detail' onClick={()=>handleClickManga('manga')}>manga</button>
               <button className='button-category-detail' onClick={()=>handleClickComic('comic')}>comic</button>
            </div>
            <ItemList products={products} />
         </section>
      </>
   )
}