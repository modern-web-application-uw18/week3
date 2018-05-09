import React from 'react';
import classes from './Card.css';
import MdAddCircleOutline from 'react-icons/lib/md/add-circle-outline';
import Star from '../Star/Star';




const layout = (props) => (


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
            <div style={{ width: '200px' }}>
                {props.item.houseType}
            </div>
            &nbsp;&nbsp;
            <Star starCount={props.item.rating.stars} />
            <span style={{ fontSize: '13px' }}>
                ({props.item.rating.reviews})
             </span>
        </div>


        <div className={classes.LowerRight}>


            <div style={{ width: '25000px' }}>
                {props.item.location.city}, {props.item.location.city}
            </div>

            <div style={{ height: '150px', width: '100%', height: '100%', textAlign: 'right' }}>
                <div style={{ position: 'absolute', bottom: '30px', right: '150px',fontSize: '25px',color:'#f4b642' }}>
                  {props.item.host.name}
                </div>
            </div>

            <div style={{  width: '100%', height: '100%', textAlign: 'right' }}>
                <div style={{ position: 'absolute', bottom: '10px', right: '15px' }}>
                    <button type="button" className="btn btn-success" style={{width:'80px',height:'40px'}}><MdAddCircleOutline size={30} /></button>
                </div>
            </div>


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
