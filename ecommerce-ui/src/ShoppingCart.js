import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import ExpansionPanel from 'material-ui/ExpansionPanel';
import ExpansionPanelDetails from 'material-ui/ExpansionPanel/ExpansionPanelDetails';
import ExpansionPanelSummary from 'material-ui/ExpansionPanel/ExpansionPanelSummary';
import ExpansionPanelActions from 'material-ui/ExpansionPanel/ExpansionPanelActions';
import Typography from 'material-ui/Typography';
import ShoppingIcon from 'react-icons/lib/ti/shopping-cart';
import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';
import Badge from 'material-ui/Badge';
import Styles from 'material-ui/styles';

class ShoppingCartPanel extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange(e) {
    console.log(e.target.value);
    this.props.onPropertyAdded(e.target.value);
  }

  printOut(e) {
    console.log(this.props.property.title);
  }

  render() {
    const myStyles = theme => ({
      root: {
        width: '100%',
      },
      heading: {
        fontSize: theme.typography.pxToRem(15),
      },
      secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
      },
      icon: {
        verticalAlign: 'bottom',
        height: 20,
        width: 20,
      },
      details: {
        alignItems: 'center',
      },
      column: {
        flexBasis: '33.33%',
      },
      helper: {
        borderLeft: `2px solid ${theme.palette.divider}`,
        padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
      },
      link: {
        color: theme.palette.primary.main,
        textDecoration: 'none',
        '&:hover': {
          textDecoration: 'underline',
        },
      },
    });
    
    const badgeStyle = theme => ({
        margin: {
          margin: theme.spacing.unit * 2,
        },
        padding: {
          padding: `0 ${theme.spacing.unit * 2}px`,
        },
      });

    const property = this.props.property;
    const title = JSON.stringify(property.title);

    return (
      <div>
      <ExpansionPanel >
        <ExpansionPanelSummary expandIcon={
            <Badge className={badgeStyle.margin} badgeContent={0} color="secondary">
                <ShoppingIcon />
            </Badge>} >
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={myStyles.details}>
          <div className={myStyles.column}>
            {title}
          </div>
          <div className={classNames(myStyles.column, myStyles.helper)}>
            <Typography variant="caption">
              Select your destination of choice<br />
              <a href="#sub-labels-and-columns" className={myStyles.link}>
                Learn more
              </a>
            </Typography>
          </div>
        </ExpansionPanelDetails>
        <Divider />
        <ExpansionPanelActions>
          <Button size="small" color="secondary" onClick={this.printOut}>
            Checkout
          </Button>
        </ExpansionPanelActions>
      </ExpansionPanel>
    </div>
    );
  }
  
}

ShoppingCartPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(Styles)(ShoppingCartPanel);