import React from 'react';
import Cart from '../../components/Cart/Cart'
import classes from './Layout.css';

const layout = (props) => (
    <div className={classes.Layout}>
      
        <Cart />

        <main>
            {props.children}
        </main>

        <div style={{display:'flex',height:'100%',backgroundColor:'red'}}></div>
    </div>
);

export default layout;
