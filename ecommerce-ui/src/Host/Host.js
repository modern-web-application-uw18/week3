import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Host extends Component {
    render() {

        const isSuperiorHost = () => {
            if ( this.props.host.isSuperhost ) {
                return ( <div> Superhost </div> );
            }
            else {
                return null;
            }

        }

        return(
            <div> {this.props.host.name} {isSuperiorHost()} </div>
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