import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Nav from './components/Nav';
import Products from './components/Products';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
           <Nav/>
           <Routes>
               <Route path="/" element={<Products/>}/>
               <Route path="/" element={<Products/>}/>
           </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
