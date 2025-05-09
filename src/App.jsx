import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Footer from './components/Footer.jsx';
import Navbar from './components/Navbar.jsx';

import RegisterPage from './Pages/RegisterPage.jsx';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';

// import ServicesPage from './pages/ServicesPage';
// import PrivacyPolicyPage from './pages/PrivacyPolicyPage';

const App = () => {

  return (
    <div className='font-Montserrat'>
    <Navbar />
    <main className="flex-grow">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/register' element={<RegisterPage/>} />
      </Routes>
    </main>
    <Footer/>
    </div>
  )
}

export default App;
