import React from 'react';
import Button from '@material-ui/core/Button';
import getProducts from './getProducts';

const Alphabets = (props) => {
    const  alphabetsWords = getProducts();
    // console.log('alphabets:'+ alphabets);
    const handleAlphabetClick = (event) => {
        props.handleAlphabetClick(event.currentTarget.id);
    }

    return (
        <div>
            {alphabetsWords.map((alphabet) => {
                return (
                    <Button onClick={handleAlphabetClick} key={alphabet.id} id={`${alphabet.id}`}  color="primary">
                        {alphabet.alphabet}
                    </Button> 
                );
            })}
        </div>
    );
}

export default Alphabets;