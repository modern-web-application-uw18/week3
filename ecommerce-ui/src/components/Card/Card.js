import React from 'react';
import classes from './Card.css';

import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const layout = (props) => (


    // <div className="card" style={{ width: '18rem' }}>
    //     <img className="card-img-top" src={props.item.image} alt="Card image cap" />
    //     <div className="card-body">
    //         <h5 className="card-title">Card title</h5>
    //         <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    //         <a href="#" className="btn btn-primary">Go somewhere</a>
    //     </div>
    // </div>


    <div className={classes.Card} style={{ backgroundImage: `url(${props.item.image})` }}>


        <div className={classes.Title}>
            {props.item.title}
        </div>


        <div className={classes.UpperRight}>

            <div className={classes.AlignRight}>
                $ {props.item.payment.cost}
      </div>

        </div>





        <div className={classes.Rating}>
            {props.item.houseType}
        </div>


        <div className={classes.LowerRight}>
            {props.item.houseType}
        </div>

    </div>







    //         <div className={classes.Card} style={{ backgroundImage: `url(${props.item.image})` }}>

    //         <div className={classes.Title}>
    //         {props.item.title}
    //     </div> 

    // <div className='container' style={{paddingLeft: 0, paddingRight: 0}}>

    // <div className='container' className={classes.nopadding}>
    //         <div className='row'>
    //             <div className="col">
    //                 <div className={classes.Title}>
    //                     {props.item.title}
    //                 </div>
    //             </div>

    //             <div className="col">
    //             <div className={classes.UpperRight}>
    //                     {props.item.houseType}
    //                 </div>
    //              </div>
    //         </div>

    //         <div className='row'>
    //             <div className="col">

    //                 <div className={classes.Rating}>
    //                     {props.item.houseType}
    //                 </div>


    //             </div>

    //             <div className="col">
    //             <div className={classes.LowerLeft}>
    //                     {props.item.houseType}
    //                 </div>
    //              </div>
    //         </div>
    //     </div>
    //     </div>
    //     </div>

)


export default layout;
