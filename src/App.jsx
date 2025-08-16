import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import CaseStudies from './components/CaseStudies';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <main>
          <Hero />
          <Services />
          <Projects />
          <CaseStudies />
          <About />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;

