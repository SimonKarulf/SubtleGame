import '../Css/App.css';
import Health from '../Images/love.png';
import Attack from '../Images/sword.png';
import Strength from '../Images/raise-hand.png';
import Defense from '../Images/shield.png';


const Stats = ({
    health,
    currentHealth,
    attack,
    strength,
    defense,
    ability
}) => {

    const getHiddenAbilityDescription = (ability) => {
        return "Hidden ability: " + ability;
    }

    return (
        <div>
            <div className="attribute">
                <img src={Health} alt="health" width="20px"/>
                <div>
                    <span>{currentHealth}</span>
                    <span>/</span>
                    <span>{health}</span>
                </div>
            </div>
            <div className="attribute">
                <img src={Attack} alt="attack" width="20px"/>
                <div>
                    <span>{attack}</span>
                    <span>/</span>
                    <span>{attack}</span>
                </div>
            </div>
            <div className="attribute">
                <img src={Strength} alt="strength" width="20px"/>
                <div>
                    <span>{strength}</span>
                    <span>/</span>
                    <span>{strength}</span>
                </div>
            </div>
            <div className="attribute">
                <img src={Defense} alt="defense" width="20px"/>
                <div>
                    <span>{defense}</span>
                    <span>/</span>
                    <span>{defense}</span>
                </div>
            </div>
            <h4 className="ability">
                {getHiddenAbilityDescription(ability)}
            </h4>
        </div>
    )
}

export {Stats}