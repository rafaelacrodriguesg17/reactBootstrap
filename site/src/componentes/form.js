import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css' ;
import { Button, Form, FormControl }  from  'react-bootstrap' ;

export default function Form(){
    return(
        <Form>
            <Form.Group controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows="3" />
            </Form.Group>
        </Form>
    );
}