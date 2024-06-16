import React from 'react'
import TopicBox from '../components/TopicBox'
import Content from '../components/Content'
import { Link } from 'react-router-dom'

export default function Home() {

  return (
    <div>
        <h1>Homepage</h1>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
    </div>
  )
  
}
