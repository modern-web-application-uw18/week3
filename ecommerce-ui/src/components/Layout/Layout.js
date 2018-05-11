import React from 'react';
import Header from '../../components/Header/Header'
import classes from './Layout.css';
import mockDataArr from '../../assets/airbnbs.json';
import Card from '../../components/Card/Card';

const layout = (props) => (
    <div className={classes.Layout}>

        <Header />

        <main className={classes.MainStage}>
           

            {mockDataArr.map((item,idx) => {
                return <Card item={item} key={idx}/>
              })}



        </main>

    </div>
);

export default layout;
