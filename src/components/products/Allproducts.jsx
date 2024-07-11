import React from "react";
import { useState, useEffect } from "react";

const Allproducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.occured}</div>;
    }


    return (
        <div>
            <h1 className="bg-lime-500">ALL the Products</h1>
            <ui>
                {products.map((product) => (
                    <li key={product.id}>
                        <h2>{product.title}</h2>
                        <p>${product.price}</p>
                        <p>{product.category}</p>
                        <p>{product.description}</p>
                        <img src={product.image} alt={product.title} width={300}/>
                        
                    </li>
                ))}
            </ui>


        </div>
    );
}
export default Allproducts;