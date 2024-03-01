import bagIcon from './assets/bag_icon.svg'

export default function CartWidget(){
   return(
      <>
         <div>
            <img src={bagIcon} alt="Cart image" />
            <span>2</span>
         </div>
      </>
   )
}