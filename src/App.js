
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import imgPresentacion from'./components/ItemListContainer/assets/images/cassete-n2.webp';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Route,Routes} from "react-router-dom"
import CategoryListContainer from './components/Categories/CategoryListContainer';




function App() { 

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <>
          <NavBar/>
          <ItemListContainer 
          greeting1 ={'Calefactores a Leña de Alto Rendimiento'}
          imgPresentacion={imgPresentacion}
          />
          </>
          
          }/>
        <Route path='/category/:category' element={
          <>
          <NavBar/>
          <CategoryListContainer/>
          </>
          }/>
          <Route path='/item/:idProduct' 
            element={
            <>
              <NavBar/>
              <ItemDetailContainer />
            </>
            }/>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
