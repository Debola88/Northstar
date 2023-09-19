import './App.css';
import "./index.css"
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import NewProducts from './components/NewProducts';
import Benefit from './components/Benefit';
import Promo from './components/Promo';
import Footer from './components/Footer';
import BestSelling from './components/BestSelling';

function App() {
  return (
    <div className="App bg-slate-100 text-slate-800">
      <NavBar />
      <Hero />
      <NewProducts />
      <Benefit />
      <Promo />
      <BestSelling />
      <Footer />
    </div>
  );
}

export default App;
