import Footer from './components/Footer/Footer';
import Homepage from './components/HomePage/Homepage';
import Navbar from './components/Navbar/Navbar';
// import AboutPage from './pages/AboutPage'; // Assuming you created these
// import ServicesPage from './pages/ServicesPage';
// import PrivacyPolicyPage from './pages/PrivacyPolicyPage';

function App() {

  return (
    <div className='font-Montserrat'>
    <Navbar />
    <Homepage />
    <Footer/>
    </div>
  )
}

export default App
