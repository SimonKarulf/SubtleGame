import '../Css/App.css';
import {PrimaryButton} from "@fluentui/react";
import UpArrow from "../Images/UpArrow.png";
import DownArrow from "../Images/DownArrow.png";
import LeftArrow from "../Images/LeftArrow.png";
import RightArrow from "../Images/RightArrow.png";

const MessyRoom = ({
    killedRoom,
    setAttack,
    setDefense,
    setStrength,
    openModal,
    moveLeft,
    moveUp,
    moveDown,
    moveRight,
    ability,
    enteredCodes
}) => {
    const roomName = 'Messy room';
    const abilityUsedInRoom = 'No hidden object';

    const FirstText = () => {
        return 'You find yourself in a messy room. This must be used as some kind of storage room by the dungeon inhabitants.. The Goblin definitely did not do a good job of organizing.';
    }

    const SecondText = () => {
        if (canFindThings) {
            return 'Years of smoking weed in secret from the police has given you the ability to find what should remain hidden! You find a switch in the room behind a dusty crate and flip it. A corridor appeared!';
        }
        return 'After searching the room to the best of your ability you find nothing of value.. Maybe someone with more experience in hiding and finding would be luckier?';
    }

    const startFight = () => {
        openModal(roomName);
    }

    const canFindThings = ability === abilityUsedInRoom || enteredCodes.contains('5raKiJ');

    return (
        <div className="generic-room">
            {killedRoom.contains(roomName) ? (
            <div>
                <h1 className="generic-room-title">{roomName}</h1>
                <h2 className="generic-room-text">{FirstText()}</h2>
                <h2 className="generic-room-text">{SecondText()}</h2>
                <div className="movement-buttons">
                    <PrimaryButton width="50px" color="black" className="movement-button"
                                   onClick={moveLeft && moveLeft()}
                                   disabled={true}>
                    <img src={LeftArrow} alt="left" width="20px"/>
                    </PrimaryButton>
                    <PrimaryButton width="50px" color="black" className="movement-button"
                                   onClick={moveUp && moveUp()}
                                   disabled={false}>
                    <img src={UpArrow} alt="up" width="20px"/>
                    </PrimaryButton>
                    <PrimaryButton width="50px" color="black" className="movement-button"
                                   onClick={moveDown && moveDown()}
                                   disabled={canFindThings}>
                    <img src={DownArrow} alt="down" width="20px"/>
                    </PrimaryButton>
                    <PrimaryButton width="50px" color="black" className="movement-button"
                                   onClick={moveRight && moveRight()}
                                   disabled={true}>
                    <img src={RightArrow} alt="right" width="20px"/>
                    </PrimaryButton>
                </div>
            </div>
            ) : (
                <div className="generic-room">
                    <h1 className="generic-room-title">A startled goblin charges at you as you enter!</h1>
                    <PrimaryButton onClick={startFight}>
                        start combat
                    </PrimaryButton>
                </div>
            )}
        </div>
    )
}

export {MessyRoom}