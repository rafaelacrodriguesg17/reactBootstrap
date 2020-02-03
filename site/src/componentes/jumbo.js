import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron, Badge }  from  'react-bootstrap';
import './CSS/jumbo.css';

export default function Jumbo(){
    return(
        <div>
            <Jumbotron className='back01'>
                
                <h1 className='tituloH1'> Photography </h1>
                <p className='escrita2'>
                    It is a long established fact that a reader will be distracted by 
                    the readable content of a page when looking at its layout. 
                </p>

            </Jumbotron>
        </div>    
    );
}
