import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'

// Inserir valor String no ReactDOM
// Usar react no JSX
const subtitule = <h2>Olá React!!!</h2> 
ReactDOM.render(
    <div>
        {subtitule}
    </div>,
    document.getElementById("root")
)