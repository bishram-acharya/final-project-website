import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <h2 className="about-title">About Our Project</h2>
        <p className="about-description">
          <strong>'Combating Deepfake: Development of an AI Based Deepfake Detection System'</strong> is a project undertaken to explore different methodologies
          to detect deepfake media. This project aims to realize such a robust detection system that it generalizes to deepfake images that are developed using
          unseen techniques and methodologies.
        </p>
        <div className="about-points">
          <div className="point">
            <h3>Background</h3>
            <p>
              As Deepfake results attain unprecedented realism, distinguishing them from genuine content becomes increasingly challenging for human observers.
            </p>
          </div>
          <div className="point">
            <h3>Problem Statements</h3>
            <ul>
              <li>Increased Ease of Creating Deepfakes</li>
              <li>Privacy Breaches and Serious Risks</li>
              <li>Inadequacy of Current Detection Methods and Need for Robust Generalization</li>
            </ul>
          </div>
          <div className="point">
            <h3>Objective</h3>
            <p>
              To develop an AI-based Deepfake Detection system and to perform a thorough comparative
              study of different approaches to determine which method best generalizes to unseen datasets from different sources.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
