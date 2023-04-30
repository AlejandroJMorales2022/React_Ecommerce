
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import imgPresentacion from'./components/ItemListContainer/assets/images/cassete-n2.webp';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';





function App() { 

  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer 
        greeting1 ={'Lepen - Calefactores a Leña de Alto Rendimiento'}
        imgPresentacion={imgPresentacion}
        />
        <ItemDetailContainer/>
    </div>
  );
}

export default App;
