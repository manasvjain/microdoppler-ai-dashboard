import React from 'react'

const Navbar = () => {
  return (
    <div className='relative z-20 flex items-center justify-between px-10 py-6 border-b border-cyan-400/10 backdrop-blur-xl bg-black/20'>

      <div>
        <h1 className='text-3xl font-black text-cyan-400'>
          Micro-Doppler AI
        </h1>

        <p className='text-gray-500 text-sm'>Defense Radar Analytics</p>
      </div>

      <div className='flex items-center gap-8 text-sm text-gray-300'>
        <span>Deep Learning</span>
        <span>FastAPI</span>
        <span>React</span>
        <span className='px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-300'>
          SYSTEM ONLINE
        </span>
      </div>
    </div>
  )
}

export default Navbar