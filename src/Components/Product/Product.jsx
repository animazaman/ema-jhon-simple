import React from 'react';
import './Product.css';

const Product = (props) => {
    //console.log(props.product)
    const {img, name, seller, quantity,ratings, price} = props.product;
    return (
        <div className='product'>
            <img src={img}></img>
            <h6>{name}</h6>
        </div>
    );
};

export default Product;