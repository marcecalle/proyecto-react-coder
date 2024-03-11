import Item from "../Item/Item";
import './ItemList.css'

export default function ItemList() {

   const products = [
      {
         id: '01',
         title: 'Tomo 1',
         description: 'Acá va la descripción del producto.',
         price: '5500',
         pictureUrl: '../../../public/assets/item-01.png',
         stock: '0',
      },

      {
         id: '02',
         title: 'Tomo 2',
         description: 'Acá va la descripción del producto.',
         price: '5500',
         pictureUrl: '../../../public/assets/item-02.png',
         stock: '2',
      },

      {
         id: '03',
         title: 'Tomo 3',
         description: 'Acá va la descripción del producto.',
         price: '5500',
         pictureUrl: '../../../public/assets/item-03.png',
         stock: '5',
      },
   ]

   return(
      <>
         <div className='cards-container'>
            <Item picture     = {products[0].pictureUrl}
                  description = {products[0].description}
                  title       = {products[0].title}
                  price       = {products[0].price}
                  stock       = {products[0].stock}/>
            <Item picture     = {products[1].pictureUrl}
                  description = {products[1].description}
                  title       = {products[1].title}
                  price       = {products[1].price}
                  stock       = {products[1].stock}/>
            <Item picture     = {products[2].pictureUrl}
                  description = {products[2].description}
                  title       = {products[2].title}
                  price       = {products[2].price}
                  stock       = {products[2].stock}/>
         </div>
      </>   
   )
}