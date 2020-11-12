import React from 'react'

export default props => {
    return (
        <div>
            <label htmlFor="passoInput">Passe</label>
            <input type="number" id="passoInput" 
            value={props.passo} 
            onChange={e => props.setPasso(+e.target.value)}/>
        </div>
    )
}