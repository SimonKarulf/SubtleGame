import '../Css/App.css';
import {PrimaryButton} from "@fluentui/react";
import UpArrow from "../Images/UpArrow.png";
import DownArrow from "../Images/DownArrow.png";
import LeftArrow from "../Images/LeftArrow.png";
import RightArrow from "../Images/RightArrow.png";

const DustyHall = ({
                         killedRoom,
                         setAttack,
                         setDefense,
                         setStrength,
                         health,
                         setHealth,
                         openModal,
                         moveLeft,
                         moveUp,
                         moveDown,
                         moveRight,
                         ability,
                         enteredCodes
                     }) => {
    const roomName = 'Dusty hall';

    const FirstText = () => {
        return 'You find yourself in a dusty hallway. It almost feels like you can smell the coffin from here.';
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
                    <h1 className="generic-room-title">A skeleton guard attacks!</h1>
                    <PrimaryButton onClick={startFight}>
                        start combat
                    </PrimaryButton>
                </div>
            )}
        </div>
    )
}

export {DustyHall}