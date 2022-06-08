import Item from "../Item/Item";
import "./ItemList.css"


export default function ItemList({items}) {
    return (
        <div className="itemList">
            return(
                
            {items.map((el) => <Item key={el.id} el={el}/>)}

            )
        </div>
    )
}