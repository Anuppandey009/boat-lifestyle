
import { NavBar } from './components/Navbar/NavBar';
import ScrollToTop from './components/ScrollToTop';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import BestSellers from './components/bestseller/BestSellers';




function App() {
  return (
    <div className="App">
    <NavBar />
      <Home />
    <BestSellers/>
    </div>
  );
}

export default App;
