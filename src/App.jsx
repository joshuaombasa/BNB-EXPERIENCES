import React from 'react'
import './App.css'
import data from './data'

console.log(data)


import Navbar from "./Navbar"
import Hero from "./Hero"
import Card from "./Card"

export default function App() {
  
const cardHtml = data.map((item) => {
  return <Card  
  img={item.coverImg}
  rating={item.stats.rating} 
  reviewCount={item.stats.reviewCount}
  country={item.location}
  title={item.title}
  price={item.price}
  />
})

console.log(cardHtml)

return (
<div>
  <Navbar />
  <Hero />
  {cardHtml}
</div>
)
}
