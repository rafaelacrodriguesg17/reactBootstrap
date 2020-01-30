import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '<script src="https://kit.fontawesome.com/556dcba218.js" crossorigin="anonymous"></script>';
import { Button, Jumbotron, Badge }  from  'react-bootstrap';
import './CSS/jumbo.css';

export default function Jumbo(){
    return(
        <div>
            <Jumbotron className='back01'>
                
                <h1 className='tituloH1'><i class="fas fa-camera"></i> Photography </h1>
                <p className='escrita2'>
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
