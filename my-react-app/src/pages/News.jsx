import React from 'react';
import './News.css';
import kai from '../assets/kai.jpg';
import DO from '../assets/DO.png';
import exoLogo from '../assets/exo-logo.png';
import anniversary from '../assets/Group.jpeg';
import boys from '../assets/boys.jpeg';
import grouppic from '../assets/groipic2.jpeg';

function News() {
    const newsItems = [
        {
            id: 1,
            title: "EXO Celebrates 12th Anniversary",
            date: "2024-04-08",
            category: "Event",
            image: anniversary,
            description: "EXO marks their 12th anniversary since debut with special messages to fans and a surprise online concert announcement."
        },
        {
            id: 2,
            title: "EXO Members Unite for Special Performance",
            date: "2024-03-20",
            category: "Performance",
            image: grouppic,
            description: "Members gather for a special performance showcasing their timeless hits and newest releases, thrilling fans with their signature synchronization."
        },
        {
            id: 3,
            title: "D.O. Announces 'DO it!' Asia Tour for 2025",
            date: "2024-04-11",
            category: "Tour",
            image: DO,
            description: "EXO's D.O. will commence his 'DO it!' Asia tour on July 19, 2025, in Seoul, with performances planned across major Asian cities."
        },
        {
            id: 4,
            title: "EXO's New Group Project Announcement",
            date: "2024-03-15",
            category: "Music",
            image: boys,
            description: "The group hints at an exciting new project that will showcase their growth and musical evolution over the past decade."
        },
        {
            id: 5,
            title: "EXO Members Perform at SM Town Live 2025",
            date: "2025-01-11",
            category: "Event",
            image: exoLogo,
                description: "Suho and Chanyeol of EXO participated in SM Town Live 2025: The Culture, the Future, held at the Gocheok Sky Dome in Seoul on January 11–12, 2025."
    },
    {
        id: 6,
        title: "Kai Set to Release Fourth EP in April 2025",
        date: "2025-03-05",
        category: "Music",
        image: kai,
        description: "Following his military discharge, Kai is preparing to release his fourth extended play in April 2025, with music video filming scheduled soon."

    }
    ];

    return (
        <div className="news-container fade-in">
            <h1>Latest News</h1>
            <div className="news-grid">
                {newsItems.map(news => (
                    <article key={news.id} className="news-card">
                        <div className="news-image">
                            <img src={news.image} alt={news.title} />
                            <span className="news-category">{news.category}</span>
                        </div>
                        <div className="news-content">
                            <div className="news-date">{news.date}</div>
                            <h2>{news.title}</h2>
                            <p>{news.description}</p>
                            <button className="read-more">Read More</button>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}

export default News;
