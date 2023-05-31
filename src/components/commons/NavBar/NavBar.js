import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';
import logoLepen from './assets/images/lepen_blanco.png';
import imgSearch from '../../../assets/img/icons/search.png'
import CartWidget from '../../basics/CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useFirebase } from '../../../services/hooks/useFirebase/useFirebase';
import { SearchBar } from '../SearchBar/SearchBar';
import { useProductsContext } from '../../../hooks/useProductsContext/useProductsContext';


function NavBar() {

    const { getCategories, categories } = useFirebase();
    const [flagSearch, setFlagSearch] = useState(false);
    const {page}= useProductsContext();


    useEffect(() => {
        getCategories();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <>
            <div className='container-fluid d-flex justify-content-center'>
                <Navbar className='navbarContainer' bg="light" expand="md">

                    <Container className='container-fluid navbarContenedor'>
                        <div className='imgLogo'>
                            <Link to={'/'}><img src={logoLepen} height={40} alt="logo Lepen" /></Link>
                        </div>
                        <div className="cartContainer d-flex justfy-content-center">
                            <Link to='/cart' className="Option btnPurchase rounded m-0 p-0"><CartWidget /></Link>
                        </div>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ulContenedor">
                                <NavLink to={'/'} className='nav-link'>Home</NavLink>
                                <NavDropdown title="Productos" id="basic-nav-dropdown">
                                    {/*  Traer Categorias y Mapearlas para conformar el menu */}
                                    {categories.map(cat => (
                                        <NavLink key={cat.key} to={`/category/${cat.name}`} className='nav-link dropdown-item'>{cat.name}</NavLink>
                                    ))}
                                </NavDropdown>
                                <NavLink to={''} className='nav-link'>Ventajas</NavLink>
                                <NavLink to={''} className='nav-link'>Contacto</NavLink>
                            </Nav>
                        </Navbar.Collapse>
                        <div className='imgSearch'>
                            {(page==='ItemListContainer') &&
                                <div><img src={imgSearch} height={30} alt="icono de busqueda" onClick={()=>setFlagSearch(!flagSearch)} /></div>
                            }
                            
                        </div>
                    </Container>
                </Navbar>

            </div>
            <div className='container text-center'>
                {flagSearch && <SearchBar /> }
            </div>
        </>
    );
}

export default NavBar;