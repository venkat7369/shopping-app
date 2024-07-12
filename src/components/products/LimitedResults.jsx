import {useState} from 'react';
import { useEffect } from 'react';


const LimitedResults = () => {

    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState("false");
    const [error, setError] = useState('null')

    useEffect = (() => {
        const FetchProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products?limit=5');
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
export default LimitedResults;