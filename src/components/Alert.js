import React from 'react'

function Alert(props) {
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    return (
        props.alertBox && <div className={`alert alert-${props.alertBox.typ} alert-dismissible fade show`} role="alert">
            <strong>{capitalize(props.alertBox.typ)}</strong>: {props.alertBox.msg}
        </div>
    )
}

export default Alert

