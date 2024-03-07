import Item from "../Item/Item";
import './ItemList.css'

export default function ItemList() {

   const products = [
      {
         id: '01',
         title: 'Tomo 1',
         description: 'Acá va la descripción del producto.',
         price: '5500',
         pictureUrl: 'https://images.cdn1.buscalibre.com/fit-in/360x360/33/c7/33c7fb4fa71eef7cb0b6cef5f7ad5b14.jpg',
      },

      {
         id: '02',
         title: 'Tomo 2',
         description: 'Acá va la descripción del producto.',
         price: '5500',
         pictureUrl: 'https://images.cdn1.buscalibre.com/fit-in/360x360/85/bc/85bc2828c43e432f31908e5632d476f4.jpg',
      },

      {
         id: '03',
         title: 'Tomo 3',
         description: 'Acá va la descripción del producto.',
         price: '5500',
         pictureUrl: '../Item/assets/item-03.png',
      },
   ]

   return(
      <>
         <div className='cards-container'>
            <Item picture     = {products[0].pictureUrl}
                  description = {products[0].description}
                  title       = {products[0].title}
                  price       = {products[0].price}/>
            <Item picture     = {products[1].pictureUrl}
                  description = {products[1].description}
                  title       = {products[1].title}
                  price       = {products[1].price}/>
            <Item picture     = {products[2].pictureUrl}
                  description = {products[2].description}
                  title       = {products[2].title}
                  price       = {products[2].price}/>
         </div>
      </>   
   )
}