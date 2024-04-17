import { useState } from "react"

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
         <section>
            <form onSubmit={handleSubmit}>
               <label >Nombre
                  <input 
                     type="text" 
                     value={name}
                     onChange={({target}) => setName(target.value)}
                     placeholder="Nombre"
                     />
               </label>
               <label >Teléfono
                  <input 
                     type="phone"
                     value={phone}
                     onChange={({target}) => setPhone(target.value)}
                     placeholder="Teléfono"
                     />
               </label>
               <label >Email
                  <input 
                     type="email"
                     value={email}
                     onChange={({target}) => setEmail(target.value)}
                     placeholder="Email"
                  />
               </label>
               <button type='submit' >Enviar orden</button>
            </form>
         </section>
      </>
   )
}