import React from 'react'

const Submit = ({ processing = false, theme = "primary", children }) => {
    return (
        <button type="submit" className={`btn btn-${theme}`} disabled={processing}>
            {processing && <div className="spinner-border spinner-border-sm me-3" role="status"></div>}
            {children}
        </button>
    )
}

export default Submit
