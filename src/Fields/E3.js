import '../Css/App.css';
import {PrimaryButton} from "@fluentui/react";
import UpArrow from "../Images/UpArrow.png";
import DownArrow from "../Images/DownArrow.png";
import LeftArrow from "../Images/LeftArrow.png";
import RightArrow from "../Images/RightArrow.png";
import { showString } from '../Utilities/ShowStringWithTimeout';

const E3 = ({
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
    const hasEvent = roomConfiguration === 4 || 3;
    const shouldFight = hasEvent && !killedRoom && name !== 'zukaca';

    const roomTitle = 'Drug den';
    const monsterIntroduction = 'A man frothing at the mouth charges at you screaming something about skooma';

    let FirstText = '';
    let SecondText = '';

    if (hasEvent && name === 'zukaca') {
        FirstText = 'You enter a.. wait... is that weed? Unable to resist you walk straight up to the group huddled on chairs around a small fire.';
        SecondText = 'Within seconds you are all friends. Bro, this was just what you needed! Better celebrate by toasting with the group!';
        setHealth(health + 5);
    } else if (hasEvent) {
        FirstText = 'The man falls to his knees.. You notice crates around the room with Skooma and Weed.';
        SecondText = 'Perhaps someone else would have been more comfortable here?';
    } else {
        FirstText = 'A turned off fire surrounded by wooden chairs.. There is that unmistakeable smell of weed.. Perhaps another time?';
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
                                   disabled={true}>
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

export {E3}