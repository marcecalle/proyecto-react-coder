import { useContext, useState } from "react"
import CheckoutForm from "../CheckoutForm/CheckoutForm"
import { CartContext } from "../../context/CartContext"
import './Checkout.css'
import { sendOrder } from "../../firebase/firebase"
import { Timestamp } from "firebase/firestore"

export default function Checkout(){

   const { cart, total, clearCart } = useContext(CartContext)

   const [orderId, setOrderId] = useState('')
   const [loading, setLoading] = useState(false)


      const addOrder = async ({name, email, phone}) => {
         
         setLoading(true)

         try{
            const orderData = {
               buyer: {
                  name,
                  email,
                  phone
               },
               items: cart,
               total: total(),
               date: Timestamp.fromDate(new Date())
            }
   
            const order = await sendOrder(orderData)
            
            setOrderId(order)

         }  catch (error) {
            console.log(error)
         } finally {
            setLoading(false)
            clearCart()
         }
      }

      if(loading) {
         return <h1 className="order-title">Generando orden</h1>
      }
      
      if(orderId){
         return <h1 className="order-title">Orden: {orderId}</h1>
      }
   
   return(
      <>
         <section className="checkout-container">
            <h3 className='checkout-title' >Checkout</h3>
            {
               cart == '' ? <p>El Carrito está vacío</p> : <CheckoutForm onConfirm={addOrder} />
            }
         </section>
      </>
   )
}