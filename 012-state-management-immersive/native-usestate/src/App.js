import { useState } from 'react'

function NameList() {
    const [list, setList] = useState(["jhon", "Doe", "Fua","Juhha"]);
    const [name, setName] = useState(() => "Doe");

    function onAddName(){
        list.push(name);
        setList([...list,name]);
        setName("");
    }
    return(
    <div>
       <ul>
          {list.map((name) => (
              <li key={name}>{name}</li>
          ))}
       </ul>
    {/**/}
    <input
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
    /> 
    <button onClick={onAddName}>
    </button>   
    </div>
    );
}
function Counter() {
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

function App() {
    return(
        <div>
           <Counter />
           <Counter />
           <NameList />
        </div>
    )
}

export default App;