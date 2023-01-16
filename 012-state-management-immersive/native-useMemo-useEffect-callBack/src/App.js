import { useState, useMemo } from 'react'
import './App.css'

function App() {
    const [count, setCount] = useState(0)
    const [numbers] = useState([10,100,1000,10000]);
    const total = useMemo(() => numbers.reduce((acc, number) => acc + number,0),[numbers]);
    const [names,setNames] = useState(["n1","n2","n3"]);
    {/*copy names before sorted */}
    const sortedNames = useMemo(() =>  [...names].sort(),
    [names]);

    return (
        <div className = "App" >
           Total: {total}
           --
           Names: {names.join(", ")}
           --
           Sorted Names: {sortedNames.join(", ")}
        </div>
    )
}

export default App