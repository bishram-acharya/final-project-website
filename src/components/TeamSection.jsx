import React from 'react';
import './TeamSection.css';

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Aayush Puri",
      role: "Developer",
      description: "Specializes in computer vision leveraging deep learning",
      photo: "assets/puri.jpg",
    },
    {
      id: 2,
      name: "Bishram Acharya",
      role: "Developer",
      description: "Specializes in computer vision leveraging deep learning",
      photo: "assets/bishey.jpg",
    },
    {
      id: 3,
      name: "Bibek Niroula",
      role: "Developer",
      description: "Specializes in the application of language models in computer vision",
      photo: "assets/bibek.jpg",
    }
  ];

  return (
    <section className="team" id="team">
      <h2 className="team-title">Meet the Team</h2>
      <div className="team-container">
        {teamMembers.map((member) => (
          <div key={member.id} className="team-card">
            <img src={member.photo} alt={member.name} className="team-photo" />
            <h3 className="team-name">{member.name}</h3>
            <p className="team-role">{member.role}</p>
            <p className="team-description">{member.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
