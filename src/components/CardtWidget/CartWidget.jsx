import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import "../CardtWidget/CardtWidget.css"

const CartWidget = () => {
  const {cantidadTotal} = useCartContext
  return (
    <Link to= '/cart' style={{pointerEvents: ! cantidadTotal ? 'none' : ''}}>
    <div className='cartWidget' style={{opacity: ! cantidadTotal ? '2' : '1'}}>
       
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL8z1jnWoHN3kM0kv3hLqXcaOcmzlKAjEZlw&usqp=CAU" className="carrito w-20" alt="imagen"/>

   </div>
   </Link>
  )
}
export default CartWidget