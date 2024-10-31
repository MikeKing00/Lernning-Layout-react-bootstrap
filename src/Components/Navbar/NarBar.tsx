import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './Navbar.css'

const NarBar = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-dark sticky-top">
      <Container>
        <Navbar.Brand href="#home" className='align-item-center text-white'>
            <img
              alt=""
              src="/assets/LOGO.jpg"
              width="35"
              height="35"
              className="d-inline-block align-top"
            />{'      '}
            KUBAYAZHI
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav>
            <Nav.Link className='menu text-white'> Solution </Nav.Link>
            <Nav.Link className='menu text-white'> Platfrom </Nav.Link>
            <Nav.Link className='menu text-white'> Story </Nav.Link>
            <Nav.Link className='menu text-white'> Connectors </Nav.Link>
            <Nav.Link className='menu text-white'> Pricing </Nav.Link>
            <Nav.Link className='menu text-white'> Blog </Nav.Link>
            <Nav.Link className='menu text-white'> About us </Nav.Link>
            <button className='btn-login'> Login </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default NarBar
