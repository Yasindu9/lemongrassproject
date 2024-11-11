import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Varieties from './Pages/Lemon Grass/Varieties';
import History from './Pages/Lemon Grass/History';
import MiniBar from './Components/MiniBar';
import Cultivation from './Pages/Lemon Grass/Cultivation';
import Products from './Pages/Lemon Grass/Products';
import Value from './Pages/Lemon Grass/Value';
import AboutUs from './Pages/AboutUs';
import Visits from './Pages/Visits';
import Feedback from './Pages/FeedBack';

// import AboutUs from './Pages/AboutUs';

// import VisitsUs from './Pages/VisitsUs';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Set path for the home page */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/lemon_grass" element={<History />} />
        <Route path="/visits" element={<Visits />} />
        <Route path="/feedbacks" element={<Feedback />} />


        
      </Routes>

  
              <Routes>
                <Route path="lemon-grass/history" element={<History />} />
                <Route path="lemon-grass/varieties" element={<Varieties />} />
                <Route path="lemon-grass/cultivation" element={<Cultivation />} />
                <Route path="lemon-grass/products" element={<Products />} />
                <Route path="lemon-grass/Value" element={<Value />} />

                
                {/* Add additional sub-routes here if needed */}
              </Routes>
      
      <Footer />
    </Router>
  );
}

export default App;
