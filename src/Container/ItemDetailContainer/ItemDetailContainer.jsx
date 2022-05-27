import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import Loader from "../../components/Loader/Loader";


export default function ItemDetailContainer() {
    const [item,setItem] = useState({});
    const [loader,setLoader] = useState(true);
    const [setQuantityToAdd] = useState();

    const {id} = useParams();

    function onAdd(quantity, name) {
        setQuantityToAdd(quantity)
        console.log(`${quantity} unidad/es de ${name} agregada/s al pedido`)
    }

    useEffect(() => {
        setTimeout(() => {
            fetch("/data/data.json")
            .then(response => response.json())
            .then(itemsList => itemsList.find(el => el.id === id))
            .then(data => setItem(data))
            .catch(err => console.log(err))
            .finally(() => setLoader(false))
        }, 5000);
    },[id]);

    return (
        <div className="itemDetailContainer">
            {loader?
                <Loader/>:
                <ItemDetail item={item} onAdd={onAdd}/>}
        </div>
    );
}