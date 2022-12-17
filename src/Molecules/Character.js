import '../Css/App.css';
import Zukaca from '../Images/Zukaca.png';
import Nervath from '../Images/Nervath.png';
import Luna from '../Images/Luna.png';
import Swift from '../Images/Swift.png';
import Svend from '../Images/Svend.png';
import Canada from '../Images/Canada.png';

const Character = ({
    name
}) => {
    let image = '';

    if (name === 'zukaca') {
        image = Zukaca;
    } else if (name === 'nervath') {
        image = Nervath
    } else if (name === 'luna') {
        image = Luna
    } else if (name === 'swift') {
        image = Swift
    } else if (name === 'svend') {
        image = Svend   
    } else if (name ==='canada') {
        image = Canada
    }

    return (
        <div className="character">
            <h1>{name}</h1>
            <img src={image} alt="Your character" width="100%" className="character-image"/>
        </div>
    )
}

export {Character}