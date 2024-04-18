import { useState } from "react"
import '../../index.css'

// eslint-disable-next-line react/prop-types
export default function CheckoutForm({ onConfirm }){

   const [name, setName] = useState("")
   const [email, setEmail] = useState("")
   const [phone, setPhone] = useState("")

   const handleSubmit = (e) => {
      e.preventDefault()
   
      const formData = {
         name, phone, email
      }
      
      onConfirm(formData)
   }

   return(
      <>
         <section className="form-wraper">
            <form className='input-wraper' onSubmit={handleSubmit}>
               <label className='form-text'>Nombre
                  <br /><input 
                     className="input"
                     type="text" 
                     value={name}
                     onChange={({target}) => setName(target.value)}
                     placeholder="Nombre"
                     />
               </label>
               <label className='form-text'>Teléfono
                  <br /><input
                     className="input"
                     type="phone"
                     value={phone}
                     onChange={({target}) => setPhone(target.value)}
                     placeholder="Teléfono"
                     />
               </label>
               <label className='form-text'>Email
                  <br /><input 
                     className="input"
                     type="email"
                     value={email}
                     onChange={({target}) => setEmail(target.value)}
                     placeholder="Email"
                  />
               </label>
               <button className="send-order-button" type='submit' >Enviar orden</button>
            </form>
         </section>
      </>
   )
}