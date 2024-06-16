import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';

import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Routes>

          <Route exact path="/" element={<Home/>}>
          </Route>

          <Route path='/About' element={<About/>}>
          </Route>

          <Route path='/Conatct' element={<Contact/>}>
          </Route>

        </Routes>
      </div>
    </Router>

  );
}

export default App;
