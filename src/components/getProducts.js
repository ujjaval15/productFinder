import { useState, useEffect} from 'react';
import axios from 'axios';

export default () => {
    const [products, setProducts] = useState({});

    const fetchProductsList = async () => {
        let obj = {};
        const res = await axios.get('http://localhost:4200/alphabetsWordsList');
        res.data.forEach(product => {
            if(obj[product.slice(0, 1)]) {
                obj[product.slice(0, 1)].push(product);
            } else {
                obj[product.slice(0, 1)] = [product]
            }
        });  
    
        // console.log("productsfilter = " +  obj);
        setProducts(obj);
    }

    useEffect(() => {
        fetchProductsList();
    }, []);
    return products;
}