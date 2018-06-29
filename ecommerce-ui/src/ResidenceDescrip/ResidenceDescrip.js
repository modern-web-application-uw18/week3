import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Location from '../Location/Location.js';

class ResidenceDescrip extends Component {
    render() {
        return ( 
            <div className="ResidenceDescrip">
                <div className="Bolded">{this.props.houseType} &middot; <Location location={this.props.location}/></div>
            </div>
        );
    }    
}

ResidenceDescrip.propTypes = {

    // title: PropTypes.string.isRequired,
        houseType: PropTypes.string.isRequired

};

export default ResidenceDescrip;