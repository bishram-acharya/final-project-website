import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h1 className="home-title">Welcome</h1>
        <p className="home-tagline">
          This is the official website for the project "Combating Deepfake: Development of an AI Based Deepfake Detection System"
        </p>
        <a href="#features"><button className="cta-button">Explore Features</button></a>
      </div>
    </section>
  );
};

export default HomePage;
