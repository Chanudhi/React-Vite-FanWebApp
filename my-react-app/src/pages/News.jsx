import React from 'react';
import './News.css';

function News() {
    const newsItems = [
        {
            id: 1,
            title: 'EXO Celebrates 12th Anniversary',
            date: '2024-04-08',
            content: 'EXO marks their 12th anniversary since debut with special messages to fans.'
        },
        {
            id: 2,
            title: 'D.O.'s New Solo Album',
            date: '2024-03-15',
            content: 'D.O. announces upcoming solo album scheduled for summer release.'
        },
        {
            id: 3,
            title: 'Baekhyun's Military Discharge',
            date: '2024-02-05',
            content: 'Baekhyun successfully completes his military service and plans comeback.'
        }
    ];

    return (
        <div className="news-container">
            <h1>Latest News</h1>
            <div className="news-grid">
                {newsItems.map(news => (
                    <div key={news.id} className="news-card">
                        <h2>{news.title}</h2>
                        <p className="news-date">{news.date}</p>
                        <p className="news-content">{news.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default News; 