

import ItemCount from "../ItemCount/itemCount"
import BuyButtons from "../BuyButtons/BuyButtons"
import { useState } from "react"
import { useCartContext } from "../../context/CartContext"




export default function ItemDetail  ({item}){
    const [inputType, setInputType] = useState ('itemCount')
    const {addToCart} =  useCartContext ()

    function onAdd(quantity) {
        addToCart ({...item, quantity})
        setInputType('buyButtons');
    }



    return (
        <div className="itemDetail">
            <img className="itemDetail__img" src={item.img} alt="" />
            <div className='itemDetail__info'>
                <h4 className="itemDetail__title">{item.name}</h4>
                <p className="itemDetail__detail">{item.detail}</p>
                {inputType === 'itemCount' ?
                    <ItemCount item={item} initial={1} stock={10} onAdd={onAdd}/>:
                    <BuyButtons/>}
            </div>
        </div>
    );
}
