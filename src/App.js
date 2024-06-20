import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';

import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';

function App() {
  let count = 0;

  const increment = () =>{
    count +=1;
  }

  const decriment = () =>{
    count -=1;
  }

  return (
    <>

    <span className='title'>My Counter</span>
    <p className='subTitle'> The count is {count}</p>
    <button className='button'>-</button>
    <button className='button'>+</button>

    </>

  );
}

export default App;
