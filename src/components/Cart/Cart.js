import React from 'react';
import './Cart.css'

const Cart = (props) => {
    // console.log(props);
    const {cart} = props;
    // console.log(cart);

    let total = 0;
    let shipping = 0;
    for (const product of cart) {
        total = total + product.price;
        shipping = shipping + product.shipping;
    }

    const tax = parseFloat(total * 10/100);

    const grandTotal = total + shipping + tax;

    return (
        <div className='cart-info'>
            <h2>Order Summery</h2>
            <h4>Selected Items: {cart.length}</h4>
            <p>Total Price: ${total}</p>
            <p>Total Shipping: {shipping}</p>
            <p>Tax: {tax}</p>
            <p>Grand Total: {grandTotal}</p>
        </div>
    );
};

export default Cart;