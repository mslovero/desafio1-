import { useEffect,useState } from "react"
import"../ItemListContainer/ItemListContainer.css"
import ItemList from "../ItemList/ItemList";


const products =[
{id: "01", categoria: "decoración", name:"silla de madera", price: "8000", img:'"../imagenes/living.jpg"'},
{id: "02", categoria: "decoración", name:"silla de madera nordica",  price: "9000", img: "../imagenes/living.jpg" },
{id: "03" , categoria:"decoracion",name: "juego de comedor", price:"80000", img:"../imagenes/living.jpg"},
{id: "04" , categoria:"decoracion",name: "juego de comedor 2", price:"90000", img:"../imagenes/living.jpg"},

];

const getFetch = new Promise ((resolve) => {
  setTimeout(() => {
      resolve(products);
  }, 2000);
})

export default function ItemListContainer({greeting}) {
  const [items,setItems] = useState([]);
  const [loader,setLoader] = useState(true);


  useEffect(() => {
      getFetch
      .then(res => setItems(res))
      .catch(err => console.log(err))
      .finally(() => setLoader(false))
  },[]);

  return (
      <div className="itemListContainer">
          <h1 className="itemListContainer__title" style={{color: "blue"}}>{greeting}</h1>
          {loader? <h2>Cargando...</h2>: <ItemList items={items} />}
      </div>
  );
}

/*const ItemListContainer = ({saludo="saludo"}) => {
  return (
    <div className="saludo"> {saludo} </div>
   

  )
}*/

