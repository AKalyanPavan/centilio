import { Routes, Route } from "react-router-dom";

import Homepage from './components/Homepage.js';
// import ProductDevelopment from './components/ProductDevelopment.js';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      {/*<Route path="/blogs" element={<ProductDevelopment />} />*/}
    </Routes>
  );
}

export default App;
