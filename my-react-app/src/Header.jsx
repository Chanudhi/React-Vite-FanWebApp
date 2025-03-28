import exoLogo from './assets/exo-logo.png'
function Header(){

    return(
        <header className="header">
            <h1>All About EXO</h1>
            <nav className="nav">
                <ul className="nav-list">
                    <li><img src={exoLogo} alt="EXO logo" /></li>
                    <li>Home</li>
                    <li>Members</li>
                    <li>Discography</li>
                    <li>Gallery</li>
                    <li>News</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    );
}
export default Header
