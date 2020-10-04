import React from 'react';

//First component in the React
export default function Primeiro() {
    const msg = 'Bem-vindo ao React!'
    return (
        <div>
             <h2>Primeiro Componente</h2>
             <p>{msg}</p>
        </div>
    )
}