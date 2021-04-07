import React ,{useState} from 'react'

function Hook_prevState() {
    const initialState=0
    const [count,setCount]=useState(initialState)
    const incrementFive=()=>{
        for(let i=0;i<5;i++){
            setCount(prevState=>prevState+1)
        }
    }
    return (
        <div>
            count is :{count}

            <br/>
            <button className="btn btn-primary" onClick={()=>setCount(initialState)}> reset </button>
            <br/>
            <br/>
            <button className="btn btn-secondary" onClick={()=>setCount((prevState)=>prevState+1)}> increment</button>
            <br/>
            <br/>
            <button className="btn btn-danger" onClick={()=>setCount((prevState)=>prevState-1)}> decrement </button>
            <br/>
            <br/>
            <button className="btn btn-info" onClick={incrementFive}> increment by 5 </button>

        </div>
    )
}

export default Hook_prevState
