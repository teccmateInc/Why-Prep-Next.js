import React from 'react'

const CheckBox = ({ value }) => {
    return (
        <div className="form-group row">
            <label className="checkbox-label col-1">
                <input type="checkbox" />
                <span className="checkbox-custom rectangular"></span>
            </label>
            <p className="checkbox-title col-11">{value}</p>
        </div>
    )
}

export default CheckBox