import '../Css/App.css';
import {PrimaryButton} from "@fluentui/react";
import UpArrow from "../Images/UpArrow.png";
import DownArrow from "../Images/DownArrow.png";
import LeftArrow from "../Images/LeftArrow.png";
import RightArrow from "../Images/RightArrow.png";

const PotionRoom = ({
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
    const roomName = 'Potion room';
    // const abilityUsedInRoom = 'No hidden object';

    const FirstText = () => {
        return 'Entering the newly opened corridor you find yourself in a small room. In the room there is a single potion on a table with your name on it. To drink it enter the code "1ArM9l".';
    }

    const SecondText = () => {
        if (enteredCodes.contains('1ArM9l')) {
            return 'There is no more potions for you to drink in here. Drinking one with a companions name on it seems risky...';
        }
        return 'You drink the potion and suddenly feel vastly stronger.';
    }

    const startFight = () => {
        openModal(roomName);
    }

    // const canFindThings = ability === abilityUsedInRoom || enteredCodes.contains('5raKiJ');

    return (
        <div className="generic-room">
            {!killedRoom.contains(roomName) ? (
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
                                       disabled={true}>
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

export {PotionRoom}