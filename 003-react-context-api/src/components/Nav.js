import { useEffect } from 'react';
import {Link} from 'react-router-dom';
import { AiFillShopping } from 'react-icons/ai';
import CartContext from '../CartContext'

const Nav = () => {
   const {item} = useEffect(CartContext)
   console.log(item); //for testing
    return (
      <nav>
         <Link to={"/"}>
            <h1>wear</h1>
         </Link>
         <Link to={"/checkout"}>
            <div className="cart">
                 <AiFillShopping />
                 <span>0</span>
            </div>
         </Link>
      </nav>
    )
  }


export default Nav
