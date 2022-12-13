import '../Css/App.css';
import {PrimaryButton} from "@fluentui/react";
import UpArrow from "../Images/UpArrow.png";
import DownArrow from "../Images/DownArrow.png";
import LeftArrow from "../Images/LeftArrow.png";
import RightArrow from "../Images/RightArrow.png";
import { showString } from '../Utilities/ShowStringWithTimeout';

const A2 = ({
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
    const hasEvent = roomConfiguration === 1 || 2;
    const shouldFight = false

    const roomTitle = 'Rice cooker storage';
    const monsterIntroduction = '';

    let FirstText = '';
    let SecondText = '';

    if (hasEvent && name === 'swift') {
        FirstText = 'A room full of rice sacks and ricecookers that somehow seem to function without electricity. Something feels strangely familiar about this room. Though you feel hungry the instant you enter this room, you expertly manage to cook a portion of rice and have your fill.';
        SecondText = 'Thank god it was you that found this room and not someone else.';
        setHealth(health + 5);
    } else if (hasEvent) {
        FirstText = 'A room full of rice sacks and ricecookers that somehow seem to function without electricity. Something feels strangely familiar about this room. Though you feel hungry the instant you enter this room, you manage to ruin every single ricegrain you touch. Defeated you eat the worst food you have ever eaten in your life.. so far!.';
        SecondText = 'No matter what you do you cant seem to lose the horrible taste! It is even spreading through the screen! Quick, take a 3 sips of your favourite beverage!';
        setHealth(Math.round(health/2));
    } else {
        FirstText = 'A room full of rice sacks and rice cookers.. What on earth is this? I suppose this is what happens when a madman plans a hideout.';
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

export {A2}