import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css' ;
import { footer}  from  'react-bootstrap' ;

export default function Rodape(){
    return(
        <div>
            <footer style="background:rgb(110, 207, 219);">
            <div class="container"/>
                <br/>
                <div  class="row view-group">
                    <div class="item col-xs-7 col-lg-7"/>  
                        <h4 style="color: rgb(255, 255, 255); font-family: 'Righteous'">Endereço</h4>
                        <p style="color: rgb(37, 37, 37);">
                            Rua João Vilela Oliveira, 176 - Campo do Galvão, <strong>12509-320</strong>
                            <br/>
                            <strong>Guaratinguetá/SP</strong>
                        </p>
                </div>
                <div  class="row view-group">
                    <div class="item col-xs-12 col-lg-12"/>  

                        <h4 style="color: rgb(255, 255, 255); font-family: 'Righteous'">Contato</h4>
                        <p style="color: rgb(37, 37, 37);">
                            <strong>Email:</strong> contato@novaimobiliaria.com.br
                            <br/>
                            <strong>Telefone:</strong> (12)3122-1580
                        </p>
                </div>
                <br/>
            </footer>

            <footer style="background:rgb(21, 157, 175);">
                <div class="container">
                    <br/>
                    <div class="row view-group text-center">
                        <div class="item col-xs-12 col-lg-12">
                            <h6 style="font-family: 'Dosis', sans-serif;"> © Nova Imobiliária 2019 - All Rights Reserved </h6>
                        
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