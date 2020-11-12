import './App.css';

import React from 'react'
//import components created
import IndiretaPai from './components/comunicacao/InderaPai'
import DiretaPai from './components/comunicacao/DiretaPai'
import ParImpar from './components/condicional/ParImpar'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import ListaProdutos from './components/repeticao/ListProdutos'
import ListaAlunos from './components/repeticao/ListaAlunos'
import Primeiro from './components/basics/Primeiro'
import ComParam from './components/basics/ComParam'
import Fragmento from './components/basics/Fragmento'
import Aleatorio from './components/basics/Aleatorio'
import Card from './components/layout/Card'
import Familia from './components/basics/Familia'
import FamiliaMembro from './components/basics/FamiliaMembro'

export default () => (
    <div className="App" id="app">
        <h2>Fundamentos React</h2>

        <div className="Cards">

        <Card title="Comunicação Indireta" color="#8BAD39">
           <IndiretaPai></IndiretaPai>
        </Card>

        <Card title="Comunicação Direta" color="#59323C">
           <DiretaPai></DiretaPai>
        </Card>

        <Card title="Condicional" color="#982395">
            <ParImpar numero={20}></ParImpar>
            <UsuarioInfo usuario={{nome: 'Gabriel'}}/>
            <UsuarioInfo usuario={{nome: ''}}/>
        </Card>

        <Card title="Repetição Produtos" color="#FF7C61">
            <ListaProdutos></ListaProdutos>
        </Card>

        <Card title="Repetição Alunos" color="#FF4C65">
            <ListaAlunos></ListaAlunos>
        </Card>

        <Card title="Componente Filhos" color="#00C8F8">
            <Familia sobrenome="Soares">  
              <FamiliaMembro nome="Gabriel" />
              <FamiliaMembro nome="Kátia" />
              <FamiliaMembro nome="Arthur" />
            </Familia>
        </Card>

          <Card title="Exemplo Card" color="#FA6900">
            <Aleatorio min={1} max={5}/>
          </Card>

          <Card title="Parâmetros" color="#E94C6F">
              <ComParam title="Testando o parâmetro" subtitle="Funcionou!!" />
          </Card>

          <Card title="Exemplo Card" color="#E8B71A">
            <Fragmento/>
          </Card>
          <Card title="Primeiro Teste" color="#588C73">
            <Primeiro/>
          </Card>
        </div>
  </div>
);