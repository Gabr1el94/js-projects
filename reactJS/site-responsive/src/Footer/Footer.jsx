import './Footer.css'

import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import NavbarBrand from 'react-bootstrap/NavbarBrand'

// get our fontawesome imports
import { faFacebook, faInstagram, faTwitter,faYoutube } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default () =>{
    const datetime = new Date().getFullYear().toString();
    
    return (
        <footer className="footer">
            <Container className="grid-columns">
              <div className="texto">
                  <h4 className="titulo">Reflexão:</h4>
                  <p className="frase">"Nunca me chamaram de um cara legal. Estou em algum lugar entre 
                      os geeks e normais."
                    <br/></p>
                    <span className="autor">( Linus Torvalds )</span>
              </div>
              <div className="address">
                  <h4>Endereço:</h4>
                  <address className="endereco">
                      Rua Claudionor Duarte de Almeida,<br/> 
                      Parque Capibaribe,<br/>
                      São Lourenço da Mata - PE ,<br/>
                      54720-293<br/> 
                  </address>
              </div>
              <div className="neteller">
                    <h4>Newsletter:</h4>
              </div>
              <div className="follow">
                    <h4>Siga-nos:</h4>
                    <FontAwesomeIcon className="social-media" size='3x' icon={faFacebook}/>
                    <FontAwesomeIcon className="social-media" size='3x' icon={faInstagram}/>
                    <FontAwesomeIcon className="social-media" size='3x' icon={faTwitter}/>
                    <FontAwesomeIcon className="social-media" size='3x' icon={faYoutube}/>
              </div>  
            </Container>
            <Container className="rights flex-row">
                <p className="text-center">GSS {datetime} - <span>Todos os direitos reservados</span></p>
            </Container>    
        </footer>
    )
}