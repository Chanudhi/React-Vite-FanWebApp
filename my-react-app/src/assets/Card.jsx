import Suho from './assets/Suho.jpeg'
import Lay from './assets/Lay.jpg'
import Xiumin from './assets/Xiumin.jpg'
import Chen from './assets/chen.jpg'
import Baek from './assets/Baekhyun.jpeg'
import DO from './assets/DO.png'
import chanyeol from './assets/chanyeol.jpg'
import Kai from './assets/kai.jpg'
import sehun from './assets/sehun.jpg'

function Card() {
    return (
        <>
        <div class="position"><div className="card">
            <img src={Suho} alt="Suho" />
            <h2>Suho</h2>
            <p>Kim Jun-myeon, better known by his stage name Suho, is a South Korean singer-songwriter and actor.</p>
            <p>He is the leader of the South Korean-Chinese boy group Exo and its sub-unit Exo-K.</p>
            <p>He debuted as a soloist on March 30, 2020, with the release of his extended play Self-Portrait.</p>
        </div>
            <div className="card">
                <img src={Lay} alt="Lay" />
                <h2>Lay</h2>
                <p>Zhang Yixing known professionally as Lay Zhang or simply Lay, is a Chinese singer, songwriter, dancer, actor, record producer and businessman.</p>
                <p>Zhang first gained recognition in 2005 for participating in the Chinese television talent show Star Academy.</p>
                <p>He later debuted as a member of the South Korean-Chinese boy band Exo and its Chinese sub-unit Exo-M under SM Entertainment in 2012.</p>
            </div>
            <div className="card">
                <img src={Xiumin} alt="Xiumin" />
                <h2>Xiumin</h2>
                <p>Kim Min-seok, better known by his stage name Xiumin, is a South Korean singer and actor.</p>
                <p>He is a member of the South Korean-Chinese boy band Exo, its sub-group Exo-M and leader of its sub-unit Exo-CBX.</p>
                <p>He debuted as a soloist on September 26, 2022, with the extended play Brand New.</p>
            </div>
        </div>
            <div className="position">
                <div className="card">
                    <img src={Chen} alt="Chen" />
                    <h2>Chen</h2>
                    <p>Kim Jong-dae, better known by his stage name, Chen, is a South Korean singer and songwriter.</p>
                    <p>He is a member of the South Korean boy band Exo, its subgroup Exo-M and its subunit Exo-CBX, and participated in SM's projects SM the Ballad.</p>
                    <p>He is predominantly known for his role as the vocalist of Exo.</p>
                </div>

            
                    <div className="card">
                        <img src={Baek} alt="Baekhyun" />
                        <h2>Baekhyun</h2>
                        <p>Byun Baek-hyun, known mononymously as Baekhyun, is a South Korean singer and actor.
                        <p>He is a member of the South Korean-Chinese boy band Exo, its subgroup Exo-K and its subunit Exo-CBX.</p>
                        <p>In 2019, Baekhyun became a leader of the supergroup SuperM.</p></p>
                    </div>
                
                        <div className="card">
                            <img src={DO} alt="do" />
                            <h2>DO</h2>
                            <p>Doh Kyung-soo, better known by his stage name D.O., is a South Korean singer and actor.
                            <p>He is a member of the South Korean boy band Exo.</p></p>
                        </div>
                </div>
                <div className="position">
                <div className="card">
                    <img src={chanyeol} alt="Chanyeol" />
                    <h2>Chanyeol</h2>
                    <p>Park Chan-yeol, better known mononymously as Chanyeol, is a South Korean rapper, singer, songwriter, producer, actor and model.
                        <p> He is a member of the South Korean-Chinese boy group Exo, its sub-group Exo-K and sub-unit Exo-SC, and debuted as soloist on August 28, 2024, with his first extended play Black Out.</p></p>
                </div>

            
                    <div className="card">
                        <img src={Kai} alt="Kai" />
                        <h2>Kai</h2>
                        <p>Kim Jong-in, better known by his stage name Kai, is a South Korean singer, actor, and dancer. He is a member of the South Korean boy band Exo, its subunit Exo-K, and South Korean supergroup SuperM.
                        <p> He debuted as a soloist on November 30, 2020, with his first extended play Kai.</p></p>
                    </div>
                
                        <div className="card">
                            <img src={sehun} alt="sehun" />
                            <h2>Sehun</h2>
                            <p>Oh Se-hun, known mononymously as Sehun, is a South Korean rapper, singer, songwriter, actor and dancer.
                            <p> He is a member of the South Korean-Chinese boy band Exo and its sub-unit Exo-SC.</p></p>
                        </div>
                </div>
                </>
            
            );
}

            export default Card;