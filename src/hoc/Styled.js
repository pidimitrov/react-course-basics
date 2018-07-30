import React from 'react'

const styled = (props) => {
    return (
        <div className={props.classes}>
            {props.children}
        </div>    
    )
}

export default styled;