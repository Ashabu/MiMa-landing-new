import React from 'react';
import { globalConfig } from '../../../declaration';
import { IGamesResponse } from '../../api/Api';
import './gameBox.scss'


interface  IGameProps {
    game: IGamesResponse
}
//https://mima-poker.cc/poker/game/iframe/connect/

const GameBox:React.FC<IGameProps> = ({game}) => {

    const renderCoverImage = (image_url: string | null) => {
        if (image_url === null) {
            return "/table.jpg";
        } else if (
            !process.env.NODE_ENV ||
            process.env.NODE_ENV === "development"
        ) {
            return "http://localhost:8000" + image_url;
        } else {
            return image_url;
        }
    };

    return (
        <div className='game-box'>
            <a href={`${globalConfig.api_URL}/login`}>
                <img src={renderCoverImage(game.cover_image)} alt='' style={{transform: 'scale(1)'}}/>
                <span style={{opacity: 0}}>
                    <div></div>
                </span>
                <div>{game.name}</div>
            </a>
        </div>
    );
};

export default GameBox;