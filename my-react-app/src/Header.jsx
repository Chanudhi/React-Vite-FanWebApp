import { Link } from 'react-router-dom';
import exoLogo from './assets/exo-logo.png'

function Header(){

    return(
        <header className="header">
            <h1>All About EXO</h1>
            <nav className="nav">
                <ul className="nav-list">
                    <li><img src={exoLogo} alt="EXO logo" /></li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/members">Members</Link></li>
                    <li><Link to="/discography">Discography</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                    <li><Link to="/news">News</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
}
export default Header
