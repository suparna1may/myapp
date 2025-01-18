import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Home from './pages/Home/Home';
import About from './pages/About/About';
import ProductInfo from './components/ProductInfo/ProductInfo';
import MyState from './context/data/myState';
import Cart from './pages/Cart/Cart';


function App() {
  return (

    <MyState>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/ProductInfo/:id" element={<ProductInfo/>} />
          <Route path="/Cart" element={<Cart/>} />
        </Routes>
      </Router>
    </MyState>



  );
}

export default App;
