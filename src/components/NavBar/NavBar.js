import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';
import logoLepen from './assets/images/lepen_blanco.png';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { useFirebase } from '../../hooks/useFirebase/useFirebase';


function NavBar() {

    const {getCategories, categories}= useFirebase();

    useEffect(()=>{
        getCategories();
    },[])


  return (
    
            <div className='container-fluid d-flex justify-content-center'>          
                <Navbar className='navbarContainer' bg="light" expand="md">
                
                    <Container className='container-fluid navbarContenedor'>   
                        <div className='imgLogo'>
                            <Link to={'/'}><img src={logoLepen} height={40} alt="logo Lepen" /></Link>
                        </div>     
                        <div className="cartContainer d-flex justfy-content-center">
                        <Link to='/cart' className="Option btnPurchase rounded m-4 btn"><CartWidget /></Link>
                            
                        </div>
                    
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse  id="basic-navbar-nav">
                        <Nav className="ulContenedor"> 
                            <NavLink to={'/'} className='nav-link'>Home</NavLink> 
                            <NavDropdown title="Productos" id="basic-nav-dropdown">
                               {/*  Traer Categorias y Mapearlas para conformar el menu */}
                               {categories.map(cat=>(
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
    
  );
}

export default NavBar;