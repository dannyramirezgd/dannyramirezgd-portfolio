import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About';
import Navigation from './components/Navbar';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

//HAVE TO TURN MY COMPONENTS INTO PAGES? 
function App() {

  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route exact path='/' element={<About/>}/>
          <Route exact path='/resume' element={<Resume />}/>
          <Route exact path='/projects' element={<Portfolio/>} />

          <Route path ='*' element={<Navigate to='/' replace />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
