/* eslint-disable no-unused-vars */
import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';

const Orders = () => {
    const [products, setProducts] = useProducts([]);

    const [cart, setCart] = useCart(products)

    return (
        <div>
            <h2>{cart.length}</h2>
        </div>
    );
};

export default Orders;