import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import { useState } from 'react';

import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';

function App() {

  const [count, setCount] = useState(0);

  // let count = 0;

  const increment = () =>{
    // count +=1;
    setCount(count+1);
  }

  const decriment = () =>{
    // count -=1;
    setCount(count-1);
  }


  return (
    <>

    <span className='title'>My Counter</span>
    <p className='subTitle'> The count is {count}</p>
    <button onClick={decriment} className='button'>-</button>
    <button onClick={increment} className='button'>+</button>

    </>

  );
}

export default App;
