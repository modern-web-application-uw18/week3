import React from 'react';
import classes from './Star.css';
import MdStar from 'react-icons/lib/md/star';
import MdStarHalf from 'react-icons/lib/md/star-half';
import PropTypes from 'prop-types';




const star = (props) => {

    let starArrMaker = (starCount) => {
        let stars = [];
        if(starCount % 1 !== 0) {stars.push("half")};
        
        while(starCount >= 1) {
            stars.push("whole");
            starCount--;
        }
        return stars.reverse();
    }


    return (
        <div className={classes.AlignRight}>
            {starArrMaker(props.starCount).map((item, idx) => {
                return item === 'whole' ? <MdStar className={classes.Star} key={idx} /> : <MdStarHalf className={classes.Star} key={idx} />
            })}
        </div>

    )
}


star.propTypes = {
    starCount: PropTypes.number.isRequired
}



export default star;