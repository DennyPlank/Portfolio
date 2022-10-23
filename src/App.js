import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './Components/Contact';
import Home from './Components/Home';
import NavBar from './Components/Navbar';

function App() {
  return (
    <div className="App">
        <header className="App-header">
            <NavBar />
          <Routes>
            <Route>
              <Route path = "/contact" element = {<Contact />} />
              <Route path = "/home" element = {<Home />} />
            </Route>
          </Routes>
        </header>
    </div>
  );
}

export default App;
