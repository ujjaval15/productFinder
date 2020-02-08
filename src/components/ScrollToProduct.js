import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-scroll';

import getProducts from './getProducts';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        position: 'relative',
        maxHeight: 414,
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

const ScrollToProduct = ({backToTopIcon}) => {
    const classes = useStyles();
    const alphabets = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z","#"];
    const products = getProducts();

    const handleSetActive = () => {
        backToTopIcon();
    }

    return (
        <div>
            <div>
                {alphabets.map((alphabet, id) => {
                    return (
                        <Button className={classes.alphabet} disabled={!products[alphabet]}  key={`${alphabet}-${id}`} color="primary">
                            <Link activeClass="active" 
                                to= {`${alphabet}`}
                                spy={true} 
                                smooth={true} 
                                offset={0} 
                                duration={0} 
                                containerId="containerElement"
                                onSetActive={handleSetActive}
                                >
                                {alphabet}
                            </Link>
                        </Button> 
                    );
                })}
            </div>
            <div className={classes.root} id="containerElement">
                {Object.keys(products).map( (alphabet, id) => (
                    <React.Fragment key={id}>
                        <div className={classes.listSectionHeader} key={`${alphabet}-${id}`} name={`${alphabet}`} > {alphabet} </div>
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