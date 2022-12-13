import '../Css/App.css';
import {PrimaryButton} from "@fluentui/react";
import UpArrow from "../Images/UpArrow.png";
import DownArrow from "../Images/DownArrow.png";
import LeftArrow from "../Images/LeftArrow.png";
import RightArrow from "../Images/RightArrow.png";

const ColdOpening = ({
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
    const roomName = 'Cold opening';
    const abilityUsedInRoom = 'Canadian weather resistance';
    const codeUsedInRoom = 'eARrxL';

    const FirstText = () => {
        return 'You step forward and can breathe fresh air! As you take a few steps forward the air is clearly icy cold. ' +
            'Maybe this is a way out, but the Goblins wearing clothes definitely makes sense now.';
    }

    const SecondText = () => {
        if (enteredCodes.contains('eARrxL')) {
            return 'Someone has already ensured that you have the key here! You see no reason for crossing.';
        }
        return 'Something is shining in the distance. It looks like it would help you, so you attempt to cross to it.';
    }

    const ThirdText = () => {
        if (canFindThings) {
            return 'God this is freezing! But luckily not only have you grown up surrounded by ice in Canada, you are a slime! ' +
                'Resisting the weather you cross easily and find a shining magic scroll with the symbols: eARrxL';
        }
        setHealth(Math.round(health/2));
        return 'This is way too cold! You do give up crossing.. This has already cost you half your hp!'
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

export {ColdOpening}