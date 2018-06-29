import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Host extends Component {
    render() {

        const isSuperiorHost = () => {
            if ( this.props.host.isSuperhost ) {
                return ( <span> {this.props.host.name} &middot; Superhost </span> );
            }
            else {
                return ( <span> {this.props.host.name} </span> );
            }

        }

        return(
            <span> {isSuperiorHost()} </span>
        )
    };
}

Host.propTypes = {
    name: PropTypes.string.isRequired,
    isSuperhost: PropTypes.bool
}

Host.defaultProps = {
    name: "No name given",
    isSuperhost: false
}

export default Host;