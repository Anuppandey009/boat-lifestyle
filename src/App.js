import { NavBar } from "./components/Navbar/NavBar";
import ScrollToTop from "./components/ScrollToTop";
import "bootstrap/dist/css/bootstrap.min.css";
 import Home from './components/Home/Home';
import BestSellers from './components/bestseller/BestSellers';
import DailyDeals from "./components/DailyDeals/DailyDeals";




function App() {
  return (
    <div className="App">
      <NavBar />
      <ScrollToTop />
      <Home />
      <BestSellers />
      <DailyDeals/>
    </div>
  );
}

export default App;
