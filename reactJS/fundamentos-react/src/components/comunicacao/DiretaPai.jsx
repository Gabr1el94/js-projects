import React from 'react'
import DiretaFilho from './DiretaFilho'

export default props => {
    return (
        <div>
            <DiretaFilho text="Filho1" numero={20} bool={true}/>
            <DiretaFilho text="Filho2" numero={15} bool={false}/>
        </div>
    )
}