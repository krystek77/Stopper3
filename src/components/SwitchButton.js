import React from 'react';
import './SwitchButton.css'

const SwitchButton = (props)=> {
    return (
        <button
        onClick = {props.onOff} 
        className={props.active ? "stop":"start"}>
        {props.active ? "stop":"start"}
        </button>
    )
}

export default SwitchButton