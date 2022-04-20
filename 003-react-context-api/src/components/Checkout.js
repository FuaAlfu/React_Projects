import React, { useContext } from 'react';
import CartContext from '../CartContext';

const Checkout = () => {
  const {items} = useContext(CartContext);
    return (
      <div className="nav">
         <h1>checkout</h1>
         <div className="shopping-bag">
            {items.map((item) => (
                <div>
                <h2>{item.name}</h2>
                <h2>{item.price}</h2>
                </div>
            ))}
         </div>
      </div>
    )
  }


export default Checkout