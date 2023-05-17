import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';
import logoLepen from './assets/images/lepen_blanco.png';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';


function NavBar() {

  return (
    
            <div className='container-fluid d-flex justify-content-center'>          
                <Navbar className='navbarContainer' bg="light" expand="md">
                
                    <Container className='container-fluid navbarContenedor'>   
                        <div className='imgLogo'>
                            <Link to={'/'}><img src={logoLepen} height={40} alt="logo Lepen" /></Link>
                        </div>     
                        <div className="cartContainer d-flex justfy-content-center">
                            <CartWidget />
                        </div>
                    
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse  id="basic-navbar-nav">
                        <Nav className="ulContenedor"> 
                            <NavLink to={'/'} className='nav-link'>Home</NavLink> 
                            <NavDropdown title="Productos" id="basic-nav-dropdown">
                                <NavLink to={`/category/${"Calefaccion"}`} className='nav-link dropdown-item'>Calefacción</NavLink>
                                <NavDropdown.Divider />
                                <NavLink to={`/category/${"Gourmet"}`} className='nav-link dropdown-item'>Gourmet</NavLink>
                                <NavDropdown.Divider />
                                <NavLink to={`/category/${"Accesorios"}`} className='nav-link dropdown-item'>Accesorios</NavLink>
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