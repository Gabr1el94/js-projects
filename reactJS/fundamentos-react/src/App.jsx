import React from 'react'
//import components created
import Primeiro from './components/basics/Primeiro'
import ComParam from './components/basics/ComParam'
import Fragmento from './components/basics/Fragmento'
import Aleatorio from './components/basics/Aleatorio'

export default () => (
    <div id="app">
        <h2>Fundamentos React</h2>
        <Primeiro/>
        <ComParam title="Testando o parametro" subtitle="Funcionou!!" />
        <Fragmento/>
        <Aleatorio min={1} max={5}/>
  </div>
);