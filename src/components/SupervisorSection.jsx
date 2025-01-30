import React from 'react';
import './SupervisorSection.css';

const SupervisorSection = () => {
  return (
    <section className="supervisor" id="aboutSupervisor">
      <div className="supervisor-container">
        <div className="supervisor-photo">
          {/* Replace 'supervisor-photo.jpg' with the actual image path */}
          <img src="supervisor-photo.jpg" alt="Mrs. Bibha Sthapit" />
        </div>
        <div className="supervisor-details">
          <h2 className="supervisor-title">Project Supervisor</h2>
          <h3 className="supervisor-name">Mrs. Bibha Sthapit</h3>
          <p className="supervisor-description">
            Mrs. Bibha Sthapit is a distinguished faculty member at the Institute of Engineering, Pulchowk Campus. She serves as a lecturer in the Department of Electronics and Communication Engineering, where she has significantly contributed to academic excellence and research initiatives. Her leadership roles include a tenure as Deputy Head of the Department, as well as serving as the IC Chair, during which she provided oversight and guidance for various projects undertaken within the department.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SupervisorSection;
