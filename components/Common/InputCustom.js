import React, { useState, useEffect } from 'react'
import { isEmpty } from '../../validation/is_empty'

const InputCustom = ({ onChange, value, type, name, id, placeholder }) => {
    const [text, setText] = useState(value)
    useEffect(() => {
        setText(isEmpty(value) ? '' : value)
    }, [value])
    return (
        <div className="form-group">
            <input onChange={(e) => {
                setText(e.target.value)
                if (typeof onChange === 'function') {
                    onChange(e.target.value)
                }
            }} value={text} type={type} name={name} id={id} placeholder={placeholder} className="form-control" />
        </div>
    )
}

export default InputCustom