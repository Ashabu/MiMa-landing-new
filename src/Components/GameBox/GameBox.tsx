import React from 'react';
import { globalConfig } from '../../../declaration';
import { IGamesResponse } from '../../api/Api';
import './gameBox.scss'


interface  IGameProps {
    game: IGamesResponse
}


const GameBox:React.FC<IGameProps> = (props) => {



    return (
        <div className='game-box'>
            <a href=''>
                <img src={globalConfig.api_URL+props.game.cover_image} alt='' style={{transform: 'scale(1)'}}/>
                <span style={{opacity: 0}}>
                    <div></div>
                </span>
                <div>{props.game.name}</div>
            </a>
        </div>
    );
};

export default GameBox;