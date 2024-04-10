import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavigationBar() {
    return (
        <div>
               <style>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap');
                `}
            </style>
            <Navbar expand='lg' className='bg-primary w-100 fixed-top z-1'
      data-bs-theme='dark' >
        <Container>
        <Navbar.Brand href='#' className='text-dark'>
        <span style={{ fontFamily: 'Oswald, sans-serif', backgroundColor:'#DCFFF8' , color:'#322E2E' }}><span onMouseOver={(e) => {e.target.style.color = '#DCFFF8'; e.target.style.backgroundColor = '#322E2E'}} onMouseOut={(e) => {e.target.style.color = ''; e.target.style.backgroundColor = ''}}>
              E Alex C</span>
            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' style={{ backgroundColor: 'black', color:'#DCFFF8' }}/>
          <Navbar.Collapse id='basic-navbar-nav' >
            <Nav className='me-auto w-100 d-flex justify-content-end' >
                <Nav.Link href='#about' style={{ color: 'black' }}><span onMouseOver={(e) => {e.target.style.color = '#DCFFF8'; e.target.style.backgroundColor = '#322E2E'}} onMouseOut={(e) => {e.target.style.color = ''; e.target.style.backgroundColor = ''}}>Acerca de</span></Nav.Link>
                <Nav.Link href='#projects' style={{ color: 'black' }}><span onMouseOver={(e) => {e.target.style.color = '#DCFFF8'; e.target.style.backgroundColor = '#322E2E'}} onMouseOut={(e) => {e.target.style.color = ''; e.target.style.backgroundColor = ''}}>Proyectos</span></Nav.Link>
                <Nav.Link href='#contact' style={{ color: 'black' }}><span onMouseOver={(e) => {e.target.style.color = '#DCFFF8'; e.target.style.backgroundColor = '#322E2E'}} onMouseOut={(e) => {e.target.style.color = ''; e.target.style.backgroundColor = ''}}>Contacto</span></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        </div>
    )
}

export default NavigationBar;