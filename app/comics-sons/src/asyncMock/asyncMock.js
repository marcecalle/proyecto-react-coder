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
   {
      id: '04',
      title: 'Tomo 4',
      description: 'Acá va la descripción del producto.',
      price: '5500',
      pictureUrl: '../../../public/assets/item-04.png',
      stock: '1',
   }
]

export const getProducts = () => {
   return new Promise((resolve) => {
      setTimeout(() => {
         resolve(products);
      }, 2000);
   })
}