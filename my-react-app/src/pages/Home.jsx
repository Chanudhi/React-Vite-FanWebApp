import './Home.css';

function Home() {
    return (
        <div className="home-container">
            <section className="hero">
                <h1>Welcome to EXO Fan Wikipedia</h1>
                <p>Your ultimate source for everything EXO</p>
            </section>

            <section className="about">
                <h2>About EXO</h2>
                <p>
                    EXO is a South Korean-Chinese boy band formed by SM Entertainment in 2011.
                    The group debuted with 12 members divided into two sub-groups: EXO-K and EXO-M.
                </p>
            </section>

            <section className="quick-links">
                <h2>Quick Links</h2>
                <div className="link-grid">
                    <div className="link-card">
                        <h3>Members</h3>
                        <p>Learn about all EXO members</p>
                    </div>
                    <div className="link-card">
                        <h3>Discography</h3>
                        <p>Explore EXO's music</p>
                    </div>
                    <div className="link-card">
                        <h3>Gallery</h3>
                        <p>View EXO photos and videos</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home; 