import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Profile from './Profile';
import Home from './Home';
import About from './About';


function App() {

  return (
    <div>
      <h5>waiting for the navigation bar</h5>
      <br></br><hr></hr>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} ></Route>
          <Route path='/profile' element={<Profile/>} ></Route>
          <Route path='/about' element={<About/>} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
