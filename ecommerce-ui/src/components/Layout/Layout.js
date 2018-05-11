import React, { Component } from 'react';
import Header from '../../components/Header/Header'
import classes from './Layout.css';
import mockDataArr from '../../assets/airbnbs.json';
import Card from '../../components/Card/Card';

class Layout extends Component { 

    state = {
        mockDataArr: mockDataArr
    }

mockDataHandler = (data) => {
    console.log("data from layout", data);
   
    this.setState((prevState, props) => {       
        let newState = prevState.mockDataArr;


        let transformedData = {
            title: data.title,
            houseType: data.houseType,
            image: data.image,
            location: {
                city: data.city,
                country: data.country
            },  
            payment: {
                cost: data.cost,
            },
            host: {
                name: data.name,
            },
            rating: {
                stars: 0,
                reviews: 0
            }
         }

        newState.push(transformedData);
        console.log(newState);
        return {mockDataArr: newState};
   });

}


render() {

    return (
        <div className={classes.Layout}>

            <Header dataHandler={this.mockDataHandler}/>

            <main className={classes.MainStage}>


                {this.state.mockDataArr.map((item, idx) => {
                    return <Card item={item} key={idx} />
                })}



            </main>

        </div>
        )
    }
}

export default Layout;
