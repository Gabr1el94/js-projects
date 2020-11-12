import "./Input.css"
import React, {useState} from 'react';

export default props =>{
    const [valor, setValor] = useState('Inicial')
    function quandoMudar(e) {
        setValor(e.target.value)
    }
    return(
        <div className="Input">
            <div>
                <input type="text" value={valor}
                    onChange={quandoMudar}
                />
                <input type="text" value={valor}
                    readOnly
                />
            </div>
        </div>
    )
}