import React, { FunctionComponent } from 'react';

// types
import { CardData } from '../types/types';

// components
import Card from './card';

// style
import cardGridStyle from '../style/cardGridStyle.module.scss';

const CardGrid:FunctionComponent<{data:Array<CardData>, onElementClicked: (card:CardData) => void }> = (props) => {
    return(
        <div className={cardGridStyle.container}>
            {props.data.map( (data, index) => <Card key={index} data={data} onClick={props.onElementClicked} displayDelaySec={index / 2}/>)}
        </div>
    );
}

export default CardGrid;