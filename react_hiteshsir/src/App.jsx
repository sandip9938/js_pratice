// hooks concept

import { useState } from "react";
function App() {
  let [counter, setCount] = useState(25);
  // let counter=20



  // addvalue 

  const addValue = () => {
    // counter = counter+1
    setCount(counter + 1);
   
    if(setCount>20){
      alert('its last number')
    }
  };



// removeValue 

  const removeValue = () => {
    setCount(counter - 1);
  };
  return (
    <>
      <h1>Hello react</h1>
      <h2>counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <button onClick={removeValue}>Remove value</button>

    </>

    // *<button onClick={() => setCount(count + 1)}>+</button>*/
  );
}

export default App;
