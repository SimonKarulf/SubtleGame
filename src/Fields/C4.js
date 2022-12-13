import '../Css/App.css';
import {PrimaryButton} from "@fluentui/react";
import UpArrow from "../Images/UpArrow.png";
import DownArrow from "../Images/DownArrow.png";
import LeftArrow from "../Images/LeftArrow.png";
import RightArrow from "../Images/RightArrow.png";
import { showString } from '../Utilities/ShowStringWithTimeout';

const C4 = ({
    openModal,
    moveLeft,
    moveUp,
    moveDown,
    moveRight,
    killedRoom,
    roomConfiguration,
    name,
    health,
    setHealth
}) => {
    const hasEvent = roomConfiguration === 4 || roomConfiguration === 5;
    const shouldFight = false;

    const roomTitle = 'Meeting room';
    const monsterIntroduction = '';

    let FirstText = '';
    let SecondText = '';

    if (hasEvent && name === 'svend') {
        FirstText = 'You enter the room blinded by noise and light. It feels like everyone in Norway is inside this room, talking all at once, at volumes unfathomable to any normal person!';
        SecondText = 'Luckily you know ALOT of people, and somehow the noise does not bother you in the least. Its almost calming and you feel revived! Share a drink with the group and enjoy the people!';
        setHealth(health + 5);
    } else if (hasEvent) {
        FirstText = 'You enter the room blinded by noise and light. It feels like everyone in Norway is inside this room, talking all at once, at volumes unfathomable to any normal person!';
        SecondText = 'No normal human being can take this much noise from this many people! You feel your heart start to hurt immensely! Get out from here!';
        setHealth(Math.round(health/2));
    } else {
        FirstText = 'A large open space. It feels like there could be a giant mass of people in here. As you take a step you hear the sounds echo through the room.';
        SecondText = 'You shake thinking about the sound torture that could happen in here.';
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

export {C4}