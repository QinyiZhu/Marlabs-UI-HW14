import React from 'react'
import './Button.css'

export const Button = ({buttonclick}) => {
    return (
        <div>
            <button id="button" type="button" onClick={buttonclick}>Get Title!</button>
        </div>
    );
}
