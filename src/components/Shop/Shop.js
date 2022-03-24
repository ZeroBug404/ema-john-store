import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import './Shop.css';



const Products = () => {

    const [products, setProducts] = useState([])

    const [cart, setCart] = useState([])

    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }

  return (
    <div className="products">
        <div className="products-container">
            {
                products.map(product => <Product
                    key={product.id} 
                    product={product}
                    handleAddToCart={handleAddToCart}
                    ></Product>)
            }
        </div>

        <div>
            <h2>Summery Section</h2>
            <h4>Selected Items: {cart.length}</h4>
        </div>
    </div>
  );
};

export default Products;
