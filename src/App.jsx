import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Footer from './components/Footer.jsx';
import Navbar from './components/Navbar.jsx';

import RegisterPage from './Pages/RegisterPage.jsx';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import PrivacyPolicyPage from './Pages/PrivacyPolicyPage.jsx';

const App = () => {

  return (
    <div className='font-Montserrat'>
    <Navbar />
    <main className="flex-grow">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/register' element={<RegisterPage/>} />
        <Route path='/privacy-policy' element={<PrivacyPolicyPage/>} />
      </Routes>
    </main>
    <Footer/>
    </div>
  )
}

export default App;
