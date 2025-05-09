import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import RegisterPage from './Pages/RegisterPaege';
import Home from './Pages/Home';
import About from './Pages/About';

// import ServicesPage from './pages/ServicesPage';
// import PrivacyPolicyPage from './pages/PrivacyPolicyPage';

function App() {

  return (
    <div className='font-Montserrat'>
    <Navbar />
    <main className="flex-grow">
      <Routes>
        {/* <Route path='/' element={<Homepage />} /> */}
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
