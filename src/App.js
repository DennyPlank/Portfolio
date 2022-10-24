import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
        <header className="App-header">
          <Routes>
            <Route>
              <Route path = "/home" element = {<Home />} />
            </Route>
          </Routes>
        </header>
    </div>
  );
}

export default App;
