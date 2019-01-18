import React from 'react';
import './Clock.css'

const Clock = (props) => {
    return (
        <p>{props.time}</p>
    )
}

export default Clock