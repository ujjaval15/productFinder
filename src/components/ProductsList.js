import React, { useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
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
    listSection: {
      backgroundColor: 'inherit',
    },
    ul: {
      backgroundColor: 'inherit',
      padding: 0,
    },
    listSubHeaderRoot: {
        color: '#252525',
        fontSize: 'large',
        fontWeight: 'bold',
        borderBottom: '1px solid black'
    }
  }));

const ProductsList = ({scrollPosition}) => {
    const classes = useStyles();
    const scrollContainer = useRef(null);
    const ProductsRef = useRef (Array.from({length: 27}, () => React.createRef()));
    const products = getProducts();

    useEffect(() => {
        if(scrollPosition){
            scrollContainer.current.scrollTop = ProductsRef.current[scrollPosition].current.offsetTop;
        } 
    },[scrollPosition]);

    return (
        <List ref={scrollContainer} className={classes.root} subheader={<li />}>
            {products.map(alphabetId => (
                <li key={`section-${alphabetId.id}`} className={classes.listSection}>
                <ul className={classes.ul}>
                    <ListSubheader ref={ProductsRef.current[alphabetId.id]} id={alphabetId.id} classes={{root:classes.listSubHeaderRoot}}>{alphabetId.alphabet}</ListSubheader>
                    {alphabetId.words.map(word => (
                    <ListItem key={`item-${alphabetId.id}-${word}`}>
                        <ListItemText primary={word} />
                    </ListItem>
                    ))}
                </ul>
                </li>
            ))}
        </List>
    );
}

export default ProductsList;