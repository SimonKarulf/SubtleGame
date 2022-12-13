import { Modal, PrimaryButton, TextField } from '@fluentui/react';
import { useState } from 'react';
import '../Css/App.css';
import {Character} from "../Molecules/Character";
import {Stats} from "../Molecules/Stats";

const CharacterStats = ({
    name,
    health,
    currentHealth,
    attack,
    strength,
    defense,
    ability,
    setEnteredCodes
}) => {
    const [isEnteringCode, setIsEnteringCode] = useState(false);
    const [currentCode, setCurrentCode] = useState('');

    const onClick = () => {
       setIsEnteringCode(true)
    }

    const onChange = (_, value) => setCurrentCode(value);

    const onSubmitClick = () => {
        setEnteredCodes(currentCode);
        setCurrentCode('');
        setIsEnteringCode(false);
    }

    return (
        <div className="stats">
            <div className="character-stat-page">
                <Character name={name}/>
                <Stats
                    health={health}
                    currentHealth={currentHealth}
                    attack={attack}
                    strength={strength}
                    defense={defense}
                    ability={ability}
                />
                <PrimaryButton onClick={onClick} className="code-button">
                        Enter code
                </PrimaryButton>
                <Modal
                className="modalSize"
                isOpen={isEnteringCode}
                isBlocking={true}>
                    <div>
                        <TextField value={currentCode} onChange={onChange} className="App-textfield"/>
                        <PrimaryButton onClick={onSubmitClick} className="App-button">Enter</PrimaryButton>
                    </div>
                </Modal>
            </div>
        </div>
    )
}

export {CharacterStats}