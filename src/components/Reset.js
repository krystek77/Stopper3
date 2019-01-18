import React from 'react';
import './Reset.css'

const Reset = (props)=> {
    return (
        <button
        onClick={props.resetStopper}
        className="reset">
        Reset
        </button>
    )
}

export default Reset