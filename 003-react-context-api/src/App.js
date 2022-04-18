import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Nav from './components/Nav';
import Checkout from 'components/Checkout';
import Products from './components/Products';

function App() {
  const item = 0;
{/*
  const addItem = (name, price) => {
    setItem({name, price});
  };*/}
  return (
    <div className="App">
        <BrowserRouter>
           <Nav item={item}/>
           <Routes>
               <Route path="/" element={<Products/>}/>
               <Route path="/checkout" element={<Checkout/>}/>
           </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
