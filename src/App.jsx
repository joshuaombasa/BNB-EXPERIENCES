import React from 'react'
import './App.css'
import data from './data'




import Navbar from "./Navbar"
import Hero from "./Hero"
import Card from "./Card"

export default function App() {

  const cardHtml = data.map((item) => {
    return <Card
      key={item.id}
      item={item}
    />
  })

  return (
    <div className='app'>
      <Navbar />
      <Hero />
      <section className='cards-list'>
        {cardHtml}
      </section>
    </div>
  )
}
