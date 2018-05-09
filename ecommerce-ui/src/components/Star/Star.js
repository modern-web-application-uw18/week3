import React from 'react';
import classes from './Star.css';
import MdStar from 'react-icons/lib/md/star';
import MdStarHalf from 'react-icons/lib/md/star-half';


let starArrMaker = (starCount) => {
    let stars = [];
    starCount % 1 !== 0 ? stars.push("half") : null;
    
    while(starCount >= 1) {
        stars.push("whole");
        starCount--;
    }
    return stars.reverse();
}

const star = (props) => (
        <div className={classes.AlignRight}>
            {starArrMaker(props.starCount).map((item,idx)=>{
               return item === 'whole' ? <MdStar size={20} key={idx} /> : <MdStarHalf size={20} key={idx} />              
             })}
        </div>
    
)

export default star;