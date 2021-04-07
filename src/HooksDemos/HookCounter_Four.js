
import React, { useState } from "react";
function HookCounter_Four() {
  const [items, setItems] = useState([]);
  const additem = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10) + 1,
      },
    ]);
  };
  return (
    <div>
      <button onClick={additem}>Add a Number</button>
      <ol >
        {items.map((i) => (
          <li key={i.id}>{i.value}</li>
        ))}
      </ol>
    </div>
  );
}
export default HookCounter_Four;
