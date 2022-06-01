
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

//import Item from "../Item/Item";


const Cart = () =>{
    const{ cartList, vaciarCarrito , removeItem, precioTotal, cantidadTotal } = useCartContext ()
    if (  ! cantidadTotal) {
        return (
            <div className="cart">
                <h1>Ud no hizo ningún pedido</h1>
                <Link to='/'>
                    <button>Volver al menú</button>
                </Link>
            </div> 
        )
    }
    

    
    return (
        <div className="cart">
            <h1>Tu Carrito</h1>
            <h3>Tu Pedido</h3>
            
            {cartList.map(prod => 
            <div key={prod.id}>  
               <li>
                {prod.name} - precio: {prod.price} - cantidad: {prod.quantity}
              </li>
              <button className = 'btn btn-outline-primary' onClick={() => removeItem (prod.id)}> x </button>
            </div>) }
            <h2> El precio total es: { precioTotal () } </h2>
            <button onClick ={ vaciarCarrito }>vaciar carrito</button> 
            
        </div>
    )
} 
export default Cart