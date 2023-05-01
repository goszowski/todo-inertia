import React from 'react'

const Textarea = ({ label, value, error, onChange = (e) => { } }) => {
    return (
        <div className="mb-3">
            <label className="form-label">{label}</label>
            <textarea className={`form-control ${error ? 'is-invalid' : null}`} onChange={onChange} value={value}></textarea>
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    )
}

export default Textarea
