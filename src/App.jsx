import React from 'react'
import './App.css'

import Navbar from "./Navbar"
import Hero from "./Hero"
import Card from "./Card"

export default function App() {
  
return (
<div>
  <Navbar />
  <Hero />
  <Card 
      img="katie-zaferes.png"
      rating="5.0"
      reviewCount={6}
      country="USA"
      title="Life Lessons with Katie Zaferes"
      price={136}
  />
</div>
)
}
