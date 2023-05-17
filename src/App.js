
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import imgPresentacion from'./components/ItemListContainer/assets/images/cassete-n2.webp';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Route,Routes} from "react-router-dom"
import CategoryListContainer from './components/Categories/CategoryListContainer';
import { CartProvider } from './context/CartContext';




function App() { 

  return (
    
    <BrowserRouter>
      <CartProvider>
        <NavBar/>
        <Routes>
          <Route path='/' element={          
            <ItemListContainer 
            greeting1 ={'Calefactores a Leña de Alto Rendimiento'}
            imgPresentacion={imgPresentacion}/>     
            }/>
          <Route path='/category/:category' element={ <CategoryListContainer/> }/>
            <Route path='/item/:idProduct' 
              element={ <ItemDetailContainer /> }/>
              <Route path='/cart' element={                
                  <div className='d-flex justify-content-center pt-4'>
                    <p>Cart...</p>
                  </div>
              }/>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
