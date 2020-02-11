import React from 'react';
import Container from '@material-ui/core/Container';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import {setScrollPosition, hideIcon} from './actions/index';



import ScrollToProduct from './components/ScrollToProduct';

const useStyles = makeStyles(theme => ({
    root: {
      position: 'relative',
      left: '500px'
    }
  }));


const  App = () => {
    const classes = useStyles();
    const showBackToTopIcon = useSelector(state => state.showBackToTopIcon.showBackToTopIcon);
    const dispatch = useDispatch();
    
    const scrollToTop = () => {
        dispatch(setScrollPosition(0));
        dispatch(hideIcon());
    }

    return (
        <Container  maxWidth="sm">
            <ScrollToProduct />
            {showBackToTopIcon && <IconButton onClick={scrollToTop} className={classes.root} color="primary">
                <ArrowUpwardIcon />
             </IconButton> }
        </Container>
    );
}

export default App;
