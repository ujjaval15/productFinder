import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import { animateScroll as scroll } from 'react-scroll';



import ScrollToProduct from './components/ScrollToProduct';

const useStyles = makeStyles(theme => ({
    root: {
      position: 'relative',
      left: '500px'
    }
  }));


const  App = () => {
    const classes = useStyles();
    const [showBackToTopIcon, setBackToTopIcon] = useState(false);

    
    const scrollToTop = () => {
        scroll.scrollToTop();
        setBackToTopIcon(false);
    }
    const backToTopIcon = () => {
        setBackToTopIcon(true);
    }
    return (
        <Container  maxWidth="sm">
            <ScrollToProduct backToTopIcon={backToTopIcon}/>
            {showBackToTopIcon && <IconButton onClick={scrollToTop} className={classes.root} color="primary">
                <ArrowUpwardIcon />
             </IconButton> }
        </Container>
    );
}

export default App;

// sample = [“alen”, “beareu”, “jeans”, “calvin”, “12345”]
// object = {a: [“alen”], b: [“beareu”], c: [“calvin], j:[“jeams”]