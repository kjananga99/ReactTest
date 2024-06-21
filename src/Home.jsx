import React from 'react'
import {Button} from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

function Home() {
    const Navigate = useNavigate();
  return (
    <div>
      <h1>Home</h1>
      <Link to="/profile">Go to profile Page</Link>
      <br></br>
      <Button onClick={()=> Navigate("/profile")}>profile</Button>
      <br></br>
      <Link to="/About">Go to About Page</Link>
      <br></br>
      <Button onClick={()=> Navigate("/about")}>about</Button>
      <br></br>

    </div>
  )
}

export default Home
