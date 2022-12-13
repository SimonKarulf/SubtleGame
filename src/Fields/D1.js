import '../Css/App.css';
import {PrimaryButton} from "@fluentui/react";
import UpArrow from "../Images/UpArrow.png";
import DownArrow from "../Images/DownArrow.png";
import LeftArrow from "../Images/LeftArrow.png";
import RightArrow from "../Images/RightArrow.png";
import { showString } from '../Utilities/ShowStringWithTimeout';

const D1 = ({
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
    const hasEvent = roomConfiguration === 1 || roomConfiguration === 4;
    const shouldFight = hasEvent && !killedRoom && name !== 'luna';

    const roomTitle = 'Pink Room';
    const monsterIntroduction = 'A mad pink woman charges at you!';

    let FirstText = '';
    let SecondText = '';

    if (hasEvent && name === 'luna') {
        FirstText = 'You enter the brightest pink room you have ever seen. Infact, this is outside of your wildest fantasy! How is something THIS PINK?!';
        SecondText = 'A woman fully dressed in pink, with pink makeup and hair sees you and greets you! Happy to see a fellow pink-hair she gives you a pink health potion!.. Thank the lord you were the one to find this place';
        setHealth(health + 5);
    } else if (hasEvent) {
        FirstText = 'The woman lies at your feet defeated. You notice the room around you, the walls are pink, the floors are pink. The woman is even fully clad in pink clothes..';
        SecondText = 'Perhaps someone else would love this room?';
    } else {
        FirstText = 'You walk into a huge pink room. The walls are pink, the floors are pink, the ceiling is pink. EVERYTHING IS PINK.';
        SecondText = 'Who on earth loves pink this much??';
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

export {D1}