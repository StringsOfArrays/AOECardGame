import React, { FunctionComponent } from 'react';

// types
import { CardData } from '../types/types';

// style
import selectedCardDisplayStyle from '../style/selectedCardDisplay.module.scss';

const SelectedCardDisplay:FunctionComponent<CardData> = (props) => {
    return(
        <div className={selectedCardDisplayStyle.container}>
            <div className={selectedCardDisplayStyle.textwrapper}>
                <h2 className={selectedCardDisplayStyle.name}>{props.name}</h2>
                <h4>Player Name</h4>
                <p>{props.playerName}</p>
                <h4>Asset</h4>
                <p>{props.asset}</p>
            </div>
                <img src={props.picUrl} alt='a person'/>
        </div>
    );
}

export default SelectedCardDisplay;