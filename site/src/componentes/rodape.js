import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css' ;
import { footer}  from  'react-bootstrap' ;
import './CSS/rodape.css';

export default function Rodape(){
    return(
        <div>
            <footer className="rodape1">
            <div class="container"/>
                <br/>
                <div  class="row view-group">
                    <div class="item col-xs-7 col-lg-7"/>  
                        <h4 className="titulo">Endereço</h4>
                        <p className="paragrafo">
                            Rua João Vilela Oliveira, 176 - Campo do Galvão, <strong>12509-320</strong>
                            <br/>
                            <strong>Guaratinguetá/SP</strong>
                        </p>
                </div>
                <div  class="row view-group">
                    <div class="item col-xs-12 col-lg-12"/>  

                        <h4 className="titulo">Contato</h4>
                        <p className="paragrafo">
                            <strong>Email:</strong> contato@novaimobiliaria.com.br
                            <br/>
                            <strong>Telefone:</strong> (12)3122-1580
                        </p>
                </div>
                <br/>
            </footer>

            <footer className="rodape2">
                <div class="container">
                    <br/>
                    <div class="row view-group text-center">
                        <div class="item col-xs-12 col-lg-12">
                            <h6 style="font-family: 'Dosis', sans-serif;"> © Photography 2020 - All Rights Reserved </h6>
                        
                            <a style="color: rgb(0, 0, 0);" href="https://pt-br.facebook.com/imobiliariadomos/" target="_blank"><i class="fab fa-instagram"></i></a>
                            <a style="color: rgb(0, 0, 0);" href="https://www.instagram.com/imobiliariadomos/?hl=pt-br" target="_blank"><i class="fab fa-facebook-square"></i></a>
                            <br/> <br/>
                        </div>
                    </div>         
                </div>
            </footer>
        </div>
    );
}