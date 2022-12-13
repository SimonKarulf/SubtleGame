import '../Css/App.css';
import {PrimaryButton} from "@fluentui/react";
import UpArrow from "../Images/UpArrow.png";
import DownArrow from "../Images/DownArrow.png";
import LeftArrow from "../Images/LeftArrow.png";
import RightArrow from "../Images/RightArrow.png";
import { showString } from '../Utilities/ShowStringWithTimeout';
import { CODE2, CODE3, CODE4 } from '../Utilities/Constants';

const E5 = ({
    openModal,
    moveLeft,
    moveUp,
    moveDown,
    moveRight,
    killedRoom,
    roomConfiguration,
    name,
    enteredCodes
}) => {
    const hasCompletedEvent = enteredCodes.includes(CODE4);
    const hasEvent = roomConfiguration === 4; //Svend event
    const shouldFight = false;

    const roomTitle = 'Southern Altar';
    const monsterIntroduction = '';

    let FirstText = '';
    let SecondText = '';

    if (hasEvent && name === 'svend') {
        FirstText = 'The room appears to be entirely empty apart from a summoning circle in the middle from candles.. Slowly something starts to shimmer infront of you.';
        SecondText = 'There is no doubting it. The spirit is you, perhaps this is the christmas spirit that Simon stole! However, no matter how much you try to interact with it, it wont budge. Perhaps you need the help of someone else?';
    } else if (hasEvent && name === 'svend' && hasCompletedEvent) {
        FirstText = 'The room appears to be entirely empty apart from a summoning circle in the middle from candles.. Slowly something starts to shimmer infront of you.';
        SecondText = 'The spirit takes shape and you can clearly see yourself in the spirit. It is like you are staring directly at your own freed Christmas spirit';
    } else if (hasEvent && hasCompletedEvent) { 
        FirstText = 'The room appears to be entirely empty apart from a summoning circle in the middle from candles.. Slowly something starts to shimmer infront of you.';
        SecondText = 'The spirit takes the shape of a giant troll, slowly merging into Svend. You can tell that it is clearly at peace and this person must have his christmas spirit back';
    } else if (hasEvent) {
        FirstText = 'The room appears to be entirely empty apart from a summoning circle in the middle from candles.. Slowly something starts to shimmer infront of you.';
        SecondText = 'Within seconds it takes the form of a flowing spirit in the shape of Svend. This must be someones christmas spirit! To help free it you must remind it what it loves most about Christmas. Write a message to the Grinch with your answer and see if you can free the spirit!';
    }
     else {
        FirstText = 'It seems like a spirit could appear here at any time. For now the room is entirely empty however, perhaps you best come back later..';
        SecondText = '';
    }

    showString(FirstText, SecondText, 'first-text', 'second-text');

    const startFight = () => {
        openModal();
    }

    return (
        <div className="generic-room">
            {!shouldFight ? (
            <div>
                <h1 className="generic-room-title" id='title'>{roomTitle}</h1>
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
                                   disabled={true}>
                    <img src={DownArrow} alt="down" width="20px"/>
                    </PrimaryButton>
                    <PrimaryButton width="50px" color="black" className="movement-button"
                                   onClick={moveRight}
                                   disabled={true}>
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

export {E5}