import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css' ;
//import '<script src="https://kit.fontawesome.com/556dcba218.js" crossorigin="anonymous"></script>';
import { Button, Navbar, Nav, Form, FormControl }  from  'react-bootstrap' ;
import './CSS/menu.css';

export default function Menu(){
    return(
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home" className="tituloH4"><i class="fas fa-camera"></i> Photography </Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="#home" className="btns"> Home </Nav.Link>
                <Nav.Link href="#features" className="btns"> Sobre </Nav.Link>
                </Nav>
                <Form inline>
                <FormControl type="text" className="mr-sm-2" />
                <Button variant="outline-warning">Buscar</Button>
                </Form>
            </Navbar>
        </div>
    );
}