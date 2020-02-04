import { useState, useEffect} from 'react';
import axios from 'axios';

export default () => {
    const [products, setProducts] = useState([]);

    const fetchProductsList = async () => {
        const res = await axios.get('http://localhost:4200/alphabetsWordsList');
        // console.log(res.data);
        setProducts(res.data);
    }

    // const alphabets = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z","#"];
    useEffect(() => {
        fetchProductsList();
    }, []);
    // console.log(alphabetsWords);
    return products;
}