import '../Css/App.css';
import {PrimaryButton} from "@fluentui/react";
import UpArrow from "../Images/UpArrow.png";
import DownArrow from "../Images/DownArrow.png";
import LeftArrow from "../Images/LeftArrow.png";
import RightArrow from "../Images/RightArrow.png";
import { showString } from '../Utilities/ShowStringWithTimeout';

const C2 = ({
    openModal,
    moveLeft,
    moveUp,
    moveDown,
    moveRight,
    killedRoom,
    roomConfiguration,
    name,
}) => {
    const hasEvent = roomConfiguration === 3;
    const shouldFight = hasEvent && !killedRoom;

    const roomTitle = 'Creepy Corridor';
    const monsterIntroduction = 'A ghost apppeared behind you!';

    let FirstText = '';
    let SecondText = '';

    if (hasEvent) {
        FirstText = 'You managed to destroy the ghost behind you! Best keep on your toes down here!';
        SecondText = 'Ahead of you is a long dusty corridor, it does not seem so creepy after just killing a ghost here though. Overrated!';
    } else {
        FirstText = 'You enter a long creepy corridor. Something about this place gives you a bad feeling... Is something watching you from the shadows?';
        SecondText = 'Best keep moving on before the chill overtakes you.';
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
                                   disabled={true}>
                    <img src={UpArrow} alt="up" width="20px"/>
                    </PrimaryButton>
                    <PrimaryButton width="50px" color="black" className="movement-button"
                                   onClick={moveDown}
                                   disabled={true}>
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

export {C2}