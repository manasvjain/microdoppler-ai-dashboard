import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div className='text-center py-20'>

      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <p className='uppercase tracking-[8px] text-cyan-400 text-sm'>
          AI Defense Surveillance System
        </p>

        <h1 className='mt-6 text-7xl font-black leading-tight'>
          MICRO-DOPPLER
          <span className='block text-cyan-400'>
            TARGET CLASSIFICATION
          </span>
        </h1>

        <p className='max-w-3xl mx-auto mt-8 text-xl text-gray-400 leading-relaxed'>
          Advanced radar signal analysis system using Deep Learning,
          ResNet50 feature extraction, PCA dimensionality reduction,
          and SVM-based aerial target classification.
        </p>
      </motion.div>

      <div className='mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto'>

        <div className='backdrop-blur-xl bg-white/5 border border-cyan-400/20 rounded-3xl p-8'>
          <h3 className='text-5xl font-black text-cyan-400'>99%</h3>
          <p className='text-gray-400 mt-3'>Classification Accuracy</p>
        </div>

        <div className='backdrop-blur-xl bg-white/5 border border-cyan-400/20 rounded-3xl p-8'>
          <h3 className='text-5xl font-black text-cyan-400'>AI</h3>
          <p className='text-gray-400 mt-3'>Deep Learning Detection</p>
        </div>

        <div className='backdrop-blur-xl bg-white/5 border border-cyan-400/20 rounded-3xl p-8'>
          <h3 className='text-5xl font-black text-cyan-400'>LIVE</h3>
          <p className='text-gray-400 mt-3'>Real-Time Inference</p>
        </div>
      </div>
    </div>
  )
}

export default Hero