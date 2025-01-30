import React from 'react';
import './AchivementSection.css';

const AchievementsSection = () => {
    const achievements = [
        {
          id: 1,
          title: "Comprehensive Dataset Ensemble",
          description:
            "Successfully created a dataset with a total of 33730 images created using 9 different types of GANs",
          date: "June 2024",
        },
        {
            id: 2,
            title: "Development of Frequency Aware Network",
            description: "Implemented a frequency aware convolutional network to detect deepfake images in the frequency domain",
            date: "July 2024",
          },
          {
            id: 3,
            title: "Establishment of Baseline",
            description: "Achieved an average accuracy of 96% and established it as the performance baseline for the System",
            date: "August 2024",
          },
      ];

  return (
    <section className="achievements" id="achievements">
      <h2 className="achievements-title">Our Achievements</h2>
      <p className="achievements-subtitle">
        Here are some noteworthy milestones that we have reached in our mission to combat Deepfakes through the use of AI:
      </p>
      <div className="achievements-container">
        {achievements.map((achievement) => (
          <div key={achievement.id} className="achievement-card">
            <h3 className="achievement-title">{achievement.title}</h3>
            <p className="achievement-description">{achievement.description}</p>
            <p className="achievement-date">{achievement.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AchievementsSection;
