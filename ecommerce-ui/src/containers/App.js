import React, { Component } from 'react';
import Layout from '../components/Layout/Layout'
import Card from '../components/Card/Card';
import mockDataArr from '../assets/airbnbs.json';


class App extends Component {
  render() {
    return (
      <div>
        <Layout>

              {mockDataArr.map((item,idx) => {
                return <Card item={item} key={idx}/>
              })}

        </Layout>

      </div>
    );
  }
}

export default App;
