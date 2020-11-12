import React, { useState } from 'react'
import IndiretaFilho from './InderaFilho'

export default props => {
    // nome idade nerd
    const [nome, setNome] = useState('?');
    let [idade, setIdade] = useState(0);
    let [nerd,setNerd] = useState(false);
    function fornecerInfomacoes(nomeParam,idadeParam,nerdParam) {
        setNome(nomeParam);
        setIdade(idadeParam);
        setNerd(nerdParam);
    }
    return (
        <div>
            <div>
                <span>{nome} </span>
                <span>{idade} </span>
                <span>{nerd ? 'Verdadeiro' : 'Falso'}</span>
            </div>
            <IndiretaFilho quandoClicar={fornecerInfomacoes} />        
        </div>
    )
}