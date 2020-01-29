import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Jumbotron }  from  'react-bootstrap';
import Imagem01 from './imagem/jumb.jpg';

export default function Jumbo(){
    return(
        <div>
            <Jumbotron>
                <img src={Imagem01}></img>
                <h1>Hello, world!</h1>
                <p>
                    This is a simple hero unit, a simple jumbotron-style component for calling
                    extra attention to featured content or information.
                </p>
                <p>
                    <Button variant="primary">Learn more</Button>
                </p>
            </Jumbotron>
        </div>     
    );
}