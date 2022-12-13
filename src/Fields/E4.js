import '../Css/App.css';
import {PrimaryButton} from "@fluentui/react";
import UpArrow from "../Images/UpArrow.png";
import DownArrow from "../Images/DownArrow.png";
import LeftArrow from "../Images/LeftArrow.png";
import RightArrow from "../Images/RightArrow.png";
import { showString } from '../Utilities/ShowStringWithTimeout';

const E4 = ({
    openModal,
    moveLeft,
    moveUp,
    moveDown,
    moveRight,
    killedRoom,
    roomConfiguration,
    name,
}) => {
    const hasEvent = roomConfiguration === 5;
    const shouldFight = hasEvent && !killedRoom;

    const roomTitle = 'Summoning room';
    const monsterIntroduction = 'An etheral being charges towards you!';

    let FirstText = '';
    let SecondText = '';

    if (hasEvent) {
        FirstText = 'You somehow manage to slay the etheral being. Finally having time to look up you see a summoning circle covered in candles and a black book.';
        SecondText = 'Upon closer inspection of the book it appears its written in finish belonging to some dealog. Better get a move on before the owner comes back';
    } else {
        FirstText = 'Taking your time to around up you see a summoning circle covered in candles and a black book.';
        SecondText = 'Upon closer inspection of the book it appears its written in finish belonging to some dealog. Better get a move on before the owner comes back';
    }

    showString(FirstText, SecondText, 'first-text', 'second-text');

    const startFight = () => {
        openModal(true);
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

export {E4}