const products = [
   {
      id: '01',
      title: 'Tomo 1',
      description: 'Acá va la descripción del producto.',
      price: '5500',
      pictureUrl: 'https://res.cloudinary.com/marcecalle/image/upload/v1710357678/imgComicsSons/oeganclxgdsqawcdndlv.png',
      stock: '0',
   },

   {
      id: '02',
      title: 'Tomo 2',
      description: 'Acá va la descripción del producto.',
      price: '5500',
      pictureUrl: 'https://res.cloudinary.com/marcecalle/image/upload/v1710357679/imgComicsSons/jx6dmv5lu5i6cmxy54v6.png',
      stock: '2',
   },

   {
      id: '03',
      title: 'Tomo 3',
      description: 'Acá va la descripción del producto.',
      price: '5500',
      pictureUrl: 'https://res.cloudinary.com/marcecalle/image/upload/v1710357680/imgComicsSons/ohrbmm5lpz5vriibp0ez.png',
      stock: '5',
   },
   {
      id: '04',
      title: 'Tomo 4',
      description: 'Acá va la descripción del producto.',
      price: '5500',
      pictureUrl: 'https://res.cloudinary.com/marcecalle/image/upload/v1710357679/imgComicsSons/e8gyrhdihobz24m2nxny.png',
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