import React from 'react'
import Hero from '../../components/ui/Home/Hero'
import FoodSection from '../../components/ui/Home/FoodSection'
import Service from '../../components/ui/Home/Service'
import BokingApp from '../../components/ui/Home/BokingApp'

export default function Home() {
  return (
    <div className='container'>
      <Hero/>
      <FoodSection/>
      <Service/>
      <BokingApp/>
    </div>
  )
}
