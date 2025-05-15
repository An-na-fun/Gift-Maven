import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // required for toggler
import Navbar from './components/Navbar/Navbar.js';
import Hero from './components/Hero/Hero.js';
import FeaturedProducts from './components/FeaturedProducts/FeaturedProducts.js';




function App() {
  return (
    <div>
      <Navbar />
      <main> 
        <Hero />
        <FeaturedProducts />
      </main>
    </div>
    
  );
}

export default App;
