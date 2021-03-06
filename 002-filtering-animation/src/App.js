import './App.css';
import {useEffect, useState} from 'react';
import Movie from './components/Movie';
import Filter from './components/Filter';
import {motion, AnimatePresence} from 'framer-motion';

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
    setActiveGenre={setActiveGenre} 
    />
    {/*End of */}
      <motion.div 
      layout
      animate={{y:100}}
      className='populr-movies'
      >
      <AnimatePresence>
         {filtered.map((movie) => {
           return <Movie key={movie.id} movie={movie}/>;
         })}
         </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default App;
