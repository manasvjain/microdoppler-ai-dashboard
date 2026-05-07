import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import UploadCard from './components/UploadCard'

const App = () => {
  return (
    <div className='relative min-h-screen overflow-hidden bg-[#020617] text-white'>

      <div className='absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.08)_1px,transparent_1px)] bg-[size:40px_40px]'></div>

      <div className='absolute w-[700px] h-[700px] rounded-full border border-cyan-400/20 top-[-250px] left-[-250px] animate-ping'></div>

      <div className='absolute w-[900px] h-[900px] rounded-full border border-cyan-400/10 bottom-[-400px] right-[-400px] animate-pulse'></div>

      <Navbar />

      <div className='relative z-10 px-6 py-10'>
        <Hero />
        <UploadCard />
      </div>
    </div>
  )
}

export default App