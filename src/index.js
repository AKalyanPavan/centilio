import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './components/Homepage.js';
import Features from './components/Features.js';
import Pricing from './components/Pricing.js';
// import Service from './components/Service.js';
// import Work from './components/Work.js';
import reportWebVitals from './reportWebVitals';

export default function App() {
  return (
    <BrowserRouter basename={'/'}>
      <Routes>

        <Route index path='/' element={<Homepage />} />
        <Route index path='/features' element={<Features />} />
        <Route index path='/pricing' element={<Pricing />} />
        {/*<Route path='service' element={<Service />} />*/}
        {/*<Route path='work' element={<Work />} />*/}

      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


reportWebVitals();