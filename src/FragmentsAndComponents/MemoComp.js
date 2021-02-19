import React from 'react'

function MemoComp({name}) {
    console.log('rendering memo component')
    return (
        <div>
            <div> {name} </div>
        </div>
    )
}

export default React.memo(MemoComp)
