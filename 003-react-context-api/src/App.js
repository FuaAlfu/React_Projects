import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Nav from './components/Nav';
import Checkout from 'components/Checkout';
import Products from './components/Products';
import {CartProvider} from './CartContext'

function App() {
  const item = 0;
{/*
  const addItem = (name, price) => {
    setItem({name, price});
  };*/}
  return (
    
    <div className="App">
    <CartProvider>
        <BrowserRouter>
           <Nav item={item}/>
           <Routes>
               <Route path="/" element={<Products/>}/>
               <Route path="/checkout" element={<Checkout/>}/>
           </Routes>
        </BrowserRouter>
    </CartProvider>
    </div>
  );
}

export default App;
