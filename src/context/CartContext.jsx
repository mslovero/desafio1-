import {createContext, useContext, useState} from 'react'

const CartContext = createContext ([])

export const useCartContext = () => useContext (CartContext)

const CartContextProvider = ({children}) =>{
    const [cartList, setCartList] = useState([])
    //Acá estados y funciones G
    function addToCart(item){
        const index = cartList.findIndex(product => product.id === item.id)
        if (index !== -1) {
            const cantidadVieja = cartList[index].cantidad
            const newCart = cartList.filter (prod => prod.id !== item.id)
            item.cantidad += cantidadVieja
            setCartList ([...newCart, item])
            //cartList[index].cantidad  += cantidadVieja
            //setCartList ([...cartList])
        }else{
            setCartList([
                ...cartList,
                item
            ])
        }

    }

    const removeItem =(id) =>{
        setCartList (cartList.filter(prod => prod.id !== id))
    }
    const cantidadTotal = () => {
        return cartList.reduce((contador, prod) => contador += prod.quantity, 0)
    }
    const precioTotal = () =>{
        return cartList.reduce((contador, prod) => contador + (prod.quantity * prod.price), 0)
    }
    const vaciarCarrito = () =>{
        setCartList ([])
    }

    return(
        <CartContext.Provider value ={{
            cartList,
            addToCart,
            removeItem,
            cantidadTotal,
            precioTotal,
            vaciarCarrito
         }} >

         {children}
        </CartContext.Provider>
        
    )
 }

export default CartContextProvider