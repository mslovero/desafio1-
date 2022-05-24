import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../../components/ItemList/ItemList";
import "../ItemListContainer/ItemListContainer.css"


export default function ItemListContainer({greeting}) {
  const [items,setItems] = useState([]);
  const [loader,setLoader] = useState(true);
  const { id } = useParams() 

  useEffect(() => {
      setTimeout(() => {
          fetch("/data/data.json")
          .then(response => response.json())
          .then(data => setItems(data))
          .catch(err => console.log(err))
          .finally(() => setLoader(false))
      }, 5000);
  },[]);
  return (
      <div className="itemListContainer">
          <h1 className="itemListContainer__title" style={{color: "blue"}}>{greeting}</h1>
          {loader? <h2>Cargando...</h2>: <ItemList items={items} id={id} />}
      
      </div>
  );

  }


/*const ItemListContainer = ({saludo="saludo"}) => {
  return (
    <div className="saludo"> {saludo} </div>
   

  )
}*/

