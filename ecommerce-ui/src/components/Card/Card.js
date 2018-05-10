import React from 'react';
import classes from './Card.css';
import MdAddShoppingCart from 'react-icons/lib/md/add-shopping-cart';
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


             <div>
                {props.item.location.city}, {props.item.location.city}
            </div>

            <div style={{ textAlign: 'left'}}>
                <div className={classes.Name}>
                  {props.item.host.name}
                </div>
            </div>

            <div style={{textAlign: 'right' }}>
                    <button type="button" className="btn btn-default" style={{width:'45px',height:'35px',backgroundColor:'#5b5b5b',border:'0px'}}><MdAddShoppingCart size={20} style={{color:'#ffffff'}} /></button>
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
