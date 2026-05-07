import React from 'react'

const ResultCard = ({ result }) => {
  return (
    <div className='bg-[#111827] p-6 rounded-2xl mt-8 shadow-lg border border-cyan-500'>
      <h2 className='text-2xl font-bold mb-4'>Prediction Result</h2>

      <div className='space-y-3'>
        <p>
          <span className='font-semibold text-cyan-400'>Target:</span>
          {' '}
          {result.prediction}
        </p>

        <p>
          <span className='font-semibold text-cyan-400'>Confidence:</span>
          {' '}
          {result.confidence}%
        </p>
      </div>
    </div>
  )
}

export default ResultCard