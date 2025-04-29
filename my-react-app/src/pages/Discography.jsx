import { useState } from 'react';
import './Discography.css';

const discographyData = [
    {
        id: 1,
        title: 'XOXO',
        type: 'Studio Album',
        releaseDate: 'June 3, 2013',
        tracks: [
            'Hug',
            'Baby, Don\'t Cry',
            'Black Pearl',
            'Don\'t Go',
            'Let Out The Beast',
            '3.6.5',
            'Heart Attack',
            'Peter Pan',
            'Baby',
            'My Lady',
            'Wolf',
            'Growl',
            'XOXO'
        ],
        cover: 'https://upload.wikimedia.org/wikipedia/en/4/4e/Exo-xoxo.jpg'
    },
    {
        id: 2,
        title: 'EXODUS',
        type: 'Studio Album',
        releaseDate: 'March 30, 2015',
        tracks: [
            'Call Me Baby',
            'Transformer',
            'What If...',
            'My Answer',
            'Exodus',
            'El Dorado',
            'Playboy',
            'Hurt',
            'Lady Luck',
            'Beautiful'
        ],
        cover: 'https://upload.wikimedia.org/wikipedia/en/1/1a/Exo-exodus.jpg'
    },
    {
        id: 3,
        title: 'EX\'ACT',
        type: 'Studio Album',
        releaseDate: 'June 9, 2016',
        tracks: [
            'Lucky One',
            'Monster',
            'Artificial Love',
            'Cloud 9',
            'Heaven',
            'White Noise',
            'One and Only',
            'They Never Know',
            'Stronger',
            'Lucky One (Chinese Ver.)',
            'Monster (Chinese Ver.)'
        ],
        cover: 'https://upload.wikimedia.org/wikipedia/en/5/5c/Exo-exact.jpg'
    },
    {
        id: 4,
        title: 'The War',
        type: 'Studio Album',
        releaseDate: 'July 18, 2017',
        tracks: [
            'The Eve',
            'Ko Ko Bop',
            'What U Do?',
            'Forever',
            'Diamond',
            'Touch It',
            'Chill',
            'Walk On Memories',
            'Going Crazy',
            'The Eve (Chinese Ver.)',
            'Ko Ko Bop (Chinese Ver.)'
        ],
        cover: 'https://upload.wikimedia.org/wikipedia/en/3/3b/Exo-the-war.jpg'
    },
    {
        id: 5,
        title: 'Don\'t Mess Up My Tempo',
        type: 'Studio Album',
        releaseDate: 'November 2, 2018',
        tracks: [
            'Tempo',
            'Sign',
            'Ooh La La La',
            'Gravity',
            'With You',
            '24/7',
            'Bad Dream',
            'Damage',
            'Smile On My Face',
            'Oasis',
            'Tempo (Chinese Ver.)'
        ],
        cover: 'https://upload.wikimedia.org/wikipedia/en/4/4c/Exo-dont-mess-up-my-tempo.jpg'
    }
];

function Discography() {
    const [selectedAlbum, setSelectedAlbum] = useState(null);
    const [filter, setFilter] = useState('all');

    const filteredAlbums = discographyData.filter(album => 
        filter === 'all' || album.type.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div className="discography-container">
            <h1>EXO Discography</h1>
            
            <div className="filter-controls">
                <label htmlFor="filter">Filter by Type:</label>
                <select 
                    id="filter" 
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                >
                    <option value="all">All Albums</option>
                    <option value="studio">Studio Albums</option>
                    <option value="mini">Mini Albums</option>
                    <option value="single">Singles</option>
                </select>
            </div>

            <div className="albums-grid">
                {filteredAlbums.map((album) => (
                    <div 
                        key={album.id} 
                        className="album-card"
                        onClick={() => setSelectedAlbum(album)}
                    >
                        <img src={album.cover} alt={album.title} />
                        <div className="album-info">
                            <h3>{album.title}</h3>
                            <p>{album.type}</p>
                            <p>{album.releaseDate}</p>
                        </div>
                    </div>
                ))}
            </div>

            {selectedAlbum && (
                <div className="album-modal" onClick={() => setSelectedAlbum(null)}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <img src={selectedAlbum.cover} alt={selectedAlbum.title} />
                        <div className="modal-info">
                            <h2>{selectedAlbum.title}</h2>
                            <p className="album-type">{selectedAlbum.type}</p>
                            <p className="release-date">Released: {selectedAlbum.releaseDate}</p>
                            <div className="tracklist">
                                <h3>Tracklist:</h3>
                                <ol>
                                    {selectedAlbum.tracks.map((track, index) => (
                                        <li key={index}>{track}</li>
                                    ))}
                                </ol>
                            </div>
                        </div>
                        <button className="close-button" onClick={() => setSelectedAlbum(null)}>×</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Discography; 