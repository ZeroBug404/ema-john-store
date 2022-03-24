/* eslint-disable no-unused-vars */
import React from 'react';
import './Product.css'

const Product = (props) => {
    // console.log(props);
    const {handleAddToCart} = props
    const {name, img, seller, price, ratings} = props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h3>{name}</h3>
                <p>Price: ${price}</p>
                <p>Manufracturer: <small>{seller}</small></p>
                <p>Ratings: <small>{ratings}</small></p>
            </div>
            <button onClick={() => handleAddToCart(props.product)} className='btn-cart'>
                <p>Add To Cart</p>
            </button>
        </div>
    );
};

export default Product;