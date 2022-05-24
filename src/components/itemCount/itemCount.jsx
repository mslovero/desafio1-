import { useState}  from 'react';
import './ItemCount.css';


export default function ItemCount({item, stock, initial, onAdd, handleInputType}) {
    const [quantity, setQuantity] = useState(initial);

    function increase() {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        }
    }

    function decrease() {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    function addToCart() {
        onAdd(quantity, item.name);
        handleInputType ();
    }

    return (
        <div className="ItemCount">
            <button id='less' className="itemCount__minusBtn" onClick={decrease}>-</button>
            <span className="itemCount__quantity">{quantity}</span>
            <button id='plus' className="ItemCount__plusBtn" onClick={increase}>+</button>
            <button className="ItemCount__addToCartBtn" onClick={addToCart}> Agregar al carrito</button>
        </div>
    );
}