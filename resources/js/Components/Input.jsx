import React from 'react'

const Input = ({ type = 'text', label, value, error, onChange = (e) => { } }) => {
    return (
        <div className="mb-3">
            <label className="form-label">{label}</label>
            <input className={`form-control ${error ? 'is-invalid' : null}`} type={type} value={value} onChange={onChange} />
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    )
}

export default Input
