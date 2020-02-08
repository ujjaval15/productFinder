import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';



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
    const [scrollPosition, setScrollPosition] = useState(null);

    const handleScroll = (scrollTop) => {
        setScrollPosition(scrollTop);
        if(scrollTop) {
            setBackToTopIcon(true);
        }   
    }
    
    const scrollToTop = () => {
        setScrollPosition(0);
        setBackToTopIcon(false);
    }
    const handleBackToTopIcon = () => {
        setBackToTopIcon(true);
    }
    return (
        <Container  maxWidth="sm">
            <ScrollToProduct scrollPosition={scrollPosition} handleScroll={handleScroll} handleBackToTopIcon={handleBackToTopIcon}/>
            {showBackToTopIcon && <IconButton onClick={scrollToTop} className={classes.root} color="primary">
                <ArrowUpwardIcon />
             </IconButton> }
        </Container>
    );
}

export default App;
