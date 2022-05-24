import { Link } from "react-router-dom"
import "../CardtWidget/CardtWidget.css"

const CartWidget = () => {
  return (
    <Link to= '/cart'>
    <>
       
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL8z1jnWoHN3kM0kv3hLqXcaOcmzlKAjEZlw&usqp=CAU" className="carrito w-20" alt="imagen"/>

   </>
   </Link>
  )
}
export default CartWidget