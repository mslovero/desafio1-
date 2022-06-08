import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../../components/ItemList/ItemList";
import {getFirestoreApp, collection, getDocs, query, where} from "../../Firebase/config";
import "../ItemListContainer/ItemListContainer.css"
//import Loader from "../../components/Loader/Loader"


export default function ItemListContainer({greeting}) {
  const [items,setItems] = useState([]);
  const [loader,setLoader] = useState(true);
  const { id } = useParams() 

useEffect(() => {
    const db = getFirestoreApp();
    const queryCollection = collection (db, 'items')
    if (!id) {
      getDocs(queryCollection)
      .then(resp => resp.docs.map(el => ({id: el.id, ...el.data()})))
      .then(data => data.sort((a, b) => {
          if (a.category > b.category) {
              return 1;
          }
          if (a.category < b.category) {
              return -1;
          }
          return 0;
      }))
      .then(sorted => setItems(sorted))
      .catch(err => console.log(err))
      .finally(() => setLoader(false))
  } else {
      const queryCollectionFilter = query(queryCollection, where('category','==',id));
      getDocs(queryCollectionFilter)
      .then(resp => setItems(resp.docs.map(el => ({id: el.id, ...el.data()}))))
      .catch(err => console.log(err))
      .finally(() => setLoader(false))
  }
},[id]);

return (
  <div className="itemListContainer">
      {loader?
          <loader/>:
          <ItemList items={items}/>}
  </div>
);
}
    /*getDocs (queryCollection)
    .then (resp => setItems( resp.docs.map(item => ( {id: item.id, ...item.data()}))))
    .catch(err => console.log(err))
    .finally(() => setLoader(false))
    },[id]);*/
  /*useEffect(() => {
      setTimeout(() => {
          fetch("/data/data.json")
          .then(response => response.json())
          .then(data => setItems(data))
          .catch(err => console.log(err))
          .finally(() => setLoader(false))
      }, 5000);
  },[]);*/


  


/*const ItemListContainer = ({saludo="saludo"}) => {
  return (
    <div className="saludo"> {saludo} </div>
   

  )
}*/

