import {PrimaryButton, TextField} from '@fluentui/react';
import '../Css/App.css';

const Startpage = ({
    name,
    setName,
    onSubmitClick,
    errorMessage
}) => {
    const onNameChange = (_, value) => setName(value.toLowerCase());

    return (
        <div className="App">
            <header className="App-header">
                <h1>
                    Subtle Games
                </h1>
                <p>Enter your real name here to take part in the games!</p>
                <TextField value={name} onChange={onNameChange} className="App-textfield"/>
                <PrimaryButton onClick={onSubmitClick} className="App-button">Enter</PrimaryButton>
                {errorMessage &&
                    <p className='App-errorMessage'>{errorMessage}</p>}
            </header>
        </div>
    )
}

export { Startpage }