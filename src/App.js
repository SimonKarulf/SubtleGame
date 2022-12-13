import './Css/App.css';
import {useEffect, useState} from 'react';
import {CharacterStats} from "./Components/CharacterStats";
import {StartField} from "./Fields/StartField";
import {ModalText} from "./Molecules/CombatCalculation";
import {Modal, PrimaryButton} from "@fluentui/react";
import {CombatLog} from "./Utilities/Combat";
import { Startpage } from './Components/Startpage';
import { ABANDONED_KITCHEN, CENTER_ROOM, COFFIN_ROOM, CREEPY_CORRIDOR, DRUG_DEN, FIRST_ALTAR, FOURTH_ALTER, GOBLIN_LAIR, MANNEQUINN_ROOM, MEDITATION_ROOM, MEETING_HALL, OUTLAW_HEADQUARTERS, PINK_ROOM, RICE_CHALLENGE, SECOND_ALTAR, SINGLE_FIRE, SLIME_ROOM, SNAKE_PIT, SPIDER_DEN, SUMMONING_CIRCLE, THIRD_ALTER } from './Utilities/Constants';
import { C2 } from './Fields/C2';
import { C1 } from './Fields/C1';
import { B1 } from './Fields/B1';
import { A1 } from './Fields/A1';
import { A2 } from './Fields/A2';
import { A3 } from './Fields/A3';
import { A4 } from './Fields/A4';
import { A5 } from './Fields/A5';
import { B2 } from './Fields/B2';
import { B3 } from './Fields/B3';
import { C4 } from './Fields/C4';
import { C5 } from './Fields/C5';
import { D1 } from './Fields/D1';
import { D2 } from './Fields/D2';
import { D3 } from './Fields/D3';
import { E1 } from './Fields/E1';
import { E2 } from './Fields/E2';
import { E3 } from './Fields/E3';
import { E4 } from './Fields/E4';
import { E5 } from './Fields/E5';

