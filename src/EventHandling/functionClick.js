import React from 'react'

function FunctionClick() {
    function clickHandler(){
        console.log("button Clicked");
    }
    return (
        <div>
            <button onClick={clickHandler}> function component </button>
        </div>
    )
}

export default FunctionClick
