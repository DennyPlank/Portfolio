import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
          <Routes>
            <Route>
              <Route path = "/" element = {<Home />} />
            </Route>
          </Routes>
    </div>
  );
}

export default App;
