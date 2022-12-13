import '../Css/App.css';
import {PrimaryButton} from "@fluentui/react";
import UpArrow from "../Images/UpArrow.png";
import DownArrow from "../Images/DownArrow.png";
import LeftArrow from "../Images/LeftArrow.png";
import RightArrow from "../Images/RightArrow.png";
import { showString } from '../Utilities/ShowStringWithTimeout';

const B3 = ({
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
    const hasEvent = roomConfiguration === 1 || 3;
    const shouldFight = hasEvent && !killedRoom && name !== 'nervath';

    const roomTitle = 'Outlaw camp';
    const monsterIntroduction = 'A Polish man charges at you, enraged to not see Nervath! You better defend yourself!';

    let FirstText = '';
    let SecondText = '';

    if (hasEvent && name === 'nervath') {
        FirstText = 'You sneak along the outskirts of the camp. These are clearly lying, violent ruffians and you would want nothing to do with them!.. Wait.. Is that Kaghar?.. Suddenly one of them gets up to move and notices you. Instantly you realise you know all of these people, as he greets you with a smile and a wave!';
        SecondText = 'A chat and a hearthy meal later with your fellow ruffians, you feel great and ready to move on! Better toast with Simon to celebrate!';
        setHealth(health + 5);
    } else if (hasEvent) {
        FirstText = 'You manage to beat down the ruffian! The others stand in shock, speaking some absurd language that is completely unintelligble to you!';
        SecondText = 'Perhaps it is time to move on before they get over their shock?';
    } else {
        FirstText = 'An abandoned camp. The fire is still glowing, better not lollygag here!';
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
                                   disabled={false}>
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

export {B3}