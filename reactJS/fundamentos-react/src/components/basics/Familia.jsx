import React, {cloneElement} from 'react'

export default (props) =>{
    return (
    <div>
        {/* 1º opção: {cloneElement(props.children, {...props})} */
          /* 2º opção: */
          props.children.map((child, i) => {
            return cloneElement(child, { ...props, key: i})
          })
          
        }
    </div>
    )
}