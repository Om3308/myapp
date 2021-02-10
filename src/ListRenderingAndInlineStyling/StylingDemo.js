import React from 'react'
import '../day4/mystyles.css'
function StylingDemo(props) {
    let classtobeapplied=props.default?'default':'';
    return (
        <div>
            <h1 className={`${classtobeapplied} fonting`}> hello StylingDemo</h1>
        </div>
    )
}

export default StylingDemo
