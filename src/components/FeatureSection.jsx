import React from 'react';
import './FeatureSection.css'

const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      title: "Comparative Study",
      description:
        "A comparative study of different approaches to generalizable deepfake detection is a key deliverable.",
      icon: "📄",
    },
    {
      id: 2,
      title: "Generalizable Detection System",
      description:
        "Perform robust detection against deepfake images of unseen creation methods.",
      icon: "⚡",
    },
    {
      id: 3,
      title: "Browser Integration",
      description:
        "Easy to use browser extension for detecting deepfake images on your browser tabs.",
      icon: "🧩",
    },
  ];

  return (
    <section className="features" id="features">
      <h2 className="features-title">Key Features</h2>
      <div className="features-container">
        {features.map((feature) => (
          <div key={feature.id} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
