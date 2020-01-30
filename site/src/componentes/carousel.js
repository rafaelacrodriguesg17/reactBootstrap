import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css' ;
import { Button, Carousel }  from  'react-bootstrap' ;
import Imagem01 from './imagem/lentes.jpg';
import Imagem02 from './imagem/camera.jpg';
import Imagem03 from './imagem/estudio.jpg';

export default function Car(){
    return(
        <div>
            <Carousel>
                
                <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Imagem01} 
                            alt="First slide"
                        />
                    <Carousel.Caption>
                        <h3 className='titulo-h3'>Lentes Fotográficas</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Imagem02}
                            alt="Third slide"
                        />
                    <Carousel.Caption>
                        <h3>Câmeras Fotográficas</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Imagem03}
                            alt="Third slide"
                        />
                    <Carousel.Caption>
                        <h3>Estúdios Fotográficos</h3>
                        <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        </div>     
    );
}