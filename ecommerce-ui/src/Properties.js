import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Checkbox from 'material-ui/Checkbox';
import FavoriteBorder from 'react-icons/lib/md/favorite-border';
import Favorite from 'react-icons/lib/md/favorite';
import Subheader from 'material-ui/List/ListSubheader';
import RaisedButton from 'material-ui/Button';
import tileData from './airbnb.json';
import Styles from 'material-ui/styles';
import Grid from 'material-ui/Grid'

class TitlebarGridList extends Component {
  constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    console.log(e.target.value);
    this.props.onPropertyAdded(e.target.value);
  }

  render() {
    const myStyles = {
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        overflow: 'hidden',
        flexGrow: 1,
      },
      gridList: {
        height: 450,
      },
    };

    return (
      <div className={myStyles.root}>
      <Grid container spacing={12}>
      <Grid item xs={4}>
      </Grid>
        <Grid item xs={4}>
          <GridList cellHeight={300} cols={1} className={myStyles}>
            <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
              <Subheader component="div">Available Properties</Subheader>
            </GridListTile>
            {tileData.map(tileData => (
              <GridListTile key={tileData.image}>
                <img src={tileData.image} alt={tileData.title} />
                <GridListTileBar
                  title={tileData.title}
                  subtitle={<span><b>{tileData.location.city}</b></span>}
                  actionIcon={<Checkbox className={myStyles.icon}
                      checkedIcon={<Favorite/>}
                      uncheckedIcon={<FavoriteBorder/>}
                      labelPosition='right'
                      onClick={this.handleChange}
                      value={JSON.stringify(tileData)}
                    />}
                />
              </GridListTile>
            ))}
          </GridList>
        </Grid>
        <Grid item xs={4}>
        </Grid>
      </Grid>
    </div>
    )
  }
}

TitlebarGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};
  
export default withStyles(Styles)(TitlebarGridList);
