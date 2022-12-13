import '../Css/App.css';
import {PrimaryButton} from "@fluentui/react";
import UpArrow from "../Images/UpArrow.png";
import DownArrow from "../Images/DownArrow.png";
import LeftArrow from "../Images/LeftArrow.png";
import RightArrow from "../Images/RightArrow.png";

const CookingPot = ({
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
    const roomName = 'Cooking pot';
    const abilityUsedInRoom = 'Asian cooking';
    const codeUsedInRoom = 'jcaAEH';

    const FirstText = () => {
        return 'As you enter the room the familiar smell of food instantly hits you! A man stands over something in the back of the room with his back turned to you.';
    }

    const SecondText = () => {
        if (enteredCodes.contains(codeUsedInRoom)) {
            return 'A wizard in dark purple robes sits in the middle of the room eating rice, surrounded by skeletons.. You wonder what has happened here, but he does not seem to notice you as he frantically eats!.';
        }
        return 'The man alerted by your presence turns. He looks of Asian descent clad in long dark purple robes. You suddenly notice the skeletal remains all over this place.' +
            'He explains that he is a sorcerer that comes from the lands to the east, and he is trying to reproduce the food he had when he was young. It looks almost as if he is' +
            'using a rice cooker. You are convinced to try and assist him with the cooking.';
    }

    const ThirdText = () => {
        if (canFindThings) {
            setHealth(health + 3);
            return 'You use your asian heritage to cook using the "ricecooker" perfectly! He rewards you with a magic password! "jcaAEH". He shares a bowl and you leave feeling refreshed.';
        }
        setHealth(Math.round(health/2));
        return 'You misuse the rice cooker horribly! The man looks furious at his burned food and casts a spell on you!';
    }

    const startFight = () => {
        openModal(roomName);
    }

    const canFindThings = ability === abilityUsedInRoom || enteredCodes.contains(codeUsedInRoom);

    return (
        <div className="generic-room">
            {!killedRoom.contains(roomName) ? (
                <div>
                    <h1 className="generic-room-title">{roomName}</h1>
                    <h2 className="generic-room-text">{FirstText()}</h2>
                    <h2 className="generic-room-text">{SecondText()}</h2>
                    <h2 className="generic-room-text">{ThirdText()}</h2>
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

export {CookingPot}