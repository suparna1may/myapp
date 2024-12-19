import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Home from './pages/Home/Home';
import About from './pages/About/About';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import MyState from './context/data/myState';


function App() {
  return (

    <MyState>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/ProductDetails" element={<ProductDetails />} />

        </Routes>
      </Router>
    </MyState>



  );
}

export default App;
