import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import "./index.css"
import About from './components/About';
import HomePage from './components/HomePage';
import ContactUs from './components/ContactUs';
import Product from './components/Product';
import Cart from './components/Cart';
import BillingDetails from './components/BillingDetails';
import Layout from './components/Layout';
import NoMatch from './components/NoMatch';
import { CartProvider } from './contexts/CartContext';


const routes = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route index element={<HomePage />} />
    <Route path='about' element={<About />} />
    <Route path='contactus' element={<ContactUs />} />
    <Route path='cart' element={<Cart />} />
    <Route path='product/:id' element={<Product />} />
    <Route path='billingdetails' element={<BillingDetails />} />
    <Route path='*' element={<NoMatch />} />
  </Route>
))


function App() {
  return (
    <CartProvider>
      <RouterProvider router={routes} />
    </CartProvider>
  )
}

export default App;
