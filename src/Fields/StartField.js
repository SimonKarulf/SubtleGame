import '../Css/App.css';
import {PrimaryButton} from "@fluentui/react";
import UpArrow from "../Images/UpArrow.png";
import DownArrow from "../Images/DownArrow.png";
import LeftArrow from "../Images/LeftArrow.png";
import RightArrow from "../Images/RightArrow.png";
import { showString } from '../Utilities/ShowStringWithTimeout';
import { checkArray } from '../Utilities/CheckMatchesInArray';
import { CODE1, CODE2, CODE3, CODE4, CODE5 } from '../Utilities/Constants';

const StartField = ({
    openModal,
    moveLeft,
    moveUp,
    moveDown,
    moveRight,
    killedRoom,
    roomConfiguration,
    name,
    enteredCodes,
}) => {

    const monsterIntroduction = 'An enraged Simon appears as the last candle has been lit! He charges at you drunk and filled with rage!';
    const FirstText = 'The center room of this horrid dungeon. The stench is horrible, it is filled with rotten christmas sweets and destroyed presents. This must be where Simon lost his final braincell!';
    let SecondText = 'Seems there is an altar in the middle of this disgusting sight, surrounded by 5 unlit candles.';
    
    const possibleCodes = [CODE1, CODE2, CODE3, CODE4, CODE5]
    const matchedStrings = checkArray(possibleCodes, enteredCodes, 5);
    const shouldFight = matchedStrings === 5 && !killedRoom;

    if (matchedStrings === 1) {
        SecondText = 'Seems there is an altar in the middle of this disgusting sight, surrounded by 4 unlit candles and one lit candle.'
    } else if (matchedStrings === 2) {
        SecondText = 'Seems there is an altar in the middle of this disgusting sight, surrounded by 3 unlit candles and 2 lit candles.'
    } else if (matchedStrings === 3) {
        SecondText = 'Seems there is an altar in the middle of this disgusting sight, surrounded by 2 unlit candles and 3 lit candles.'
    } else if (matchedStrings === 4) {
        SecondText = 'Seems there is an altar in the middle of this disgusting sight, surrounded by 1 unlit candles and 4 lit candles.'
    } else if (matchedStrings === 5) {
        SecondText = 'You managed to kill the grinch that inhabited Simon! You have no doubt saved christmas for the future to come! Raise a toast with your teammates and celebrating beating the evil Ginger!'
    }
    
    const startFight = () => {
        openModal(true);
    }

    showString(FirstText, SecondText, 'first-text', 'second-text');

    return (
        <div className="generic-room">
            {!shouldFight ? (
            <div>
                <h1 className="generic-room-title" id='title'>Grinches lair</h1>
                <h2 className="generic-room-text" id='first-text'/>
                <h2 className="generic-room-text" id='second-text'/>
                <div className="movement-buttons">
                    <PrimaryButton width="50px" color="black" className="movement-button"
                                   onClick={moveLeft}
                                   disabled={false}>
                        <img src={LeftArrow} alt="left" width="20px"/>
                    </PrimaryButton>
                    <PrimaryButton width="50px" color="black" className="movement-button"
                                   onClick={moveUp}
                                   disabled={false}>
                    <img src={UpArrow} alt="up" width="20px"/>
                    </PrimaryButton>
                    <PrimaryButton width="50px" color="black" className="movement-button"
                                   onClick={moveDown}
                                   disabled={false}>
                    <img src={DownArrow} alt="down" width="20px"/>
                    </PrimaryButton>
                    <PrimaryButton width="50px" color="black" className="movement-button"
                                   onClick={moveRight}
                                   disabled={false}>
                    <img src={RightArrow} alt="right" width="20px"/>
                    </PrimaryButton>
                </div>
            </div>
            ) : (
                <div className="generic-room">
                    <h1 className="generic-room-title">{monsterIntroduction}</h1>
                    <PrimaryButton onClick={startFight}>
                        start combat
                    </PrimaryButton>
                </div>
            )}
        </div>
    )
}

export {StartField}