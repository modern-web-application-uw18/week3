import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddButton extends Component {

    render() {

        const hasDescription = () => {
            if (description) {
                return (
                    <span> &middot; {description}</span>
                )
            } else {
                return null;
            }
        }

        return (
            <div>${cost} per night {hasDescription()}</div>
        );
    }
}

export default AddButton;
