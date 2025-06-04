import './App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BottomNavbar from './components/BottomNavbar';


import bgHome from './assets/home_bg.jpg';
import bgAbout from './assets/about_bg.jpg';
import bgContact from './assets/contact_bg.jpg';
import bgServices from './assets/services_bg.jpg';
import bgProducts from './assets/products_bg.jpg';
import bgProjects from './assets/projects_bg.jpg';
//import bgMarketing from './assets/marketing_bg.jpg';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Products from './pages/Products';
import Projects from './pages/Projects';
//import Marketing from './pages/Marketing';


function AppWrapper() {
  const location = useLocation();

  // Determine background image based on current route path
  let backgroundImage;

  switch(location.pathname) {
    case '/home':
      backgroundImage = bgHome;
      break;
    case '/about':
      backgroundImage = bgAbout;
      break;
    case '/contact':
      backgroundImage = bgContact;
      break;
    case '/services':
      backgroundImage = bgServices;
      break;
    case '/products':
      backgroundImage = bgProducts;
      break;
    case '/projects':
      backgroundImage = bgProjects;
      break;
    default:
      backgroundImage = bgHome;  
  }

  return (
    <div style={styles.container}>
      <div style={styles.topBar}>
        <Header /> 
        <Navbar />
      </div>
      <div
      style={{
          ...styles.topBanner,
          backgroundImage: `url(${backgroundImage})`,
        }}
        >
      </div>
      <div style={styles.content}>
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
          <BottomNavbar />
        </div>
      <Footer />
      </div>
    
  );
  

}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

const styles = {
  container: {
    width: '100%',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  topBar: {
    width: '100%',
    backgroundColor: 'white',  // white background
    padding: '10px 20px',       // space inside bar
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',  // space between logo and navbar
    // add shadow or border if you want
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    zIndex: 10,
  },
  topBanner: {
    width: '100%',
    height: '200px', // Adjust height as needed
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: 'lightgray',
    color: '#fff',
    //paddingTop: '100px'
  },
  content: {
    flex: 1,
    padding: '2rem',
    position: 'relative',
    zIndex: 0,
    background: 'linear-gradient(to bottom,#87CEFA, rgba(35, 23, 143, 0.78))'
  },
};

export default App;