import { useState } from 'react';
import './Members.css';

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

const membersData = [
    {
        id: 1,
        name: 'Baekhyun',
        koreanName: '변백현',
        position: 'Main Vocalist',
        birthDate: 'May 6, 1992',
        image: baekhyun,
        bio: 'Byun Baek-hyun is a South Korean singer, songwriter, and actor. He is a member of EXO and its sub-unit EXO-CBX. He debuted as a solo artist in 2019 with the EP "City Lights".'
    },
    {
        id: 2,
        name: 'Chanyeol',
        koreanName: '박찬열',
        position: 'Main Rapper, Vocalist',
        birthDate: 'November 27, 1992',
        image: chanyeol,
        bio: 'Park Chanyeol is a South Korean rapper, singer, songwriter, record producer, and actor. He is known for his deep voice and is one of the main rappers in EXO.'
    },
    {
        id: 3,
        name: 'Chen',
        koreanName: '김종대',
        position: 'Main Vocalist',
        birthDate: 'September 21, 1992',
        image: chen,
        bio: 'Kim Jong-dae, better known by his stage name Chen, is a South Korean singer and songwriter. He is known for his powerful vocals and is one of the main vocalists in EXO.'
    },
    {
        id: 4,
        name: 'D.O.',
        koreanName: '도경수',
        position: 'Main Vocalist',
        birthDate: 'January 12, 1993',
        image: DO,
        bio: 'Do Kyung-soo, better known by his stage name D.O., is a South Korean singer and actor. He is known for his soulful voice and has gained recognition for his acting career.'
    },
    {
        id: 5,
        name: 'Kai',
        koreanName: '김종인',
        position: 'Main Dancer, Vocalist',
        birthDate: 'January 14, 1994',
        image: kai,
        bio: 'Kim Jong-in, better known by his stage name Kai, is a South Korean singer, dancer, and model. He is known for his exceptional dancing skills and is one of the main dancers in EXO.'
    },
    {
        id: 6,
        name: 'Lay',
        koreanName: '张艺兴',
        position: 'Main Dancer, Vocalist',
        birthDate: 'October 7, 1991',
        image: lay,
        bio: 'Zhang Yixing, better known by his stage name Lay, is a Chinese singer, songwriter, dancer, actor, and music producer. He is the only Chinese member currently active in EXO.'
    },
    {
        id: 7,
        name: 'Sehun',
        koreanName: '오세훈',
        position: 'Lead Dancer, Rapper',
        birthDate: 'April 12, 1994',
        image: sehun,
        bio: 'Oh Se-hun is a South Korean rapper, singer, dancer, and actor. He is the youngest member of EXO and is known for his dancing skills and visual appeal.'
    },
    {
        id: 8,
        name: 'Suho',
        koreanName: '김준면',
        position: 'Leader, Vocalist',
        birthDate: 'May 22, 1991',
        image: suho,
        bio: 'Kim Jun-myeon, better known by his stage name Suho, is a South Korean singer, songwriter, and actor. He is the leader of EXO and is known for his leadership skills.'
    },
    {
        id: 9,
        name: 'Xiumin',
        koreanName: '김민석',
        position: 'Lead Vocalist, Dancer',
        birthDate: 'March 26, 1990',
        image: xiumin,
        bio: 'Kim Min-seok, better known by his stage name Xiumin, is a South Korean singer and actor. He is the oldest member of EXO and is known for his versatile talents.'
    }
];

function Members() {
    const [selectedMember, setSelectedMember] = useState(null);

    return (
        <div className="members-container">
            <h1>EXO Members</h1>
            <div className="members-grid">
                {membersData.map((member) => (
                    <div 
                        key={member.id} 
                        className="member-card"
                        onClick={() => setSelectedMember(member)}
                    >
                        <img src={member.image} alt={member.name} />
                        <h3>{member.name}</h3>
                        <p>{member.position}</p>
                    </div>
                ))}
            </div>

            {selectedMember && (
                <div className="member-modal" onClick={() => setSelectedMember(null)}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <img src={selectedMember.image} alt={selectedMember.name} />
                        <div className="member-info">
                            <h2>{selectedMember.name}</h2>
                            <h3>{selectedMember.koreanName}</h3>
                            <p><strong>Position:</strong> {selectedMember.position}</p>
                            <p><strong>Birth Date:</strong> {selectedMember.birthDate}</p>
                            <p><strong>Bio:</strong> {selectedMember.bio}</p>
                        </div>
                        <button className="close-button" onClick={() => setSelectedMember(null)}>×</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Members; 