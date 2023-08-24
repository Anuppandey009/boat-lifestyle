import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/Navbar/NavBar';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ScrollToTop/>
    </div>
  );
}

export default App;
