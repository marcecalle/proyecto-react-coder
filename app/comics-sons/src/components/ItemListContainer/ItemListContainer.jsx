// eslint-disable-next-line react/prop-types
export default function ItemListContainer({greeting}){
   
   const greetingStyles = {
      color: 'white',
      fontFamily: 'monospace',
      fontSize: '2rem'
   }
   
   return(
      <>
         <section>
            <h3 style={greetingStyles} >{greeting}</h3>
         </section>
      </>
   )
}