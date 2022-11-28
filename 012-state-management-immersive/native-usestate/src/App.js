import { useState } from 'react'

function App() {
    let [count, setCount] = useState(10);

    function addOne(){
        setCount(count + 1);
    }
    return ( 
        <div className = "App" >
        <button onClick={addOne}>Count: {count}</button>
        </div>
    );
}

export default App;