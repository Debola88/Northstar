import { createBrowserRouter, createRoutesFromElements ,RouterProvider,  Route} from 'react-router-dom';
import './App.css';
import "./index.css"
import About from './components/About';
import HomePage from './components/HomePage';
import ContactUs from './components/ContactUs';
import Product from './components/Product';
import Selector from './components/Selector';
import Cart from './components/Cart';
import BillingDetails from './components/BillingDetails';
import Layout from './components/Layout';


const routes =  createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route index element={<HomePage />} />
    <Route path='about'  element={<About />} />
    <Route path='contactus' element={<ContactUs />} />
    <Route path='cart' element={<Cart />} />
  </Route>
))


function App() {
  return (
    <RouterProvider router={routes} />  
    )
  }
  
  export default App;
