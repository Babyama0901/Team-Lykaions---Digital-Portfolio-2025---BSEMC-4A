import React from 'react';
import '../App.css';
import coverBg from '../assets/Cover Page - Front.png'; // Updated cover image
import headerLogo from '../Logo/WORDMARK ORIGINAL 2 (WHITE)  .png';
import cictLogo from '../assets/cict-logo.png';
import wvsuLogo from '../assets/wvsu-logo.png';

const books = [
    {
        id: 1,
        title: "SEMINARS AND FIELD STUDY",
        student: "KENT LYNNER ACUESTA",
        course: "Bachelor of Science in Entertainment & Multimedia Computing",
        link: "https://kent-lynner-acuesta.netlify.app/"
    },
    {
        id: 2,
        title: "SEMINARS AND FIELD STUDY",
        student: "JULIUS RALPH ALAMA",
        course: "Bachelor of Science in Entertainment & Multimedia Computing",
        link: "https://online.fliphtml5.com/mubdiq/Alama-Folio--gAVQ/"
    },
    {
        id: 3,
        title: "SEMINARS AND FIELD STUDY",
        student: "VINCE ALTAREZ",
        course: "Bachelor of Science in Entertainment & Multimedia Computing",
        link: "https://online.fliphtml5.com/npxxy/Page-1/"
    },
    {
        id: 4,
        title: "SEMINARS AND FIELD STUDY",
        student: "JOHN PATRICK CAPULOT",
        course: "Bachelor of Science in Entertainment & Multimedia Computing",
        link: "https://john-patrick-capulot.netlify.app/"
    },
    {
        id: 5,
        title: "SEMINARS AND FIELD STUDY",
        student: "RICO JOHN CASQUETE",
        course: "Bachelor of Science in Entertainment & Multimedia Computing",
        link: "https://rico-john-casquete.netlify.app/"
    },
    {
        id: 6,
        title: "SEMINARS AND FIELD STUDY",
        student: "KYLE FRANCIS CONCEPCION",
        course: "Bachelor of Science in Entertainment & Multimedia Computing",
        link: "https://online.fliphtml5.com/reocu/yvlr/"
    },
    {
        id: 7,
        title: "SEMINARS AND FIELD STUDY",
        student: "SHERICA ANNE CHANTAL DUÑGO",
        course: "Bachelor of Science in Entertainment & Multimedia Computing",
        link: "https://sherica-anne-chantal-dungo.netlify.app/"
    },
    {
        id: 8,
        title: "SEMINARS AND FIELD STUDY",
        student: "PAUL ERNEST DUREZA",
        course: "Bachelor of Science in Entertainment & Multimedia Computing",
        link: "https://paul-ernest-dureza.netlify.app/"
    },
    {
        id: 9,
        title: "SEMINARS AND FIELD STUDY",
        student: "ART JOSHUA ESMAEL",
        course: "Bachelor of Science in Entertainment & Multimedia Computing",
        link: "https://art-joshua-esmael.netlify.app/"
    },
    {
        id: 10,
        title: "SEMINARS AND FIELD STUDY",
        student: "THOMAS DOMINIC ESPINOSA",
        course: "Bachelor of Science in Entertainment & Multimedia Computing",
        link: "https://online.fliphtml5.com/ooubc/ESPINOSA-PORTFOLIO-CC209-AL1l/"
    },
    {
        id: 11,
        title: "SEMINARS AND FIELD STUDY",
        student: "ROBERT MAVERICK GARCIA",
        course: "Bachelor of Science in Entertainment & Multimedia Computing",
        link: "https://online.fliphtml5.com/onwpc/hcpt/"
    },
    {
        id: 12,
        title: "SEMINARS AND FIELD STUDY",
        student: "VINCENT BLAISE GEONANGA",
        course: "Bachelor of Science in Entertainment & Multimedia Computing",
        link: "https://online.fliphtml5.com/ybpbj/Tour-1/"
    },
    {
        id: 13,
        title: "SEMINARS AND FIELD STUDY",
        student: "ERLE JAN HIBIONADA",
        course: "Bachelor of Science in Entertainment & Multimedia Computing",
        link: "https://erle-jan-hibionada.netlify.app/"
    },
    {
        id: 14,
        title: "SEMINARS AND FIELD STUDY",
        student: "MARK DAVID IMPERIAL",
        course: "Bachelor of Science in Entertainment & Multimedia Computing",
        link: "https://online.fliphtml5.com/rekuj/ekij/"
    },
    {
        id: 15,
        title: "SEMINARS AND FIELD STUDY",
        student: "JOHN KEVIN LANGURAYAN",
        course: "Bachelor of Science in Entertainment & Multimedia Computing",
        link: "https://online.fliphtml5.com/allgi/nfjv/#p=1"
    },
    {
        id: 16,
        title: "SEMINARS AND FIELD STUDY",
        student: "CHRISTEL SHAIRA LEDESMA",
        course: "Bachelor of Science in Entertainment & Multimedia Computing",
        link: "https://online.fliphtml5.com/shai_03/ogjb/"
    },
    {
        id: 17,
        title: "SEMINARS AND FIELD STUDY",
        student: "YEVGENY SOLIS",
        course: "Bachelor of Science in Entertainment & Multimedia Computing",
        link: "https://yevgeny-solis.netlify.app/"
    },
    {
        id: 18,
        title: "SEMINARS AND FIELD STUDY",
        student: "ELLARIE SUERO",
        course: "Bachelor of Science in Entertainment & Multimedia Computing",
        link: "https://online.fliphtml5.com/ycycit/Suero_Portfolio/"
    },
    {
        id: 19,
        title: "SEMINARS AND FIELD STUDY",
        student: "MEL JOSEPH TATUD",
        course: "Bachelor of Science in Entertainment & Multimedia Computing",
        link: "#" // Keeping internal viewer or adding link if provided
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
                {/* Logo moved to footer */}
                <p className="header-paragraph">CC 209 - Seminar and Field Study</p>
                <h1 className="header-main-title">BSEMC DIGITAL PORTFOLIO 2025</h1>
                <h2 className="header-subheading">BSEMC 4A • 2025 • 1ST SEMESTER</h2>
            </header>

            <div className="books-grid">
                {books.map((book) => (
                    <div
                        key={book.id}
                        className="book-card"
                        onClick={() => {
                            if (book.student === "MEL JOSEPH TATUD") {
                                onOpenBook(book.id);
                            } else if (book.link) {
                                window.open(book.link, "_blank");
                            }
                        }}
                    >
                        <div className="book-wrapper">
                            <div className="book-cover" style={{ backgroundImage: `url(${coverBg})` }}>
                                {/* Spine effect */}
                                <div className="book-spine-overlay"></div>

                                {/* Top Logos & Header */}
                                {/* Top Logos & Header - REMOVED */}

                                {/* Center Title - REMOVED */}

                                {/* Bottom Info */}
                                <div className="cover-footer">
                                    <span className="student-name-cover">{book.student}</span>
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
