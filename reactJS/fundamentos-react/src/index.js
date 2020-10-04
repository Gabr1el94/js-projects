import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'

//import components created
import Primeiro from './components/basics/Primeiro'
import ComParam from './components/basics/ComParam'

// Inserir valor String no ReactDOM
// Usar react no JSX
//const subtitule = <h2>Olá React!!!</h2> 
ReactDOM.render(
    <div>
      <Primeiro/>
      <ComParam title="Testando o parametro" subtitle="Funcionou!!" />
    </div>,
    document.getElementById("root")
)
