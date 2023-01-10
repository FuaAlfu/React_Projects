import { useState } from 'react'
import './App.css'

function App() {
    const [count, setCount] = useState(0)
    const [numbers] = useState([10,100,1000,10000]);
    const total = numbers.reduce((acc, number) => acc + number,0);
    return (
        <div className = "App" >
           Total: {total}
        </div>
    )
}

export default App