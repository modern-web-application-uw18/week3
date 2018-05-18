// I CANNOT GET THIS TO PASS, I just get endless error messages about how addItemToCart or params is undefined

import React from 'react';
import BnbDetails from './BnbDetails';
import ReactTestRenderer from 'react-test-renderer';
import airbnbs from '../airbnbs.json';
import PropTypes from 'prop-types'


// export default class WithContext extends React.Component {
//   static contextTypes = {
//     params: PropTypes.any,
//     addItemToCart: PropTypes.any,
//   }
//   // fake addItemToCart function to try to get test below to pass
//   // object: airbnbs[0].id,
//   // params: {
//   //   id: this.object.id
//   // }
//   addItemToCart = (purchaseItem) => {
//     const test = purchaseItem;
//   };

//   render () {
//     return (
//       <div><BnbDetails obj={airbnbs[0]} params={params} addItemToCart={addItemToCart()} /></div>
//     )
//   }
// }

describe('BnbDetails component', () => {
  it('should render', () => {
    // const component = ReactTestRenderer.create(
    //     <WithContext params={{ id: airbnbs[0].id }} />
    // );
     const component = ReactTestRenderer.create(<BnbDetails  params={{id: airbnbs[0].id}} addItemToCart={"test"} />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
