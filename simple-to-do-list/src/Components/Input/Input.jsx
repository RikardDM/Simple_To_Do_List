import React from 'react'


const Input = ({ onInput, type, placeholder, value }) => {

    return (
        <div>
            <input type={type} placeholder={placeholder} onChange={onInput} value={value}></input>
        </div>
    )
}

export default Input