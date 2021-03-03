import React from 'react'

function Employee(props) {
    // console.log(match);
    // console.log(location);
    // console.log(history);

    return (
        <div>
            <h1> employee id: {props.match.params.id}</h1>
        </div>
    )
}

export default Employee
