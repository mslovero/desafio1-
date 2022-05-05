
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import CartWidget from '../CardtWidget/CartWidget'




const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">PeperinaHome</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Inicio</Nav.Link>
      <Nav.Link href="#pricing">Nosotros</Nav.Link>
      <NavDropdown title="Poductos" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Living</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Cocina-Comedor</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Habitación</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Muebles exterior</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">Más detalles</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  <CartWidget/>
  </Container>
</Navbar>
       

  )
}

export default NavBar