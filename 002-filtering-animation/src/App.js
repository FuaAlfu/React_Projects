import './App.css';
import {useEffect, useState} from 'react';
import Movie from './components/Movie';
function App() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    fetchPopular();
  },[])

  const myAPI = process.env.REACT_APP_API;
  const fetchPopular = async () =>{
    const data = await fetch({myAPI});
    const movies = await data.json();
    console.log(movies); //for testing
    setPopular(movies.results);
  }

  return (
    <div className="App">
      <div className='populr-movies'>
         {popular.map((movie) => {
           return <Movie/>
         })}
      </div>
    </div>
  );
}

export default App;
