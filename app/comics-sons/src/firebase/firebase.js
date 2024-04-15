// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyDcjMoQvmRo5JWzb5NEzgjgB-ivIBVLp50",
   authDomain: "comics-sons.firebaseapp.com",
   projectId: "comics-sons",
   storageBucket: "comics-sons.appspot.com",
   messagingSenderId: "635648408908",
   appId: "1:635648408908:web:6a63af252f5a2820d2a3e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

// traer productos 
export async function getProducts(){
   const response = await getDocs(collection(db, 'items'));
   const listProducts = []
   response.forEach(doc => listProducts.push({id: doc.id, ...doc.data()}))
   return listProducts;
}

export async function getProductById(itemId){

   const snap = await getDoc(doc(db, 'items', itemId))
   if(snap.exists()){
      const productById = {id: itemId, ...snap.data()}
      return productById;
   } else {
      return Promise.reject(Error('No hay item'))
   }
}

// export async function getProductById(itemId){
//    const q = query(collection(db, 'items'), where('id', '==', itemId));
//    const querySnapshot = await getDocs(q);
//    const productById = []
//    querySnapshot.forEach(doc => productById.push({id: doc.id, ...doc.data()}))
//    return productById;
// }

export async function getProductsByCat(category){
   const q = query(collection(db, 'items'), where('category', '==', category));
   const querySnapshot = await getDocs(q);
   const listProdsByCat = [];
   querySnapshot.forEach(doc => listProdsByCat.push({id: doc.id, ...doc.data()}))
   return listProdsByCat;
}