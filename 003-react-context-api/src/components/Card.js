import React from 'react'
import {IoShirtOutline} from 'react-icons/io5'
import {AiFillShopping} from 'react-icons/ai'
const Card = ({name,price}) => {
  {/*onClick={() => addItem(name,price)}*/}
    return (
      <div className="card">
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