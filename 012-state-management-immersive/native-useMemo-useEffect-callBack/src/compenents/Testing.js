{/*testing..
one of using useEffect is for api requests

strict mode at main.jsx call useEffect twice.. so remove it if you will
react not like render an objects that's why we should use JSON.stringify()
*/}

import { useState, useEffect } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0);

//   useEffect(() => {
//   setInterval(() => {
//     setTime(time + 1);
//   }, 1000);
// },[time]); //add time as dependencies,
// when time changes we re-run this and get a new value for the time..

//one way is just to give the new value
useEffect(() => {
 const internal = setInterval(() => {
    setTime((t) => {
      console.log(t);
      return t + 1;
  });
  }, 1000);
  return () => clearInterval(internal);
},[]);

  return(
    <div>Time: {time}</div>
  )
}

const Testing = () => {
    const [names, setNames] = useState([]);

    useEffect(() => {
    fetch("../../public/names.json")
      .then(respone => respone.json())
      .then(data => setNames(data));
    },[]);

    const [selectNameDetails, setSelectNameDetails] = useState(null);

    // const [selectedNames,setSelectedNames] = useState(null);
    //     useEffect(() => {
    //   if(selectedNames){
    //     fetch(`/${selectedNames.json}`)
    //       .then(respone => respone.json())
    //       .then(data => setSelectNameDetails(data));
    //     }
    // },[selectedNames]);

    const onSelectedNamesChange = (name) => {
      fetch(`/${name}`)
          .then(respone => respone.json())
          .then(data => setSelectNameDetails(data));
    };

    render(
        <div>
             <h1>testing</h1>
             <Stopwatch />
             Names: {names.join(", ")}
             ---
             {/*
             <div>
             {names.map((name) => <button 
                onClick={() => setSelectedNames(name)}>
                {name}
                </button>)}
             </div>
             */}
             <div>
             {names.map((name) => <button 
                onClick={() => onSelectedNamesChange(name)}>
                {name}
                </button>)}
             </div>
            {/**/}
            <div>{JSON.stringify(selectNameDetails)}</div>  
        </div>
    )
}

export default Testing;