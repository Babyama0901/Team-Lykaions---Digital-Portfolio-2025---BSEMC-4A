import React from 'react';
import '../App.css';
import coverBg from '../assets/cover-bg.png';
import cictLogo from '../assets/cict-logo.png';
import wvsuLogo from '../assets/wvsu-logo.png';

const books = [
    {
        id: 1,
        title: "SEMINARS AND FIELD STUDY",
        student: "KENT LYNNER ACUESTA",
        course: "Bachelor of Science in Entertainment & Multimedia Computing"
    },
    {
        id: 2,
        title: "SEMINARS AND FIELD STUDY",
        student: "JULIUS RALPH ALAMA",
        course: "Bachelor of Science in Entertainment & Multimedia Computing"
    },
    {
        id: 3,
        title: "SEMINARS AND FIELD STUDY",
        student: "VINCE ALTAREZ",
        course: "Bachelor of Science in Entertainment & Multimedia Computing"
    },
    {
        id: 4,
        title: "SEMINARS AND FIELD STUDY",
        student: "JOHN PATRICK CAPULOT",
        course: "Bachelor of Science in Entertainment & Multimedia Computing"
    },
    {
        id: 5,
        title: "SEMINARS AND FIELD STUDY",
        student: "RICO JOHN CASQUETE",
        course: "Bachelor of Science in Entertainment & Multimedia Computing"
    },
    {
        id: 6,
        title: "SEMINARS AND FIELD STUDY",
        student: "KYLE FRANCIS CONCEPCION",
        course: "Bachelor of Science in Entertainment & Multimedia Computing"
    },
    {
        id: 7,
        title: "SEMINARS AND FIELD STUDY",
        student: "SHERICA ANNE CHANTAL DUÑGO",
        course: "Bachelor of Science in Entertainment & Multimedia Computing"
    },
    {
        id: 8,
        title: "SEMINARS AND FIELD STUDY",
        student: "PAUL ERNEST DUREZA",
        course: "Bachelor of Science in Entertainment & Multimedia Computing"
    },
    {
        id: 9,
        title: "SEMINARS AND FIELD STUDY",
        student: "ART JOSHUA ESMAEL",
        course: "Bachelor of Science in Entertainment & Multimedia Computing"
    },
    {
        id: 10,
        title: "SEMINARS AND FIELD STUDY",
        student: "THOMAS DOMINIC ESPINOSA",
        course: "Bachelor of Science in Entertainment & Multimedia Computing"
    },
    {
        id: 11,
        title: "SEMINARS AND FIELD STUDY",
        student: "ROBERT MAVERICK GARCIA",
        course: "Bachelor of Science in Entertainment & Multimedia Computing"
    },
    {
        id: 12,
        title: "SEMINARS AND FIELD STUDY",
        student: "VINCENT BLAISE GEONANGA",
        course: "Bachelor of Science in Entertainment & Multimedia Computing"
    },
    {
        id: 13,
        title: "SEMINARS AND FIELD STUDY",
        student: "ERLE JAN HIBIONADA",
        course: "Bachelor of Science in Entertainment & Multimedia Computing"
    },
    {
        id: 14,
        title: "SEMINARS AND FIELD STUDY",
        student: "MARK DAVID IMPERIAL",
        course: "Bachelor of Science in Entertainment & Multimedia Computing"
    },
    {
        id: 15,
        title: "SEMINARS AND FIELD STUDY",
        student: "JOHN KEVIN LANGURAYAN",
        course: "Bachelor of Science in Entertainment & Multimedia Computing"
    },
    {
        id: 16,
        title: "SEMINARS AND FIELD STUDY",
        student: "CHRISTEL SHAIRA LEDESMA",
        course: "Bachelor of Science in Entertainment & Multimedia Computing"
    },
    {
        id: 17,
        title: "SEMINARS AND FIELD STUDY",
        student: "YEVGENY SOLIS",
        course: "Bachelor of Science in Entertainment & Multimedia Computing"
    },
    {
        id: 18,
        title: "SEMINARS AND FIELD STUDY",
        student: "ELLARIE SUERO",
        course: "Bachelor of Science in Entertainment & Multimedia Computing"
    },
    {
        id: 19,
        title: "SEMINARS AND FIELD STUDY",
        student: "MEL JOSEPH TATUD",
        course: "Bachelor of Science in Entertainment & Multimedia Computing"
    }
];

function Library({ onOpenBook }) {
    return (
        <div className="library-container">
            {/* Back Arrow / Navigation */}
            <div className="library-nav">
                <button className="nav-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 18l-6-6 6-6" />
                    </svg>
                </button>
            </div>

            <header className="library-header">
                <h1>2025 DIGITAL JOURNAL</h1>
                <p>Bachelor of Science in Entertainment and Multimedia Computing</p>
            </header>

            <div className="books-grid">
                {books.map((book) => (
                    <div
                        key={book.id}
                        className="book-card"
                        onClick={() => {
                            if (book.student === "MEL JOSEPH TATUD") {
                                onOpenBook(book.id);
                            } else {
                                window.open("https://example.com", "_blank");
                            }
                        }}
                    >
                        <div className="book-wrapper">
                            <div className="book-cover" style={{ backgroundImage: `url(${coverBg})` }}>
                                {/* Spine effect */}
                                <div className="book-spine-overlay"></div>

                                {/* Top Logos & Header */}
                                <div className="cover-header">
                                    <img src={wvsuLogo} alt="WVSU Logo" className="uni-logo" />
                                    <div className="uni-text-group">
                                        <span className="uni-name">WEST VISAYAS STATE UNIVERSITY</span>
                                        <span className="college-name">COLLEGE OF INFORMATION AND COMMUNICATIONS TECHNOLOGY</span>
                                    </div>
                                    <img src={cictLogo} alt="CICT Logo" className="uni-logo" />
                                </div>

                                {/* Center Title */}
                                <div className="cover-title-group">
                                    <span className="portfolio-label">2025 DIGITAL PORTFOLIO</span>
                                    <h2 className="main-title">
                                        SEMINARS AND<br />
                                        FIELD STUDY
                                    </h2>
                                </div>

                                {/* Bottom Info */}
                                <div className="cover-footer">
                                    <span className="presented-by">Presented by</span>
                                    <h3 className="student-name-cover">{book.student}</h3>
                                    <span className="student-course-cover">{book.course}</span>
                                </div>

                                {/* Visual overlay/sheen effect */}
                                <div className="book-sheen"></div>
                            </div>
                        </div>

                        <div className="book-label-footer">
                            <span className="footer-name">{book.student.split(' ').pop()}</span>
                            <span className="footer-full-name">{book.student.split(' ').slice(0, -1).join(' ')}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Library;
