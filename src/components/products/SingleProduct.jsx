import React, { useState, useEffect } from 'react';

const SingleProduct = () => {
    const [product, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const FetchProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products/1');
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        FetchProducts();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
      }
      
      if (error) {
        return <p>Error fetching product data.</p>;
      }
      
      return (
        <div>
          {product ? (
            <div>
              <h2>{product.title}</h2>
              <p>Price: ${product.price}</p>
              <p>{product.description}</p>
              <img src={product.image} alt={product.title} style={{ width: '200px' }} />
            </div>
          ) : (
            <p>No product data available</p>
          )}
        </div>
      );
      
}
export default SingleProduct;
