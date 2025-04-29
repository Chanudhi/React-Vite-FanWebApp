import { useState } from 'react';
import './Gallery.css';

// Import member images
import baekhyun from '../assets/Baekhyun.jpeg';
import chanyeol from '../assets/chanyeol.jpg';
import chen from '../assets/chen.jpg';
import DO from '../assets/DO.png';
import kai from '../assets/kai.jpg';
import lay from '../assets/Lay.jpg';
import sehun from '../assets/sehun.jpg';
import suho from '../assets/Suho.jpeg';
import xiumin from '../assets/Xiumin.jpg';

const galleryData = [
    { id: 1, src: baekhyun, alt: 'Baekhyun', position: 'Vocalist', year: 2012 },
    { id: 2, src: chanyeol, alt: 'Chanyeol', position: 'Rapper', year: 2012 },
    { id: 3, src: chen, alt: 'Chen', position: 'Vocalist', year: 2012 },
    { id: 4, src: DO, alt: 'D.O.', position: 'Vocalist', year: 2012 },
    { id: 5, src: kai, alt: 'Kai', position: 'Dancer', year: 2012 },
    { id: 6, src: lay, alt: 'Lay', position: 'Dancer', year: 2012 },
    { id: 7, src: sehun, alt: 'Sehun', position: 'Dancer', year: 2012 },
    { id: 8, src: suho, alt: 'Suho', position: 'Vocalist', year: 2012 },
    { id: 9, src: xiumin, alt: 'Xiumin', position: 'Vocalist', year: 2012 },
];

function Gallery() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [filter, setFilter] = useState('all');
    const [sortBy, setSortBy] = useState('name');

    const filteredAndSortedImages = galleryData
        .filter(image => filter === 'all' || image.position.toLowerCase().includes(filter.toLowerCase()))
        .sort((a, b) => {
            if (sortBy === 'name') {
                return a.alt.localeCompare(b.alt);
            } else if (sortBy === 'year') {
                return a.year - b.year;
            }
            return 0;
        });

    return (
        <div className="gallery-container">
            <h2>EXO Members Gallery</h2>
            
            <div className="gallery-controls">
                <div className="filter-controls">
                    <label htmlFor="filter">Filter by Position:</label>
                    <select 
                        id="filter" 
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                    >
                        <option value="all">All Positions</option>
                        <option value="vocalist">Vocalists</option>
                        <option value="rapper">Rappers</option>
                        <option value="dancer">Dancers</option>
                    </select>
                </div>

                <div className="sort-controls">
                    <label htmlFor="sort">Sort by:</label>
                    <select 
                        id="sort" 
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                    >
                        <option value="name">Name</option>
                        <option value="year">Debut Year</option>
                    </select>
                </div>
            </div>

            <div className="gallery-grid">
                {filteredAndSortedImages.map((image) => (
                    <div 
                        key={image.id} 
                        className="gallery-item"
                        onClick={() => setSelectedImage(image)}
                    >
                        <img src={image.src} alt={image.alt} />
                        <p className="member-name">{image.alt}</p>
                        <p className="member-position">{image.position}</p>
                    </div>
                ))}
            </div>
            
            {selectedImage && (
                <div className="image-modal" onClick={() => setSelectedImage(null)}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <img src={selectedImage.src} alt={selectedImage.alt} />
                        <div className="modal-info">
                            <p className="modal-member-name">{selectedImage.alt}</p>
                            <p className="modal-member-position">{selectedImage.position}</p>
                            <p className="modal-member-year">Debut: {selectedImage.year}</p>
                        </div>
                        <button className="close-button" onClick={() => setSelectedImage(null)}>×</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Gallery; 