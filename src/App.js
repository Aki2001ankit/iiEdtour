import React from 'react'
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./pages/Home";
import Blogs from "./pages/blogs/Blogs";
import IndianMarvels from "./pages/indianMarvel/IndianMarvels";
import NearestCentres from "./pages/NearestCentres";
import AboutUs from "./pages/AboutUs";

import './App.css'
import './styles/font.css'

function App() {
  return (
    <div className="App">
      <Router hashType = 'noslash'> {/*Check Once: no slash is not working */}
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route  activeClassName="active" path='/blogs'  element={<Blogs />} />
          <Route path='/indianmarvels' element={<IndianMarvels />} />
          <Route path='/nearestcentres' element={<NearestCentres />} />
          <Route path='/aboutus' element={<AboutUs />} />  
          
        
        </Routes>
      </Router>
    </div>
  )
}
export default App;
