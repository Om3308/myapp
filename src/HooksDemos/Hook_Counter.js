import React,{useState} from 'react'

function Hook_Counter() {
  const[count,setCount]  = useState(0)
    return (
        <div>
            <button className="btn btn-primary" onClick={()=>setCount(count+1)}> count: {count}</button>
        </div>
    )
}

export default Hook_Counter
