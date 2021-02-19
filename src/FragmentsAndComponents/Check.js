import React,{Fragment} from 'react'

function Check() {
    const data=[
        {id:101,name:'Ganesh'},
        {id:102,name:'amol'},
        {id:103,name:'sagar'}
    ]
    return (
        <Fragment>
            {
                data.map(d=>(
                    <React.Fragment key={d.id}>
                        <h1> name </h1>
                        <p> {d.name}</p>
                        </React.Fragment>
                ))
            }
        </Fragment>
    )
}

export default Check
