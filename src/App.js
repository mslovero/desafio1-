
import './App.css';



import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';



function App() {
  return (
    <div className="App ">
    <NavBar/>
    <ItemListContainer saludo={'Bienvenidos a PeperinaHome'}/>
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
