import React from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import AboutSection from './components/AboutSection';
import FeaturesSection from './components/FeatureSection';
import TeamSection from './components/TeamSection';
import AchievementsSection from './AchivementSection';
import FutureWorkSection from './FutureSection';
import FooterSection from './FooterSection';
import DownloadableResources from './Download';
import FAQsSection from './FAQ';
import SupervisorSection from './components/SupervisorSection';

function App() {
  return (
    <div>
      <Header />
      <HomePage />
      <AboutSection />
      <FeaturesSection/>
      <AchievementsSection/>
      <FutureWorkSection/>
      <TeamSection/>
      <SupervisorSection/>
      <DownloadableResources/>
      <FAQsSection/>
      <FooterSection/>

    </div>
  );
}

export default App;
