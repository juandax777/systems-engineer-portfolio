import React from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Experience from '../components/sections/Experience';
import ProjectsSection from '../components/sections/ProjectsSection';
import Contact from '../components/sections/Contact';

const Home: React.FC = () => {
    return (
        <div>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <ProjectsSection />
            <Contact />
        </div>
    );
};

export default Home;