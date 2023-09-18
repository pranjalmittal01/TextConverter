import React from 'react'

function Alert(props) {
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    return (
        <div style={{height: '50px'}}>
            {props.alertBox && <div className={`alert alert-${props.alertBox.typ} alert-dismissible fade show`} role="alert">
                <strong>{capitalize(props.alertBox.typ)}</strong>: {props.alertBox.msg}
            </div>}
        </div>
    )
}

export default Alert

