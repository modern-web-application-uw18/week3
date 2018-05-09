import React from 'react';
import classes from './Card.css';
import MdAddCircleOutline from 'react-icons/lib/md/add-circle-outline';
import Star from '../Star/Star';




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
            <div style={{width:'200px'}}>
                {props.item.houseType}
            </div>
            &nbsp;&nbsp;
            <Star starCount={props.item.rating.stars} />
        </div>


        <div className={classes.LowerRight}>
            {props.item.houseType}

            <a href="#" className="badge badge-success"><MdAddCircleOutline size={30} /></a>
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
