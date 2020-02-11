import React, { useRef, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { useSelector, useDispatch } from 'react-redux';
import { setScrollPosition, fetchProducts, showIcon } from '../actions/index';


const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        position: 'relative',
        maxHeight: 430,
        marginLeft: '0.7em',
        overflow: 'auto'
    },
    alphabet: {
        '& span a': {
            width:'100%'
        }
    },
    listSectionHeader: {
        padding: '10px 16px',
        fontSize: 'Larger',
        fontWeight: 'Bold',
        backgroundColor: 'inherit'
    }
  }));

const ScrollToProduct = () => {
    const classes = useStyles();
    const alphabets = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z","#"];
    const products = useSelector(state => state.products);
    const scrollPosition = useSelector(state => state.scrollPosition.scrollPosition);
    const showBackToTopIcon = useSelector(state => state.showBackToTopIcon.showBackToTopIcon);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    const productRef = useRef([]);
    const containerElementRef = useRef()

    const handleScrollTo = (event) => {
        const targetId = event.currentTarget.id.split('-')[0];
        const element = productRef.current.find((currentElement) => currentElement.id === targetId);
        element.scrollIntoView();
        dispatch(showIcon());
    }

    const AddToProductRef = (el) => {
        if (el && !productRef.current.includes(el)) {
            productRef.current.push(el);
        }
    }

    useEffect(() => {
        if(!scrollPosition) {
            containerElementRef.current.scrollTop = 0;
        }
    }, [scrollPosition]);

    const handleScrollToShowButton = () => {
        if(containerElementRef.current.scrollTop) {
            !scrollPosition && dispatch(setScrollPosition(containerElementRef.current.scrollTop));
            !showBackToTopIcon && dispatch(showIcon());
        }
    }

    return (
        <div>
            
            <div>
                {alphabets.map((alphabet, id) => {
                    return (
                        <Button data-testid={`${alphabet}-${id}`} onClick={handleScrollTo} className={classes.alphabet} disabled={!products[alphabet]} id={`${alphabet}-${id}`} key={`${alphabet}-${id}`} color="primary">
                            {alphabet}
                        </Button> 
                    );
                })}
            </div>
            <div ref={containerElementRef} className={classes.root} onScroll={handleScrollToShowButton} id="containerElement">
                {products && Object.keys(products).map( (alphabet, id) => (
                    <React.Fragment key={id}>
                        <div ref={AddToProductRef} className={classes.listSectionHeader} id={`${alphabet}`} key={`${alphabet}-${id}`} name={`${alphabet}`} > {alphabet} </div>
                        <Divider />
                        {products[alphabet].map( (product, id) => (
                            <ListItem key={`item-${id}-${product}`}>
                                <ListItemText primary={product} />
                            </ListItem>
                        ))}
                    </React.Fragment>
                )) }
            </div>
        </div>
    );
}

export default ScrollToProduct;