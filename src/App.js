
import './App.css';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import NavBar from './components/commons/NavBar/NavBar';
import imgPresentacion from './pages/ItemListContainer/assets/images/cassete-n2.webp';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import CategoryListContainer from './pages/Categories/CategoryListContainer';
import { CartProvider } from './context/CartContext';
import { Cart } from './pages/Cart/Cart';
import './services/firebase/firebaseConfig'
import { Order } from './pages/Order/Order';
import { ProductsProvider } from './context/ProductsContext';
import { Footer } from './components/commons/Footer/Footer';
import Login from './components/AuthUser/Login';
import Register from './components/AuthUser/Register';
import RecoverPassword from './components/AuthUser/RecoverPass';
import { AuthProvider } from './context/authContext';
import { ClientProvider } from './context/clientContext';
import { UserAccount } from './pages/UserAccount/UserAccount';





function App() {

  return (

    <BrowserRouter>
      <AuthProvider>
        <ClientProvider>
          <ProductsProvider>
            <CartProvider>
              <NavBar />
              <Routes>
                <Route path='/' element={
                  <ItemListContainer
                    greeting1={'Calefactores a Leña de Alto Rendimiento'}
                    imgPresentacion={imgPresentacion} />
                } />
                <Route path='/category/:category' element={<CategoryListContainer />} />
                <Route path='/item/:idProduct' element={<ItemDetailContainer />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/order' element={<Order />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/recoverPass' element={<RecoverPassword />} />
                <Route path='/userAccount' element={<UserAccount />} />
              </Routes>
              <Footer />
            </CartProvider>
          </ProductsProvider>
        </ClientProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
