import React, { useState ,useEffect} from "react";

const CounterWithNameAndSideEffect = () => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('omkar')

  useEffect(() => {
    console.log(`Hi ${name} you clicked ${count} times`)
  });
  
  return (
    <div>
      <p>Hi {name} you clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <button onClick={() => setName(name === 'Omkar' ? 'Ganesh' : 'Omkar')}>
        Change name
      </button>
    </div>
  )
}
export default CounterWithNameAndSideEffect;