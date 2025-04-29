import React, { useState } from 'react';
import './Discography.css';
import xoxo from '../assets/XOXO.jpeg';
import exodus from '../assets/Exodus.jpeg';
import exact from '../assets/exact.png';
import war from '../assets/War.jpeg';
import tempo from '../assets/Tempo.jpeg';
import exist from '../assets/exist.jpeg';
import mama from '../assets/mama.jpeg';
import universe from '../assets/universe.jpeg';
import dontfight from '../assets/Dontfightthefeeing.jpeg';
import comingover from '../assets/comingover.jpeg';
import lovemeright from '../assets/lovemeright.png';
import miracleDecember from '../assets/miraclesofdecember.jpeg';
import countdown from '../assets/countdown.jpeg';
import electrickiss from '../assets/electrickiss.jpeg';

function Discography() {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const albums = [
        // Studio Albums
        {
            id: 1,
            title: "XOXO",
            year: "2013",
            type: "album",
            image: xoxo,
            tracks: ["Wolf", "Growl", "Baby Don't Cry", "Black Pearl", "Don't Go", "Let Out the Beast", "Peter Pan", "3.6.5", "Heart Attack", "My Lady"],
            description: "EXO's first full album that includes the mega hit 'Growl'."
        },
        {
            id: 2,
            title: "Exodus",
            year: "2015",
            type: "album",
            image: exodus,
            tracks: ["Call Me Baby", "Transformer", "What If...", "My Answer", "Exodus", "El Dorado", "Playboy", "Hurt", "Lady Luck", "Beautiful"],
            description: "Second studio album known for 'Call Me Baby'."
        },
        {
            id: 3,
            title: "Ex'Act",
            year: "2016",
            type: "album",
            image: exact,
            tracks: ["Lucky One", "Monster", "Artificial Love", "Cloud 9", "Heaven", "White Noise", "One and Only", "They Never Know", "Stronger"],
            description: "EXO's third studio album featuring 'Monster'."
        },
        {
            id: 4,
            title: "The War",
            year: "2017",
            type: "album",
            image: war,
            tracks: ["Ko Ko Bop", "The Eve", "What U Do?", "Forever", "Diamond", "Touch It", "Chill", "Walk on Memories", "Going Crazy"],
            description: "Colorful and reggae-influenced fourth album."
        },
        {
            id: 5,
            title: "Don't Mess Up My Tempo",
            year: "2018",
            type: "album",
            image: tempo,
            tracks: ["Tempo", "Sign", "Ooh La La La", "Gravity", "With You", "24/7", "Bad Dream", "Damage", "Smile On My Face", "Oasis"],
            description: "Fifth album with the dynamic title track 'Tempo'."
        },
        {
            id: 6,
            title: "Exist",
            year: "2023",
            type: "album",
            image: exist,
            tracks: ["Cream Soda", "Regret It", "Hear Me Out", "Private Party", "Cinderella", "No Makeup", "Love Fool", "Another Day", "Let Me In"],
            description: "Seventh studio album reflecting EXO's musical maturity."
        },
        // Extended Plays (EPs)
        {
            id: 8,
            title: "Mama",
            year: "2012",
            type: "ep",
            image: mama,
            tracks: ["Mama", "What Is Love", "History", "Angel", "Two Moons", "Machine"],
            description: "EXO's debut EP featuring powerful vocals and dramatic concepts."
        },
        {
            id: 9,
            title: "Universe",
            year: "2017",
            type: "ep",
            image: universe,
            tracks: ["Universe", "Been Through", "Stay", "Fall", "Good Night", "Lights Out"],
            description: "A winter special album with emotional ballads."
        },
        {
            id: 10,
            title: "Miracles in December",
            year: "2013",
            type: "ep",
            image: miracleDecember,
            tracks: ["Miracles in December", "Christmas Day", "The Star", "My Turn to Cry", "First Snow"],
            description: "A special winter EP showcasing EXO's emotional vocals and heartwarming holiday spirit."
        },
        {
            id: 11,
            title: "Don't Fight the Feeling",
            year: "2021",
            type: "ep",
            image: dontfight,
            tracks: ["Don't Fight The Feeling", "Paradise", "No Matter", "Runaway", "Just As Usual"],
            description: "Comeback EP with fun, energetic vibes."
        },

        // Japanese Albums
        {
            id: 14,
            title: "Countdown",
            year: "2018",
            type: "album",
            image: countdown,
            tracks: ["Electric Kiss", "Coming Over", "Love Me Right ~romantic universe~", "Lightsaber", "Tactix", "Into My World", "Lovin' You Mo'", "Cosmic Railway"],
            description: "EXO's first Japanese studio album featuring original Japanese tracks."
        },

        // Singles
        {
            id: 15,
            title: "Coming Over",
            year: "2016",
            type: "single",
            image: comingover,
            tracks: ["Coming Over"],
            description: "EXO's second Japanese single with a catchy dance track."
        },
        {
            id: 16,
            title: "Love Me Right ~romantic universe~",
            year: "2015",
            type: "single",
            image: lovemeright,
            tracks: ["Love Me Right ~romantic universe~"],
            description: "Japanese version of 'Love Me Right' with a romantic twist."
        },
        {
            id: 17,
            title: "Electric Kiss",
            year: "2018",
            type: "single",
            image: electrickiss,
            tracks: ["Electric Kiss"],
            description: "Lead single from EXO's first Japanese studio album 'Countdown'."
        }
    ];

    const filteredAlbums = selectedCategory === 'all'
        ? albums
        : albums.filter(album => album.type === selectedCategory);

    return (
        <div className="discography-container fade-in">
            <h1>Discography</h1>

            <div className="category-filters">
                <button
                    className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
                    onClick={() => setSelectedCategory('all')}
                >
                    All
                </button>
                <button
                    className={`filter-btn ${selectedCategory === 'album' ? 'active' : ''}`}
                    onClick={() => setSelectedCategory('album')}
                >
                    Albums
                </button>
                <button
                    className={`filter-btn ${selectedCategory === 'ep' ? 'active' : ''}`}
                    onClick={() => setSelectedCategory('ep')}
                >
                    EPs
                </button>
                <button
                    className={`filter-btn ${selectedCategory === 'single' ? 'active' : ''}`}
                    onClick={() => setSelectedCategory('single')}
                >
                    Singles
                </button>
            </div>

            <div className="albums-grid">
                {filteredAlbums.map(album => (
                    <div key={album.id} className="album-card">
                        <div className="album-image">
                            <img src={album.image} alt={album.title} />
                            <span className="album-type">{album.type.toUpperCase()}</span>
                        </div>
                        <div className="album-content">
                            <h2>{album.title}</h2>
                            <p className="album-year">{album.year}</p>
                            <p className="album-description">{album.description}</p>
                            <div className="album-tracks">
                                <h3>Tracklist:</h3>
                                <ul>
                                    {album.tracks.map((track, index) => (
                                        <li key={index}>{track}</li>
                                    ))}
                                </ul>
                            </div>
                            <button className="listen-btn">Listen Now</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Discography;
