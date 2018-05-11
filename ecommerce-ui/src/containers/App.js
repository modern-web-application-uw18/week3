import React, { Component } from 'react';
import Layout from '../components/Layout/Layout'

class App extends Component {
  render() {
    return (
      <div>
        <Layout />
              {/* {mockDataArr.map((item,idx) => {
                return <Card item={item} key={idx}/>
              })} */}
        {/* </Layout> */}
      </div>
    );
  }
}

export default App;
