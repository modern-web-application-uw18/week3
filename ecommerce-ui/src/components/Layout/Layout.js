import React from 'react';
import Header from '../../components/Header/Header'
import classes from './Layout.css';

const layout = (props) => (
    <div className={classes.Layout}>

        <Header />

        <main className={classes.MainStage}>
            {props.children}
        </main>

    </div>
);

export default layout;
