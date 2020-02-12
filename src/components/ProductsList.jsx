import React from 'react';
import {Product} from './Product';
import './productsgrid.css';

export const ProductsList = (props)=>(
    <div className='prod-grid'>
        {props.products.map(product=> (
                <Product key={product.key} name={product.name} price={product.price}/>                
            ))}
    </div>
)




