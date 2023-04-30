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
                            <img src={logoLepen} height={40} alt="logo Lepen" />
                        </div>     
                        <div className="cartContainer d-flex justfy-content-center">
                            <CartWidget 
                             />
                        </div>
                    
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse  id="basic-navbar-nav">
                        <Nav className="ulContenedor"> 
                            <Nav.Link href="#home">Home</Nav.Link>
                            <NavDropdown title="Productos" id="basic-nav-dropdown">
                                <NavDropdown title="Calefaccion" id="basic-nav-dropdown1">
                                  <div className='dropdownCalefaccion'> 
                                    <NavDropdown.Item  href="#action/4.1">Premium Clasicos</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/4.2">Con Horno</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/4.3">Cassettes Insertables</NavDropdown.Item>
                                  </div>
                                </NavDropdown>
                                <NavDropdown title="Gourmet" id="basic-nav-dropdown2">
                                    <NavDropdown.Item href="#action/5.1">Parrillas</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/5.2">Fogoneros</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/5.3">Hornos a Leña</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.3">Accesorios</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#link1">Ventajas</Nav.Link>
                            <Nav.Link href="#link2">Contacto</Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                 
                </Navbar>
                </div>  
    
  );
}

export default NavBar;