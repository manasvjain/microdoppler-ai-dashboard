import React from 'react'

const Loader = () => {
  return (
    <div className='flex flex-col items-center mt-10'>

      <div className='w-20 h-20 rounded-full border-4 border-cyan-400 border-t-transparent animate-spin shadow-[0_0_30px_rgba(0,255,255,0.5)]'></div>

      <p className='mt-5 text-cyan-300 tracking-[4px] uppercase'>
        Scanning Radar Signature...
      </p>
    </div>
  )
}

export default Loader