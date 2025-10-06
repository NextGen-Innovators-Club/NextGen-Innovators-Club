import React from 'react';
import Navbar from '../Navbar';
import Hero from '../Hero';
import About from '../About';
import Events from '../Events';
import Team from '../Team';
import JoinUs from '../JoinUs';
import Footer from '../Footer';

function MainPage() {
  return (
    <div className="bg-light-primary text-text-light-primary dark:bg-dark-primary dark:text-text-dark-primary min-h-screen transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Events />
        <Team />
        <JoinUs />
      </main>
      <Footer />
    </div>
  );
}

export default MainPage;
