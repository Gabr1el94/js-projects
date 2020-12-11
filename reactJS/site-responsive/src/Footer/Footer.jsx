import './Footer.css'

import React from 'react'
import Container from 'react-bootstrap/Container'

//get Input in the Formulary
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

// get any fontawesome imports
import { faFacebook, faInstagram, faTwitter,faYoutube,faMailchimp } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default () =>{
    const datetime = new Date().getFullYear().toString();
    
    return (
        <footer 
            data-aos="fade-up"
            data-aos-duration="3000"
            data-aos-easing="ease-in-out-cubic" 
            className="footer">
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
              <div className="newsteller">
                    <h4>Newsletter:</h4>
                    <p>Inscreva-se para receber últimas notícias</p>
                    <InputGroup className="mb-3">
                        <FormControl
                        placeholder="teste@test.com.br"
                        aria-label="teste@test.com.br"
                        aria-describedby="basic-addon2"
                        />
                        <InputGroup.Append>
                            <Button variant="outline-secondary">
                                Enter
                            </Button>
                        </InputGroup.Append>
                    </InputGroup>
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