
import './App.css';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import NavBar from './components/commons/NavBar/NavBar';
import imgPresentacion from'./pages/ItemListContainer/assets/images/cassete-n2.webp';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Route,Routes} from "react-router-dom"
import CategoryListContainer from './pages/Categories/CategoryListContainer';
import { CartProvider } from './context/CartContext';
import { Cart } from './pages/Cart/Cart';
import './services/firebase/firebaseConfig'
import { Order } from './pages/Order/Order';
import { ProductsProvider } from './context/ProductsContext';
import { Footer } from './components/commons/Footer/Footer';





function App() { 

  return (
    
    <BrowserRouter>
    <ProductsProvider>
      <CartProvider>
        <NavBar/>
        <Routes>
          <Route path='/' element={          
            <ItemListContainer 
              greeting1 ={'Calefactores a Leña de Alto Rendimiento'}
              imgPresentacion={imgPresentacion}/>     
            }/>
          <Route path='/category/:category' element={ <CategoryListContainer/> }/>
          <Route path='/item/:idProduct' element={ <ItemDetailContainer /> }/>
          <Route path='/cart' element={ <Cart /> }/>
          <Route path='/order' element={ <Order /> }/>
        </Routes>
        <Footer />
      </CartProvider>
      </ProductsProvider>
    </BrowserRouter>
  );
}

export default App;
