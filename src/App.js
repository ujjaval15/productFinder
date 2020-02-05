import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';

import Alphabets from './components/Alphabets';
import ProductsList from './components/ProductsList';

const useStyles = makeStyles(theme => ({
    root: {
      position: 'relative',
      left: '500px'
    }
  }));


const  App = () => {
    const classes = useStyles();
    const [scrollPosition, setScrollPosition] = useState('');
    const [showBackToTopIcon, setBackToTopIcon] = useState(false);

    const handleAlphabetClick = (id) => {
        setScrollPosition(id);
        setBackToTopIcon(true);
    }
    const handleBackToTop = () => {
        setScrollPosition(1);
        setBackToTopIcon(false);
    }
    return (
        <Container  maxWidth="sm">
            <Alphabets handleAlphabetClick = {handleAlphabetClick}/> 
            <ProductsList scrollPosition={scrollPosition}/>
            {showBackToTopIcon && <IconButton onClick={handleBackToTop} className={classes.root} color="primary">
                <ArrowUpwardIcon />
             </IconButton> }
        </Container>
    );
}

export default App;

// sample = [“alen”, “beareu”, “jeans”, “calvin”, “12345”]
// object = {a: [“alen”], b: [“beareu”], c: [“calvin], j:[“jeams”]