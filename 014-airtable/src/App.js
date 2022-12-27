import './App.css';
import airtable from 'airtable';
import React,{useEffect, useState} from 'react';

function App() {
  const base = new Airtable({apikey:""}).base('');
  const [goals,setGoals] = useState([]);
  const [update,setUpdates] = useState([]);

  useEffect(() => {
    base("goals")
    .select({view: "Grid view"})
    .eachPage((records, fetchNextPage) => {
     // console.log(records);
      setGoals(records);
      fetchNextPage();
    });
    //----
    base("updates")
    .select({view: "Grid view"})
    .eachPage((records, fetchNextPage) => {
     // console.log(records);
      setUpdates(records);
      fetchNextPage();
    });
  },[]);
  return (
    <div className="App">

    </div>
  );
}

export default App;
