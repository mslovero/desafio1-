import { useCartContext } from "../../context/CartContext";
//import Item from "../Item/Item";


const Cart = () =>{
    const{ cartList, vaciarCarrito } = useCartContext ()

    
    return (
        <div className="cart">
            <h1>Cart </h1>
            <h3>Tu Pedido</h3>
            {cartList.map(el => <li>  {el.id}  price: {el.price}  cantidad: {el.quantity}</li> )}
            
            <button onClick ={vaciarCarrito}>vaciar carrito</button> 
        </div>
    )
} 
export default Cart