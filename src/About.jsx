import React from 'react'
import { Button } from 'react-bootstrap'
import { Navigate, useNavigate } from 'react-router-dom'

function About() {
    const Navigate = useNavigate();
  return (
    <div>
      <h1>This is About Page</h1>
      <Button onClick={()=>Navigate(-1)}>Back</Button>
    </div>
  )
}

export default About
