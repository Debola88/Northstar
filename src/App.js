import { Routes, Route } from 'react-router-dom';
import './App.css';
import "./index.css"
import About from './components/About';
import HomePage from './components/HomePage';
import ContactUs from './components/ContactUs';
import Product from './components/Product';
import Selector from './components/Selector';
import Cart from './components/Cart';
import BillingDetails from './components/BillingDetails';

function App() {
  return (
    <div className="App bg-slate-100 text-gray-800">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='about' element={<About />} />
        <Route path='ContactUs' element={<ContactUs />} />
        <Route path='cart' element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
