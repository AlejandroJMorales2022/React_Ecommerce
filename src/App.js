
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import imgPresentacion from'./components/ItemListContainer/assets/images/cassete-n2.webp';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Route,Routes} from "react-router-dom"




function App() { 

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <>
          <NavBar/>
          <ItemListContainer 
          greeting1 ={'Lepen - Calefactores a Leña de Alto Rendimiento'}
          imgPresentacion={imgPresentacion}
          />
          </>
          
          }/>
        <Route path='/components/ItemDetailContainer' element={
          <>
          <NavBar/>
          <ItemDetailContainer/>
          </>
          }/>
          <Route path='/components/ItemDetailContainer/:idProducts' 
            element={
            <>
              <NavBar/>
              <ItemDetailContainer id={7} />
            </>
            }/>
{/*         <div className="App">
        
        
          
      </div> */}
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
