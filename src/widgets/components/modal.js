import React from 'react'
import './modal.css'

function Modal(props) {
    return (
        <div className="Modal">
            Inside the modal
            {props.children}
            <button onClick={props.handleClick}>Close</button>
        </div>
    )
}

export default Modal