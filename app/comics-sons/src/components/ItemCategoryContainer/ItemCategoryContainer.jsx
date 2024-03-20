import { getProductsByCat } from '../../asyncMock/asyncMock';
import { useEffect, useState } from 'react'
import ItemsCategory from '../ItemsCategory/ItemsCategory';
import { useParams } from 'react-router-dom'
import './ItemCategoryContainer.css'

export default function ItemCategoryContainer() {

   const { category } = useParams()
   
   const [productsByCat, setProductsByCat] = useState([])

   useEffect(() => {
      setProductsByCat(getProductsByCat(category))  
   }, [category])

   return(
      <>
         <main className='main-category-container'>
               <h3 className='items-category-title'>Categoría: {category}</h3>
            <section className='items-category-container'>
               <ItemsCategory productsCategory={productsByCat} />
            </section>
         </main>
      </>
   )
}
