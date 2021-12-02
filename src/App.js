import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Details from './Pages/Details';
import PhoneDetails from './Components/PhoneDetails';


const App = () => {
  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/details" element={<Details />}>
        <Route path=":brand_id" element={<PhoneDetails />} />
      </Route>
    </Routes>

  );
}

export default App;
