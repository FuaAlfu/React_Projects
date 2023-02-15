import { useState, useMemo, useCallback } from 'react'
import './App.css'

function SortedList({list, sortFunc}){
    console.log("Running sort");
    const sortedList = useMemo(() => {
        return [...list].sort(sortFunc);
    }, [list, sortFunc]); 
    return <div>{sortedList.join(", ")}</div>
}
function App() {
    const [count, setCount] = useState(0)
    const [numbers] = useState([10,100,1000,10000]);
    const total = useMemo(() => numbers.reduce((acc, number) => acc + number,0),[numbers]);
    const [names,setNames] = useState(["n1","n2","n3"]);
    {/*copy names before sorted */}
    const sortedNames = useMemo(() =>  [...names].sort(),
    [names]);

    const [count1,setCount1] = useState(0);
    const [count2,setCount2] = useState(0);

    {/*try: const countTotal = useMemo(() => count1 + count2, [count1, count2]);*/}
    const countTotal = count1 + count2;

    {/*
    //using useCallback with nested components such (onClick, onChange..etc)
    //using useCallback when using custom hook
    */}
    const sortFunc = useCallback((a,b) => a.LocaleCompare(b) * -1, []);

    return (
        <div className = "App" >
           <div>Total: {total}</div>
           --
           <div>Names: {names.join(", ")}</div>
           <SortedList list={names} sortFunc={sortFunc}/>
           --
           <div>Sorted Names: {sortedNames.join(", ")}</div>
           --
           <button onClick={() => setCount1(count1 + 1)}>Count: {count1}</button>
           <button onClick={() => setCount2(count2 + 1)}>Count: {count2}</button>
           <div>Total: {countTotal}</div>
        </div>
    )
}

export default App