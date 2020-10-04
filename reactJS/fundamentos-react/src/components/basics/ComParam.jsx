import React from 'react';

export default function Param(params){
    return (
        <div id="app">
            <h1>{params.title}</h1>
            <h2>{params.subtitle}</h2>
        </div>
    )
}