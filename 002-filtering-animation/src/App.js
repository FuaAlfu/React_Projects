import './App.css';
import {useEffect, useState} from 'react';
import Movie from './components/Movie';
import Filter from './components/Filter';

function App() {
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);

  useEffect(() => {
    fetchPopular();
  },[])

  const myAPI = process.env.REACT_APP_API;
  const fetchPopular = async () =>{
    const data = await fetch({myAPI});
    const movies = await data.json();
    console.log(movies); //for testing
    setPopular(movies.results);
    setFiltered(movies.results);
  }

  return (
    <div className="App">
    <Filter 
    popular={popular}
    setFiltered={setFiltered} 
    activeGenre={activeGenre} 
    setActiveGenre={setActiveGenre} />
    {/*End of */}
      <div className='populr-movies'>
         {popular.map((movie) => {
           return <Movie key={movie.id} movie={movie}/>
         })}
      </div>
    </div>
  );
}

export default App;
