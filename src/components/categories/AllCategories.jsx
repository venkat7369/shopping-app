import {useState} from 'react';
import { useEffect } from 'react';


const AllCategories = () => {

    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect (() => {
        const FetchProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products/categories');
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        FetchProducts();
    }, []);
        
    if (loading) {
        return <p>Data is Loading</p>;
    }
    if (error) {
        return <p>Error occured</p>
    }

    return (
        <div>
          {product && product.length ? product.map((product) => (
            <div key={product.id}>
              <h2>{product.title}</h2>
              <p>Price: ${product.price}</p>
              <p>{product.description}</p>
              <img src={product.image} alt={product.title} style={{ width: '200px' }} />
            </div>
          )) : (
            <p>No product data available</p>
          )}
        </div>
      );
}
export default AllCategories;