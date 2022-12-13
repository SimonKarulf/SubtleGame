import '../Css/App.css';
import {PrimaryButton} from "@fluentui/react";
import UpArrow from "../Images/UpArrow.png";
import DownArrow from "../Images/DownArrow.png";
import LeftArrow from "../Images/LeftArrow.png";
import RightArrow from "../Images/RightArrow.png";

const CoolHallway = ({
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
    const roomName = 'Cool hallway';

    const FirstText = () => {
        return 'You enter a what can only be described as a hallway in a mountain. It is leading upwards and you feel the air getting colder and colder.';
    }

    const SecondText = () => {
        return 'It appears that the air is slightly fresher up ';
    }

    const startFight = () => {
        openModal(roomName);
    }

    return (
        <div className="generic-room">
            {killedRoom.contains(roomName) ? (
                <div>
                    <h1 className="generic-room-title">{roomName}</h1>
                    <h2 className="generic-room-text">{FirstText()}</h2>
                    {/*<h2 className="generic-room-text">{SecondText()}</h2>*/}
                    <div className="movement-buttons">
                        <PrimaryButton width="50px" color="black" className="movement-button"
                                       onClick={moveLeft && moveLeft()}
                                       disabled={false}>
                            <img src={LeftArrow} alt="left" width="20px"/>
                        </PrimaryButton>
                        <PrimaryButton width="50px" color="black" className="movement-button"
                                       onClick={moveUp && moveUp()}
                                       disabled={true}>
                            <img src={UpArrow} alt="up" width="20px"/>
                        </PrimaryButton>
                        <PrimaryButton width="50px" color="black" className="movement-button"
                                       onClick={moveDown && moveDown()}
                                       disabled={true}>
                            <img src={DownArrow} alt="down" width="20px"/>
                        </PrimaryButton>
                        <PrimaryButton width="50px" color="black" className="movement-button"
                                       onClick={moveRight && moveRight()}
                                       disabled={false}>
                            <img src={RightArrow} alt="right" width="20px"/>
                        </PrimaryButton>
                    </div>
                </div>
            ) : (
                <div className="generic-room">
                    <h1 className="generic-room-title">A goblin guard wearing warm leather armor charges at you!</h1>
                    <PrimaryButton onClick={startFight}>
                        start combat
                    </PrimaryButton>
                </div>
            )}
        </div>
    )
}

export {CoolHallway}