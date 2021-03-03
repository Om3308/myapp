import React from 'react'

function ContactUs(props) {
    const onclickhandler=()=>{
        props.history.push('/')
    }
    return (
        <div>
            <h1> contact us page </h1>
            <button onClick={onclickhandler}> navigate</button>
        </div>
    )
}

export default ContactUs
