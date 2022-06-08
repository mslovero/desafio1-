import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import Loader from "../../components/Loader/Loader";
import {getFirestoreApp, doc, getDoc} from "../../Firebase/config";


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
        const db = getFirestoreApp();
        const dbQuery = doc (db, 'items', '6HL1cpEEwwcKeDLHwUHz')
        getDoc(dbQuery)
        .then (resp => setItem ( { id: resp.id, ...resp.data() })  )
        .catch(err => console.log(err))
        .finally(() => setLoader(false))
        },[id]);

    
    return (
        <div className="itemDetailContainer">
            {loader?
                <Loader/>:
                <ItemDetail item={item} onAdd={onAdd}/>}
        </div>
    );
}