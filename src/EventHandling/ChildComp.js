import React from 'react'

function ChildComp(props) {
    return (
        <div>
            <button onClick={()=>props.hander('child component')}> child Button </button>
        </div>
    )
}

export default ChildComp
