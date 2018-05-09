import React from 'react';
import Aux from '../../hoc/Auxl'
import classes from './Star.css';
import MdStar from 'react-icons/lib/md/star';
import MdStarHalf from 'react-icons/lib/md/star-half';


let starMaker = (starCount) => {
    let stars = [];
    starCount % 1 !== 0 ? stars.push("half") : null;
    while(starCount >= 1) {
        stars.push("whole");
        starCount--;
    }

    stars.reverse();

    return (
        <Aux>
            {stars.map((item,idx)=>{
              return item === 'whole' ? <MdStar size={20} key={idx} /> : <MdStarHalf size={20} key={idx} />              
            })}
        </Aux>
    )

}

const star = (props) => (

    <Aux>
        <div className={classes.AlignRight}>
            {starMaker(props.starCount)}
        </div>

    </Aux>


)

export default star;