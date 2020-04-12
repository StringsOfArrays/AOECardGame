import React, { FunctionComponent } from 'react';

// types
import { CardData } from '../types/types';

//styling
import cardStyle from '../style/card.module.scss';


const Card:FunctionComponent<{data:CardData, onClick: (card:CardData) => void, displayDelaySec: number}> = ({data, onClick, displayDelaySec}) => {

    return (
        <div className={cardStyle.container} onClick={() => {onClick(data)}} style={{animationDelay: `${displayDelaySec}s`}}>
            <svg
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            strokeLinejoin="round"
            strokeMiterlimit="2"
            clipRule="evenodd"
            viewBox="0 0 250 150"
            >
            <path
                d="M124.783-.435l125 150h-250l125-150z"
                transform="matrix(-1.61443 .00018 -.0001 -1 326.923 149.108)"
            />
            </svg>
            <div className={cardStyle.imageCropper}>
            <img
                src={data.picUrl}
                alt="person"
            />
            </div>
            <div className={cardStyle.textwrapper}>
                <h3>{data.name}</h3>
                <br/>
                <h4>Player Name</h4>
                <p>{data.playerName}</p>
                <br/>
                <h4>Asset</h4>
                <p>{data.asset}</p>
            </div>
        </div>
    )
}

export default Card;