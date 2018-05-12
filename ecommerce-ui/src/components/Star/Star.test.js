import React from 'react';
import { shallow, mount} from 'enzyme';
import Star from './Star';
import classes from './Star.css';
import MdStar from 'react-icons/lib/md/star';
import MdStarHalf from 'react-icons/lib/md/star-half';

describe('<Star />', () => {
    it('Should have three MdStar elements', () => {
        const wrapper = mount(<Star starCount={3} />);
        expect(wrapper.find(MdStar)).toHaveLength(3);
        expect(wrapper).toMatchSnapshot();

    })
})