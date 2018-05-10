import React from 'react';
import Cart from '../../components/Cart/Cart'
import classes from './Layout.css';

const layout = (props) => (
    <div className={classes.Layout}>

        <Cart />

        <main className={classes.MainStage}>
            {props.children}
        </main>

    </div>
);

export default layout;
