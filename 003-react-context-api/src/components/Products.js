import {useState} from 'react';
import Card from './Card';
import products from '../products';

const Products = () => {
    return (
      <div className="nav">
          {products.map((product) => (
              <Card name={product.name} price={product.price}/>
          ))}
      </div>
    )
  }


export default Products
