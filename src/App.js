
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import imgPresentacion from'./components/ItemListContainer/assets/images/cassete-n2.webp';
import ItemCount from './components/ItemCount/ItemCount';




function App() { 

  return (
    <div className="App">
      <NavBar  />
      <ItemListContainer 
        greeting1 ={'Lepen - Calefactores a Leña de Alto Rendimiento'}
        greeting2={'... Bienvenidos'}
        imgPresentacion={imgPresentacion}
        />
        <div className='itemCount_Container'>
            <ItemCount
              stock={10} 
              initial={1}
              onAdd={(quantity)=>{ console.log('Cantidad Agregada ', quantity)}}
              />
        </div>
    </div>
  );
}

export default App;
