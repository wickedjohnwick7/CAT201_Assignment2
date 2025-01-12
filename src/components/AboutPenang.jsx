import React from 'react';
import './AboutPenang.css'; // Import CSS for styling

const AboutPenang = ({onLearnMore}) => {
    return (
        <section id="aboutPenang" className="about-penang-section">
            <div className="about-penang-box">
                {/* Title */}
                <h1 className="about-penang-title">About Penang</h1>

                {/* Content Section */}
                <div className="about-penang-content">
                    {/* Left Side: Image */}
                    <div className="about-penang-left">
                        <img
                            src="/images/penang-map.png"
                            alt="Beautiful Penang"
                            className="about-penang-image"
                        />
                    </div>

                    {/* Right Side: Description and Button */}
                    <div className="about-penang-right">
                        <p className="about-penang-description">
                            Penang, known as the Pearl of the Orient, is a vibrant state in Malaysia with a rich history, diverse culture, and incredible cuisine. Explore its beautiful heritage sites, pristine beaches, and bustling street food scene.
                        </p>
                    </div>
                </div>
            </div>
            <div className="about-penang-box">
        <h2 className="about-penang-title">Explore Penang on the Map</h2>
        <div className="google-maps-container">
            <iframe
                title="Penang Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15926.110943120085!2d100.25741063223603!3d5.414154799344222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304ac384ec89ff6d%3A0x7b663a41d9b20d23!2sPenang!5e0!3m2!1sen!2smy!4v1673563197107!5m2!1sen!2smy"
                width="100%"
                height="550"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    </div>
            
        </section>
    );
};

export default AboutPenang;
