import React, { Component } from 'react';
import Header from '../../components/Header/Header'
import classes from './Layout.css';
import mockDataArr from '../../assets/airbnbs.json';
import Card from '../../components/Card/Card';

class Layout extends Component {

    state = {
        mockDataArr: mockDataArr,
        cartContent: []
    }


    addListingToTheCartHandler = (listing) => {
        this.setState((prevState, props) => {
            let transformedState = [...prevState.cartContent];
            transformedState.push(listing);
            return { cartContent: transformedState }
        });
    }

    removeListingFromTheCartHandler = (listing) => {
        this.setState((prevState, props) => {
            let transformedState = [...prevState.cartContent];

            transformedState.filter(
                (obj, idx) => obj.title === listing.title ? transformedState.splice(idx, 1) : null //remove item from the array based on the title
            );
            return { cartContent: transformedState }

        });
    }


    mockDataHandler = (data) => {
        this.setState((prevState, props) => {
            let newState = [...prevState.mockDataArr];

            //setting default data in case of any of the elements missing
            let transformedData = {
                title: data.title ? data.title : 'New Listing',
                houseType: data.houseType ? data.houseType : 'Apartment',
                image: data.image ? data.image : 'https://cdn.geekwire.com/wp-content/uploads/2017/03/seattle-630x359.jpg',
                location: {
                    city: data.city ? data.city : "City",
                    country: data.country ? data.countr : "Country"
                },
                payment: {
                    cost: data.cost ? parseInt(data.cost,10) : 0, //making sure this is an integer to avoid issues when calculating total
                },
                host: {
                    name: data.name ? data.name : 'Host',
                },
                rating: {
                    stars: 0,
                    reviews: 0
                }
            }

            newState.push(transformedData);
            return { mockDataArr: newState };
        });

    }


    render() {

        return (
            <div className={classes.Layout}>

                <Header
                    dataHandler={this.mockDataHandler}
                    cartContent={this.state.cartContent}
                    removeListingFromTheCartHandler={this.removeListingFromTheCartHandler}
                    mockDataArr={this.state.mockDataArr}
                />

                <main className={classes.MainStage}>


                    {this.state.mockDataArr.map((item, idx) => {
                        //only show listings that are not in the cart already
                        return !this.state.cartContent.filter((obj) => obj.title === item.title).length ? <Card
                            item={item}
                            key={idx}
                            addListingToTheCartHandler={this.addListingToTheCartHandler}
                        /> : null;
                    })}



                </main>

            </div>
        )
    }
}

export default Layout;
