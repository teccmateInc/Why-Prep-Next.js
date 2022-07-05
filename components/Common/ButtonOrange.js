import React, { useState } from 'react'

const ButtonOrange = ({ onClick, value, type, loading }) => {
    return (
        loading === true && typeof loading === 'boolean' ? '' : <button onClick={onClick} type={type} className="btn btn-primary">{value}</button>
    )
}

export default ButtonOrange