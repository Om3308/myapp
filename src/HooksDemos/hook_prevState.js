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
            <button onClick={()=>setCount(initialState)}> reset </button>
            <button onClick={()=>setCount((prevState)=>prevState+1)}> increment</button>
            <button onClick={()=>setCount((prevState)=>prevState-1)}> decrement </button>

            <button onClick={incrementFive}> increment by 5 </button>

        </div>
    )
}

export default Hook_prevState
