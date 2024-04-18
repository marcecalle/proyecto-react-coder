import ItemList from '../ItemList/ItemList';
import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
// import { getProducts, getProductsByCat } from '../../asyncMock/asyncMock';
import { getProducts, getProductsByCat } from '../../firebase/firebase'
import '../../index.css'

// eslint-disable-next-line react/prop-types
export default function ItemListContainer({greeting}){

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
         <section className='main-wraper'>
            <h3 className='main-wraper__title' >{greeting}</h3>
            <section className='category-wraper'>
               <h5 className='category-title'>categorias</h5>
               <div className='buttons-wraper'>
                  <button className='button-category' onClick={()=>handleClickManga('manga')}>manga</button>
                  <button className='button-category' onClick={()=>handleClickComic('comic')}>comic</button>
               </div>
               <ItemList products={products} />
            </section>
         </section>
      </>
   )
}