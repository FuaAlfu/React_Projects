import './App.css';
import airtable from 'airtable';
import React,{useEffect, useState} from 'react';

function App() {
  const base = new Airtable({apikey:""}).base('');
  const [goals,setGoals] = useState([]);
  const [updates,setUpdates] = useState([]);

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
       <h1>My Goal</h1>
       {goals.map(goal => (
         <Goal
         key={goal.id}
         goal={goal}
         updates={updates.filter(update => update.fields.goalid[0] === goal.id)}
         />
       ))}
    </div>
  );
}

export default App;
