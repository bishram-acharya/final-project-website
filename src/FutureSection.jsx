import React from 'react';
import './FutureSection.css';

const FutureWorkSection = () => {
  const futureWorks = [
    {
      id: 1,
      title: "Improve Performance",
      description:
        "Enhance the performance of our deepfake detection system, possibly upgrading our baseline",
    },
  
    {
      id: 2,
      title: "Implement Vision Transformer Architecture",
      description:
        "Introduce a Vision Transformer Architecture and compare its performance to our established baseline",
    },
    {
      id: 3,
      title: "Browser Extension Development",
      description:
        "Create a user-friendly interface to the system in the form of a browser extension to help users check if an image is deepfake or not",
    },
  ];

  return (
    <section className="future-work" id="future-work">
      <h2 className="future-work-title">Future Work</h2>
      <p className="future-work-subtitle">
        Here are the next steps in our ongoing project:
      </p>
      <div className="future-work-container">
        {futureWorks.map((work) => (
          <div key={work.id} className="future-work-card">
            <h3 className="future-work-title">{work.title}</h3>
            <p className="future-work-description">{work.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FutureWorkSection;