function App() {

    //Character info
    const [name, setName] = useState('');
    const [isEnteringName, setIsEnteringName] = useState(true);
    const [maxHealth, setMaxHealth] = useState(10);
    const [currentHealth, setCurrentHealth] = useState(10);
    const [attack, setAttack] = useState(1);
    const [strength, setStrength] = useState(1);
    const [defense, setDefense] = useState(2);
    const [ability, setAbility] = useState('Unknown');
    const [level, setLevel] = useState(4);

    // Generic used stuff
    const [errorMessage, setErrorMessage] = useState('');
    const [enteredCodes, setEnteredCodes] = useState(['']);
    const [roomConfiguration, setRoomConfiguration] = useState(0);
    const [turnsTaken, setTurnsTaken] = useState(0);

    // Current Room stuff
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [combatLog, setCombatLog] = useState(['']);
    const [isPlayerDead, setIsPlayerDead] = useState(false);

    // Game state states
    const [currentRoom, setCurrentRoom] = useState(CENTER_ROOM);
    const [killedRoom, setKilledRoom] = useState(false);
    const [isShowingModal, setIsShowingModal] = useState(false);
    const [hasAcceptedIntro, setHasAcceptedIntro] = useState(false);


    useEffect(() => {
        if (level === 4) {
            setAbility('You can interact with spirits!')
        }
    }, [level]);

    const setCurrentRoomCallback = (room) => {
        setCurrentRoom(room)
        const currentTurnsTaken = turnsTaken + 1;
        setTurnsTaken(currentTurnsTaken);
        const currentConfiguration = findCurrentConfiguration(currentTurnsTaken);
        if (roomConfiguration !== currentConfiguration) {
            setRoomConfiguration(currentConfiguration);
        }
        setKilledRoom(false);
    }

    function findCurrentConfiguration(num) {
        // Divide the number by 5 and round down to get the quotient
        const quotient = Math.floor(num / 5);
        // Use the quotient as the index to access the corresponding element in the array
        const ranges = [1, 2, 3, 4, 5];
        return ranges[quotient % 5];
    }

    const openModal = (bigMonster = false) => {
        setIsModalOpen(true);
        setIsShowingModal(true);
        const {combatLog, playerDead, playerHealth} = CombatLog(
            bigMonster,
            level,
            attack,
            strength,
            defense,
            currentHealth,
            setCurrentHealth,
            maxHealth,
            setIsModalOpen)
        setCombatLog(combatLog);
        if (playerDead) {
            setCurrentHealth(maxHealth);
            setIsPlayerDead(true);
        } else {
            const currentLevel = level;
            const currentMaxHealth = maxHealth;
            setKilledRoom(true);
            setCurrentHealth(playerHealth + 1);
            setLevel(currentLevel + 1);
            setMaxHealth(currentMaxHealth + 1);
        }
    }

    const onSubmitClick = () => {
        if (name === 'zukaca' || name === 'svend' || name === 'luna' || name === 'nervath' || name === 'swift' || name === 'cupcake') {
            setIsEnteringName(false);
            setCurrentRoom(CENTER_ROOM);
        } else {
            setErrorMessage('It says to enter your real name... C\'mon now..')
        }
    }

    const onAcceptIntro = () => {
        setHasAcceptedIntro(true);
    }

    return (
        <div>
            {isEnteringName ? (
               <Startpage
                    name={name}
                    setName={setName}
                    errorMessage={errorMessage}
                    onSubmitClick={onSubmitClick}/>
            ) : (
                <div className="Game-screen">
                    {!hasAcceptedIntro ? (
                        <div className='intro-screen'>
                            <header className="Introduction-screen">
                                <h1>
                                    Introduction
                                </h1>
                                <p className='Introduction-text'>
                                    Simon has lost his mind after not playing and Subtle games for far too long! This has lead to horrible a horrible mindstate that even Svend visiting could not save! He has tricked you all to sign over your christmas spirit with a secret button upon the last click, and before you notice he 
                                    lets out an evil Grinch like laugh and jumps into a maze nearby. To get your christmas spirit back and defeat the evil Simon, you will have to work together to transverse a maze made by a twisted mind! Do you accept the quest?
                                </p>
                                <PrimaryButton onClick={onAcceptIntro} className="App-button">I accept</PrimaryButton>
                            </header>
                        </div>
                    ) : (
                        <>
                            <Modal
                                className="modalSize"
                                isOpen={isModalOpen}
                                isBlocking={true}
                            >
                                <ModalText 
                                    combatLog={combatLog}
                                    setIsModalOpen={setIsModalOpen}
                                    isPlayerDead={isPlayerDead}
                                    setIsPlayerDead={setIsPlayerDead}
                                    setAttack={setAttack}
                                    setDefense={setDefense}
                                    setStrength={setStrength}
                                    attack={attack}
                                    strength={strength}
                                    defense={defense}
                                    setIsShowingModal={setIsShowingModal}
                                    setKilledRoom={setKilledRoom}
                                    >
                                </ModalText>
                            </Modal>
                            {isShowingModal &&
                                <div className='behind-modal'/>
                            }
                            {!isShowingModal && 
                                currentRoom === CENTER_ROOM &&
                                <StartField
                                    openModal={openModal}
                                    killedRoom={killedRoom}
                                    enteredCodes={enteredCodes}
                                    name={name}
                                    roomConfiguration={roomConfiguration}
                                    moveLeft={() => setCurrentRoomCallback(CREEPY_CORRIDOR)}
                                    moveUp={() => setCurrentRoomCallback(MANNEQUINN_ROOM)}
                                    moveDown={() => setCurrentRoomCallback(COFFIN_ROOM)}
                                    moveRight={() => setCurrentRoomCallback(MEETING_HALL)}
                                />
                            }
                            {!isShowingModal && 
                                currentRoom === CREEPY_CORRIDOR &&
                                <C2
                                    openModal={openModal}
                                    killedRoom={killedRoom}
                                    enteredCodes={enteredCodes}
                                    name={name}
                                    roomConfiguration={roomConfiguration}
                                    moveLeft={() => setCurrentRoomCallback(SPIDER_DEN)}
                                    moveUp={() => null}
                                    moveDown={() => null}
                                    moveRight={() => setCurrentRoomCallback(CENTER_ROOM)}
                                />
                            }
                            {!isShowingModal && 
                                currentRoom === SPIDER_DEN &&
                                <C1
                                    openModal={openModal}
                                    killedRoom={killedRoom}
                                    enteredCodes={enteredCodes}
                                    name={name}
                                    roomConfiguration={roomConfiguration}
                                    moveLeft={() => null}
                                    moveUp={() => setCurrentRoomCallback(ABANDONED_KITCHEN)}
                                    moveDown={() => setCurrentRoomCallback(PINK_ROOM)}
                                    moveRight={() => setCurrentRoomCallback(CREEPY_CORRIDOR)}
                                />
                            }
                            {!isShowingModal && 
                                currentRoom === ABANDONED_KITCHEN &&
                                <B1
                                    openModal={openModal}
                                    killedRoom={killedRoom}
                                    enteredCodes={enteredCodes}
                                    name={name}
                                    roomConfiguration={roomConfiguration}
                                    moveLeft={() => null}
                                    moveUp={() => setCurrentRoomCallback(FIRST_ALTAR)}
                                    moveDown={() => setCurrentRoomCallback(SPIDER_DEN)}
                                    moveRight={() => null}
                                />
                            }
                            {!isShowingModal && 
                                currentRoom === FIRST_ALTAR &&
                                <A1
                                    openModal={openModal}
                                    killedRoom={killedRoom}
                                    enteredCodes={enteredCodes}
                                    name={name}
                                    roomConfiguration={roomConfiguration}
                                    moveLeft={() => null}
                                    moveUp={() => null}
                                    moveDown={() => setCurrentRoomCallback(ABANDONED_KITCHEN)}
                                    moveRight={() => setCurrentRoomCallback(RICE_CHALLENGE)}
                                />
                            }
                            {!isShowingModal && 
                                currentRoom === RICE_CHALLENGE &&
                                <A2
                                    openModal={openModal}
                                    killedRoom={killedRoom}
                                    enteredCodes={enteredCodes}
                                    name={name}
                                    roomConfiguration={roomConfiguration}
                                    moveLeft={() => setCurrentRoomCallback(FIRST_ALTAR)}
                                    moveUp={() => null}
                                    moveDown={() => null}
                                    moveRight={() => setCurrentRoomCallback(SNAKE_PIT)}
                                    setHealth={setCurrentHealth}
                                    health={currentHealth}
                                />
                            }
                            {!isShowingModal && 
                                currentRoom === SNAKE_PIT &&
                                <A3
                                    openModal={openModal}
                                    killedRoom={killedRoom}
                                    enteredCodes={enteredCodes}
                                    name={name}
                                    roomConfiguration={roomConfiguration}
                                    moveLeft={() => setCurrentRoomCallback(RICE_CHALLENGE)}
                                    moveUp={() => null}
                                    moveDown={() => setCurrentRoomCallback(MANNEQUINN_ROOM)}
                                    moveRight={() => setCurrentRoomCallback(MEDITATION_ROOM)}
                                />
                            }
                            {!isShowingModal && 
                                currentRoom === MEDITATION_ROOM &&
                                <A4
                                    openModal={openModal}
                                    killedRoom={killedRoom}
                                    enteredCodes={enteredCodes}
                                    name={name}
                                    roomConfiguration={roomConfiguration}
                                    moveLeft={() => setCurrentRoomCallback(SNAKE_PIT)}
                                    moveUp={() => null}
                                    moveDown={() => null}
                                    moveRight={() => setCurrentRoomCallback(SECOND_ALTAR)}
                                />
                            }
                            {!isShowingModal && 
                                currentRoom === SECOND_ALTAR &&
                                <A5
                                    openModal={openModal}
                                    killedRoom={killedRoom}
                                    enteredCodes={enteredCodes}
                                    name={name}
                                    roomConfiguration={roomConfiguration}
                                    moveLeft={() => setCurrentRoomCallback(MEDITATION_ROOM)}
                                    moveUp={() => null}
                                    moveDown={() => setCurrentRoomCallback(OUTLAW_HEADQUARTERS)}
                                    moveRight={() => null}
                                />
                            }
                            {!isShowingModal && 
                                currentRoom === MANNEQUINN_ROOM &&
                                <B2
                                    openModal={openModal}
                                    killedRoom={killedRoom}
                                    enteredCodes={enteredCodes}
                                    name={name}
                                    roomConfiguration={roomConfiguration}
                                    moveLeft={() => null}
                                    moveUp={() => setCurrentRoomCallback(SNAKE_PIT)}
                                    moveDown={() => setCurrentRoomCallback(CENTER_ROOM)}
                                    moveRight={() => null}
                                />
                            }
                            {!isShowingModal && 
                                currentRoom === OUTLAW_HEADQUARTERS &&
                                <B3
                                    openModal={openModal}
                                    killedRoom={killedRoom}
                                    enteredCodes={enteredCodes}
                                    name={name}
                                    roomConfiguration={roomConfiguration}
                                    moveLeft={() => null}
                                    moveUp={() => setCurrentRoomCallback(SECOND_ALTAR)}
                                    moveDown={() => setCurrentRoomCallback(GOBLIN_LAIR)}
                                    moveRight={() => null}
                                />
                            }
                            {!isShowingModal && 
                                currentRoom === MEETING_HALL &&
                                <C4
                                    openModal={openModal}
                                    killedRoom={killedRoom}
                                    enteredCodes={enteredCodes}
                                    name={name}
                                    roomConfiguration={roomConfiguration}
                                    moveLeft={() => setCurrentRoomCallback(CENTER_ROOM)}
                                    moveUp={() => null}
                                    moveDown={() => null}
                                    moveRight={() => setCurrentRoomCallback(GOBLIN_LAIR)}
                                    setHealth={setCurrentRoomCallback}
                                    currentHealth={currentHealth}
                                />
                            }
                            {!isShowingModal && 
                                currentRoom === GOBLIN_LAIR &&
                                <C5
                                    openModal={openModal}
                                    killedRoom={killedRoom}
                                    enteredCodes={enteredCodes}
                                    name={name}
                                    roomConfiguration={roomConfiguration}
                                    moveLeft={() => setCurrentRoomCallback(MEETING_HALL)}
                                    moveUp={() => setCurrentRoomCallback(OUTLAW_HEADQUARTERS)}
                                    moveDown={() => setCurrentRoomCallback(SINGLE_FIRE)}
                                    moveRight={() => null}
                                />
                            }
                            {!isShowingModal && 
                                currentRoom === PINK_ROOM &&
                                <D1
                                    openModal={openModal}
                                    killedRoom={killedRoom}
                                    enteredCodes={enteredCodes}
                                    name={name}
                                    roomConfiguration={roomConfiguration}
                                    moveLeft={() => null}
                                    moveUp={() => setCurrentRoomCallback(SPIDER_DEN)}
                                    moveDown={() => setCurrentRoomCallback(THIRD_ALTER)}
                                    moveRight={() => null}
                                />
                            }
                            {!isShowingModal && 
                                currentRoom === COFFIN_ROOM &&
                                <D2
                                    openModal={openModal}
                                    killedRoom={killedRoom}
                                    enteredCodes={enteredCodes}
                                    name={name}
                                    roomConfiguration={roomConfiguration}
                                    moveLeft={() => null}
                                    moveUp={() => setCurrentRoomCallback(CENTER_ROOM)}
                                    moveDown={() => setCurrentRoomCallback(DRUG_DEN)}
                                    moveRight={() => null}
                                />
                            }
                            {!isShowingModal && 
                                currentRoom === SINGLE_FIRE &&
                                <D3
                                    openModal={openModal}
                                    killedRoom={killedRoom}
                                    enteredCodes={enteredCodes}
                                    name={name}
                                    roomConfiguration={roomConfiguration}
                                    moveLeft={() => null}
                                    moveUp={() => setCurrentRoomCallback(GOBLIN_LAIR)}
                                    moveDown={() => setCurrentRoomCallback(FOURTH_ALTER)}
                                    moveRight={() => null}
                                />
                            }
                            {!isShowingModal && 
                                currentRoom === THIRD_ALTER &&
                                <E1
                                    openModal={openModal}
                                    killedRoom={killedRoom}
                                    enteredCodes={enteredCodes}
                                    name={name}
                                    roomConfiguration={roomConfiguration}
                                    moveLeft={() => null}
                                    moveUp={() => setCurrentRoomCallback(PINK_ROOM)}
                                    moveDown={() => null}
                                    moveRight={() => setCurrentRoomCallback(SLIME_ROOM)}
                                />
                            }
                            {!isShowingModal && 
                                currentRoom === SLIME_ROOM &&
                                <E2
                                    openModal={openModal}
                                    killedRoom={killedRoom}
                                    enteredCodes={enteredCodes}
                                    name={name}
                                    roomConfiguration={roomConfiguration}
                                    moveLeft={() => setCurrentRoomCallback(THIRD_ALTER)}
                                    moveUp={() => null}
                                    moveDown={() => null}
                                    moveRight={() => setCurrentRoomCallback(DRUG_DEN)}
                                />
                            }
                            {!isShowingModal && 
                                currentRoom === DRUG_DEN &&
                                <E3
                                    openModal={openModal}
                                    killedRoom={killedRoom}
                                    enteredCodes={enteredCodes}
                                    name={name}
                                    roomConfiguration={roomConfiguration}
                                    moveLeft={() => setCurrentRoomCallback(SLIME_ROOM)}
                                    moveUp={() => setCurrentRoomCallback(COFFIN_ROOM)}
                                    moveDown={() => null}
                                    moveRight={() => setCurrentRoomCallback(SUMMONING_CIRCLE)}
                                />
                            }
                            {!isShowingModal && 
                                currentRoom === SUMMONING_CIRCLE &&
                                <E4
                                    openModal={openModal}
                                    killedRoom={killedRoom}
                                    enteredCodes={enteredCodes}
                                    name={name}
                                    roomConfiguration={roomConfiguration}
                                    moveLeft={() => setCurrentRoomCallback(DRUG_DEN)}
                                    moveUp={() => null}
                                    moveDown={() => null}
                                    moveRight={() => setCurrentRoomCallback(FOURTH_ALTER)}
                                />
                            }
                            {!isShowingModal && 
                                currentRoom === FOURTH_ALTER &&
                                <E5
                                    openModal={openModal}
                                    killedRoom={killedRoom}
                                    enteredCodes={enteredCodes}
                                    name={name}
                                    roomConfiguration={roomConfiguration}
                                    moveLeft={() => setCurrentRoomCallback(SUMMONING_CIRCLE)}
                                    moveUp={() => setCurrentRoomCallback(SINGLE_FIRE)}
                                    moveDown={() => null}
                                    moveRight={() => null}
                                />
                            }
                            {<CharacterStats
                                name={name}
                                health={maxHealth}
                                currentHealth={currentHealth}
                                attack={attack}
                                strength={strength}
                                defense={defense}
                                ability={ability}
                                setEnteredCodes={setEnteredCodes}
                                enteredCodes={enteredCodes}
                            />}
                        </>
                    )}
                </div>
                )
            }
        </div>
    );
}

export default App;
