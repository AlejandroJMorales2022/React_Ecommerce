import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';
import logoLepen from './assets/images/lepen_blanco.png';
import imgSearch from '../../../assets/img/icons/search.png'
import CartWidget from '../../basics/CartWidget/CartWidget';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useFirebase } from '../../../services/hooks/useFirebase/useFirebase';
import { SearchBar } from '../SearchBar/SearchBar';
import { useProductsContext } from '../../../hooks/useProductsContext/useProductsContext';
import imgUser from '../../../assets/img/icons/user.png';
import imgAccount from '../../../assets/img/icons/account.png';
import imgLogout from '../../../assets/img/icons/logout.png';
import { useAuthContext } from '../../../hooks/useAuthContext/useAuthContext';



function NavBar() {

    const { getCategories, categories, getProducts } = useFirebase();
    const [flagSearch, setFlagSearch] = useState(false);
    const { page } = useProductsContext();
    const { logged, logOut, auth, setEmailAuth } = useAuthContext();
    const navigate = useNavigate()


    const handleLogin = () => {
        navigate('/login');
    }
    const handleMyAccount = () => {
        navigate('/userAccount');
    }
    const handleLogOut = () => {
        const logOutOk = logOut(auth)
        if (logOutOk) {
            setEmailAuth('')
            navigate('/')
        }
    }
    useEffect(() => {
        getCategories();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (
        <>
            <div className='container-fluid navbarContainer pt-3'>
                <div className='row d-flex justify-content-evenly'>
                    <div className='navBarContainer col-12 col-sm-6 col-md-7'>
                        <Navbar className='navBarContainer' expand="md">
                            <Container className='container-fluid navbarContenedor'>
                                <div className='imgLogo me-2'>
                                    <Link to={'/'} onClick={() => getProducts()}><img src={logoLepen} height={40} alt="logo Lepen" className='imgLogLepen' /></Link>
                                </div>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="ulContenedor">
                                        <NavLink to={'/'} className='nav-link' onClick={() => getProducts()} >Home</NavLink>
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

                            </Container>
                        </Navbar>
                    </div>

                    <div className='col-5 col-sm-6 col-md-5 '>
                        <div className='row d-flex justify-content-end align-items-center iconsContainer text-center'>
                            <div className="col-5 cartContainer d-flex justify-content-end text-center me-3">
                                <Link to='/cart' className='linkCart'><CartWidget /></Link>
                            </div>
                            <div className='col-5 colIcons'>
                                <div className='row d-flex justify-content-evenly align-items-center userIconsContainer'>
                                    <div className='imgLogin col-4'>
                                        {!logged ? (<div onClick={handleLogin} className='imgUserContainer d-flex justify-content-center align-items-center p-1 m-1'><img src={imgUser} height={22} title={'Login'} alt="icono de Login de Usuario" /></div>)
                                            : (<>
                                                <div className='d-flex justify-content-center'>
                                                    <div onClick={handleMyAccount} className='imgAccountContainer d-flex justify-content-center align-items-center p-1 m-1'><img src={imgAccount} height={22} title={'Mi Cuenta'} alt="icono de Usuario Loggeado" /></div>
                                                    <div onClick={handleLogOut} className='imgLogoutContainer d-flex justify-content-center align-items-center p-1 m-1'><img src={imgLogout} height={22} title={'Cerrar Sesión'} alt="icono de Logout" /></div>
                                                </div>

                                            </>)}
                                    </div>
                                    <div className='imgSearch col-3'>
                                        {(page === 'ItemListContainer') &&
                                            <div className='imgSearchContainer d-flex justify-content-center align-items-center'><img src={imgSearch} height={20} title={'Buscar Producto'} alt="icono de busqueda" onClick={() => setFlagSearch(!flagSearch)} /></div>
                                        }
                                    </div>
                                </div>
                            </div >

                        </div>
                    </div>
                </div>
            </div>
            <div className='container text-center'>
                {flagSearch && <SearchBar />}
            </div>

        </>
    );
}

export default NavBar;