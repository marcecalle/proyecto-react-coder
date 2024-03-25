const products = [
   {
      id: '01',
      title: 'Tomo 1',
      description: 'Acá va la descripción del producto.',
      price: '5500',
      pictureUrl: 'https://res.cloudinary.com/marcecalle/image/upload/v1710357678/imgComicsSons/oeganclxgdsqawcdndlv.png',
      category: 'manga',
      editorial: 'IVREA',
      autor: 'Koyoharu Gotouge',
      stock: 0,
   },

   {
      id: '02',
      title: 'Tomo 2',
      description: 'Acá va la descripción del producto.',
      price: '5500',
      pictureUrl: 'https://res.cloudinary.com/marcecalle/image/upload/v1710357679/imgComicsSons/jx6dmv5lu5i6cmxy54v6.png',
      category: 'manga',
      editorial: 'IVREA',
      autor: 'Koyoharu Gotouge',
      stock: 2,
   },

   {
      id: '03',
      title: 'Tomo 3',
      description: 'Acá va la descripción del producto.',
      price: '5500',
      pictureUrl: 'https://res.cloudinary.com/marcecalle/image/upload/v1710357680/imgComicsSons/ohrbmm5lpz5vriibp0ez.png',
      category: 'manga',
      editorial: 'IVREA',
      autor: 'Koyoharu Gotouge',
      stock: 5,
   },
   {
      id: '04',
      title: 'Tomo 4',
      description: 'Acá va la descripción del producto.',
      price: '5500',
      pictureUrl: 'https://res.cloudinary.com/marcecalle/image/upload/v1710357679/imgComicsSons/e8gyrhdihobz24m2nxny.png',
      category: 'manga',
      editorial: 'IVREA',
      autor: 'Koyoharu Gotouge',
      stock: 1,
   },
   {
      id: '05',
      title: 'Tomo 5',
      description: 'Acá va la descripción del producto.',
      price: '5500',
      pictureUrl: 'https://res.cloudinary.com/marcecalle/image/upload/v1710528867/imgComicsSons/pskgzwvnxbuhczjeqjkh.png',
      category: 'manga',
      editorial: 'IVREA',
      autor: 'Koyoharu Gotouge',
      stock: 1,
   },
   {
      id: '06',
      title: 'Tomo 6',
      description: 'Acá va la descripción del producto.',
      price: '5500',
      pictureUrl: 'https://res.cloudinary.com/marcecalle/image/upload/v1710528867/imgComicsSons/z7n9qyyx2fvptngzvey4.png',
      category: 'manga',
      editorial: 'IVREA',
      autor: 'Koyoharu Gotouge',
      stock: 10,
   },
   {
      id: '07',
      title: 'Tomo 10',
      description: 'Acá va la descripción del producto.',
      price: '5500',
      pictureUrl: 'https://res.cloudinary.com/marcecalle/image/upload/v1710528867/imgComicsSons/jheyse7cipggyp2lflea.png',
      category: 'manga',
      editorial: 'IVREA',
      autor: 'Koyoharu Gotouge',
      stock: 3,
   },
   {
      id: '08',
      title: 'Tomo 11',
      description: 'Acá va la descripción del producto.',
      price: '5500',
      pictureUrl: 'https://res.cloudinary.com/marcecalle/image/upload/v1710528868/imgComicsSons/oxetlyp8baqzaywt6e0a.png',
      category: 'manga',
      editorial: 'IVREA',
      autor: 'Koyoharu Gotouge',
      stock: 3,
   },
   {
      id: '09',
      title: 'Tomo 12',
      description: 'Acá va la descripción del producto.',
      price: '5500',
      pictureUrl: 'https://res.cloudinary.com/marcecalle/image/upload/v1710528868/imgComicsSons/y7imvunkkwqzsqwov0me.png',
      category: 'manga',
      editorial: 'IVREA',
      autor: 'Koyoharu Gotouge',
      stock: 3,
   },
   {
      id: '10',
      title: 'Tomo 13',
      description: 'Acá va la descripción del producto.',
      price: '5500',
      pictureUrl: 'https://res.cloudinary.com/marcecalle/image/upload/v1710528865/imgComicsSons/s7ysnbqnyq5poqesan61.png',
      category: 'manga',
      editorial: 'IVREA',
      autor: 'Koyoharu Gotouge',
      stock: 3,
   },
   {
      id: '11',
      title: 'Tomo 15',
      description: 'Acá va la descripción del producto.',
      price: '5500',
      pictureUrl: 'https://res.cloudinary.com/marcecalle/image/upload/v1710528866/imgComicsSons/mwcremlzo6io0dtjkge7.png',
      category: 'manga',
      editorial: 'IVREA',
      autor: 'Koyoharu Gotouge',
      stock: 3,
   },
   {
      id: '12',
      title: 'Tomo 16',
      description: 'Acá va la descripción del producto.',
      price: '5500',
      pictureUrl: 'https://res.cloudinary.com/marcecalle/image/upload/v1710528867/imgComicsSons/hnxufojnhxkebsanrhmg.png',
      category: 'manga',
      editorial: 'IVREA',
      autor: 'Koyoharu Gotouge',
      stock: 5,
   },
   {
      id: '13',
      title: 'Tomo 17',
      description: 'Acá va la descripción del producto.',
      price: '5500',
      pictureUrl: 'https://res.cloudinary.com/marcecalle/image/upload/v1710528868/imgComicsSons/a7gbommr9kiwvbcp3vbn.png',
      category: 'manga',
      editorial: 'IVREA',
      autor: 'Koyoharu Gotouge',
      stock: 2,
   },
   {
      id: '14',
      title: 'Tomo 19',
      description: 'Acá va la descripción del producto.',
      price: '5500',
      pictureUrl: 'https://res.cloudinary.com/marcecalle/image/upload/v1710528868/imgComicsSons/waj1qws4oeihxuciw34v.png',
      category: 'manga',
      editorial: 'IVREA',
      autor: 'Koyoharu Gotouge',
      stock: 6,
   },
   {
      id: '15',
      title: 'Superman: Believe',
      description: 'Acá va la descripción del producto.',
      price: '11500',
      pictureUrl: 'https://res.cloudinary.com/marcecalle/image/upload/v1710528866/imgComicsSons/dvejpmjfk6p2yaexycru.png',
      category: 'comic',
      editorial: 'DC comics',
      autor: 'Varios',
      stock: 7,
   },
   {
      id: '16',
      title: 'Adventures of Superman vol. 2',
      description: 'Acá va la descripción del producto.',
      price: '12900',
      pictureUrl: 'https://res.cloudinary.com/marcecalle/image/upload/v1710528865/imgComicsSons/lhe8zzmroalxbsnbrale.png',
      category: 'comic',
      editorial: 'DC comics',
      autor: 'Jt Krul',
      stock: 1,
   },
   {
      id: '17',
      title: 'Superman arriba en el cielo',
      description: 'Acá va la descripción del producto.',
      price: '11900',
      pictureUrl: 'https://res.cloudinary.com/marcecalle/image/upload/v1710528866/imgComicsSons/gurhmaqmtkmoudla3ytn.png',
      category: 'comic',
      editorial: 'Ovni Press',
      autor: 'Andy King Tom',
      stock: 2,
   },
   {
      id: '18',
      title: 'Avengers Omnibus vol. 1',
      description: 'Acá va la descripción del producto.',
      price: '12900',
      pictureUrl: 'https://res.cloudinary.com/marcecalle/image/upload/v1710528866/imgComicsSons/wf1gaihgrplnuyvxu4s9.png',
      category: 'comic',
      editorial: 'Marvel',
      autor: 'Jonathan Hickman',
      stock: 1,
   },
   {
      id: '19',
      title: 'Captain Marvel: Omnibus Vol. 1',
      description: 'Acá va la descripción del producto.',
      price: '90900',
      pictureUrl: 'https://res.cloudinary.com/marcecalle/image/upload/v1710528865/imgComicsSons/vcxrue0616vhgdlxoqzk.png',
      category: 'comic',
      editorial: 'Marvel',
      autor: 'Roy Thomas',
      stock: 2,
   },
   {
      id: '20',
      title: 'Thor Epic Collection',
      description: 'Acá va la descripción del producto.',
      price: '60300',
      pictureUrl: 'https://res.cloudinary.com/marcecalle/image/upload/v1710528866/imgComicsSons/cg027ahzfinejuvarjqi.png',
      category: 'comic',
      editorial: 'Marvel',
      autor: 'Stan Lee',
      stock: 1,
   },
]

export const getProducts = () => {
   return new Promise((resolve) => {
      setTimeout(() => {
         resolve(products);
      }, 2000);
   })
}

export const getProduct = (id) => {
   return new Promise((resolve)=> {
      setTimeout(() => {
         resolve(products.find(prod => prod.id === id));
      }, 1000);
   })
}

export const getProductsByCat = (category) => {
   return new Promise((resolve)=> {
      setTimeout(() => {
         resolve(products.filter(prod => prod.category === category
            ));
      }, 1000);
   })
}