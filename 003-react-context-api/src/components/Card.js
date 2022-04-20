import React, {useContext} from 'react';
import {IoShirtOutline} from 'react-icons/io5';
import {AiFillShopping} from 'react-icons/ai';
import CartContext from '../CartContext';
const Card = ({name,price}) => {
  {/*onClick={() => addItem(name,price)}*/}
  const {addToCart} = useContext(CartContext);
    return (
      <div onClick={() => addToCart(name,price)} className="card">
         <div className="produc-box">
             <IoShirtOutline />
         </div>
         {/*End of ..*/}
         <div className="purchase">
             <h3>{name}</h3>
             <AiFillShopping/>
         </div>
          {/*End of ..*/}
          <h4>{price}</h4>
      </div>
      
    );
  }


export default Card