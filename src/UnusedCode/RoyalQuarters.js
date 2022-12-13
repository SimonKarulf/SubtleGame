import '../Css/App.css';
import {PrimaryButton} from "@fluentui/react";
import UpArrow from "../Images/UpArrow.png";
import DownArrow from "../Images/DownArrow.png";
import LeftArrow from "../Images/LeftArrow.png";
import RightArrow from "../Images/RightArrow.png";

const RoyalQuarters = ({
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
    const roomName = 'Royal Quarters';
    const abilityUsedInRoom = 'Born to be royal';

    const FirstText = () => {
        return 'You enter a wide open room. More banners are here on the wall and in the middle of the place is a golden throne up on a plateau.' +
            'This place looks worthy for a king, but like that king is long gone. You try to resist, but the gold of the throne calls to you, so you walk up the carpet clad steps to the throne' +
            'and sit down.';
    }

    const SecondText = () => {
        if (ability === abilityUsedInRoom) {
            setHealth(health + 3);
            return 'Sitting here just feels right. You notice that the banners around hold sigils that looks strangely familiar. It is almost as if you have seen this weapon sigil before, does it say Cossel?...';
        }
        return 'You sit on the throne for a while... It is starting to feel a bit silly isnt it?';
    }

    const ThirdText = () => {
        if (ability === abilityUsedInRoom) {
            return 'Suddenly a fairy appears in front of you and bows. "My queen! I have been waiting for the day someone of royal blood would return! Please take this magic phrase, I have kept it safe' +
                'for your return all this time!" The letters appear in your head: 4FvtU1';
        }
        return '';
    }

    const startFight = () => {
        openModal(roomName);
    }

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
                    <h1 className="generic-room-title">A startled goblin charges at you as you enter!</h1>
                    <PrimaryButton onClick={startFight}>
                        start combat
                    </PrimaryButton>
                </div>
            )}
        </div>
    )
}

export {RoyalQuarters}