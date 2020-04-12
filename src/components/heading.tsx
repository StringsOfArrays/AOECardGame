import React from 'react';

//style
import headingStyle from '../style/heading.module.scss';

const Heading = () => {
    return(
        <div className={headingStyle.container}>
            <img src={require('../images/AOE-Logo.svg')} alt='AOE Logo' className={headingStyle.logo}/>
            <h1 className={headingStyle.name}>Card Game</h1>
        </div>
    );
}

export default Heading;