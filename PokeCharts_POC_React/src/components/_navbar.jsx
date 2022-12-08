import '/src/assets/css/_navbar.css';
import {Link} from "react-router-dom";

export default function Navbar() {
    return (
        <div className={'navbar_container'}>
            <img src={'/src/assets/images/logo.png'} alt={'pokeball'} className={'navbar_logo'}/>
            <div>
                <Link to={'/'} className={'navbar_link'}>HOME</Link>
            </div>
            <div>
                <Link to={'/chart'} className={'navbar_link'}>POKECHART</Link>
            </div>
            <div>
                <Link to={'/detail'} className={'navbar_link'}>POKEDETAILS</Link>
            </div>
            <div>
                <Link to={'/compare'} className={'navbar_link'}>POKECOMPARE</Link>
            </div>
        </div>
    );
}