import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import HomePage from './Pages/Homepage';
import AboutPage from './Pages/Aboutpage'; // Assuming you created these
import RegisterPage from './Pages/RegisterPaege';
// import ServicesPage from './pages/ServicesPage';
// import PrivacyPolicyPage from './pages/PrivacyPolicyPage';

function App() {

  return (
    <div className='font-Montserrat'>
    <Navbar />
    <main className="flex-grow">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage/>} />
        <Route path='/register' element={<RegisterPage/>} />
      </Routes>
    </main>
    <Footer/>
    </div>
  )
}

export default App;
