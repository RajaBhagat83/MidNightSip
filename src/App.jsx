
import React from 'react'
import Hero from './components/Hero/Hero'
import Botttom from './components/Hero/Botttom'
import Headers from './components/Hero/Contact'
import Footer from './components/Hero/Footer'

const App = () => {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <Botttom />
      <Headers />
      <Footer />
    </div>
  )
}

export default App