

import { Container, Nav, Navbar, } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import CartWidget from '../CardtWidget/CartWidget'
//array de categorias
const array = [
  {idCategoria: '1', name: 'Decoración', nameButton: 'Decoración'},
  {idCategoria: '2', name: 'Muebles', nameButton: 'Muebles'},
  {idCategoria: '3', name: 'Iluminacion', nameButton: 'Iluminación'},
]



const NavBar = () => {
    return (
      <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
          <Navbar.Brand href="#home">PeperinaHome</Navbar.Brand>
          <NavLink
              to="/"
              // className={ ({isActive}) => isActive ? 'AlgunaClase' : 'otraClase'}
          ></NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
              {array.map(param => <NavLink key={param.id} to={`/categoria/${param.name}`}>{param.nameButton}</NavLink>) }

          </Nav>

          </Navbar.Collapse>
          <CartWidget/>
          </Container>
      </Navbar>
  </>



  )
}

export default NavBar