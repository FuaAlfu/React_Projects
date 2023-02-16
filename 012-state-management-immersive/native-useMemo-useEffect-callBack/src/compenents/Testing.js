{/*testing..
one of using useEffect is for api requests

strict mode at main.jsx call useEffect twice.. so remove it if you will
react not like render an objects that's why we should use JSON.stringify()
*/}

import { useState, useEffect } from "react";

const Testing = () => {
    const [names, setNames] = useState([]);

    useEffect(() => {
    fetch("../../public/names.json")
      .then(respone => respone.json())
      .then(data => setNames(data));
    },[]);

    const [selectedNames,setSelectedNames] = useState(null);
    const [selectNameDetails, setSelectNameDetails] = useState(null);

    useEffect(() => {
        fetch(`/${selectedNames.json}`)
          .then(respone => respone.json())
          .then(data => setSelectNameDetails(data));
        },[selectedNames]);

    render(
        <div>
             <h1>testing</h1>
             Names: {names.join(", ")}
             ---
             <div>
             {names.map((name) => <button 
                onClick={() => setSelectedNames(name)}>
                {name}
                </button>)}
             </div>
            {/**/}
            <div>{JSON.stringify(selectNameDetails)}</div>  
        </div>
    )
}

export default Testing;