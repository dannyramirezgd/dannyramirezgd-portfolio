import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About';
import Navigation from './components/Navbar';
import ContactForm from './components/Contact';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

function App() {
  const [link, setLink] = useState('');

  const currentLink = () => {
    switch (link) {
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <ContactForm />;
      case 'Resume':
        return <Resume />;
      default:
        return <About />;
    }
  };

  return (
    <div>
      <Navigation setLink={setLink} />
      <main className='d-flex justify-content-center align-items-center mt-5'>
        <section>{currentLink(link)}</section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
