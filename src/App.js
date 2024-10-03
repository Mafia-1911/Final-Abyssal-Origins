import logo from './logo.svg';
import './App.css';

import Hero from './Sections/Hero'
import Header from './Sections/Header'
import LearningOutcomes from './Sections/LearningOutcomes'  
import AboutUs from './Sections/AboutUs'
import Footer from './Sections/Footer';

function App() {
 
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <LearningOutcomes/>
      <AboutUs/>
      <Footer/>
    </div>
  );
}

export default App;
