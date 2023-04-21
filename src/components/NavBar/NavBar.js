import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';
import logoLepen from './assets/images/lepen_blanco.png';
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
  return (
    
            <div className='container-fluid d-flex justify-content-center'>          
                <Navbar className='navbarContainer' bg="light" expand="md">
                
                    <Container className='container-fluid navbarContenedor'>   
                        <div className='imgLogo'>
                            <img src={logoLepen} height={30} alt="logo Lepen" />
                        </div>     
                        <div className="cartContainer d-flex justfy-content-center">
                            <CartWidget/>
                        </div>
                    
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse  id="basic-navbar-nav">
                        <Nav className="ulContenedor"> 
                            <Nav.Link href="#home">Home</Nav.Link>
                            <NavDropdown title="Productos" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Calefaccion</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Gourmet</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Accesorios</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#link">Ventajas</Nav.Link>
                            <Nav.Link href="#link">Contacto</Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                 
                </Navbar>
                </div>  
    
  );
}

export default NavBar;