
import React, { useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { motion } from 'framer-motion'
import API from '../services/api'
import Loader from './Loader'

const UploadCard = () => {
  const [image, setImage] = useState(null)
  const [preview, setPreview] = useState(null)
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)
  const [history, setHistory] = useState([])

  useEffect(() => {
    const stored =
      JSON.parse(localStorage.getItem('predictionHistory')) || []

    setHistory(stored)
  }, [])

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0]

    if (!file) return

    setImage(file)
    setPreview(URL.createObjectURL(file))
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': []
    }
  })

  const handleUpload = async () => {
    if (!image) {
      alert('Please upload an image')
      return
    }

    const formData = new FormData()
    formData.append('file', image)

    try {
      setLoading(true)

      const response = await API.post('/predict', formData)

      setResult(response.data)

      const updatedHistory = [
        {
          prediction: response.data.prediction,
          confidence: response.data.confidence,
          time: new Date().toLocaleString()
        },
        ...history
      ]

      setHistory(updatedHistory)

      localStorage.setItem(
        'predictionHistory',
        JSON.stringify(updatedHistory)
      )
    } catch (error) {
      alert(error.response?.data?.detail || error.message)
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='relative z-10 max-w-5xl mx-auto'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className='backdrop-blur-xl bg-white/5 border border-cyan-400/20 rounded-[30px] p-8 shadow-[0_0_40px_rgba(0,255,255,0.15)]'
      >
        <div
          {...getRootProps()}
          className={`border-2 border-dashed rounded-3xl p-10 text-center cursor-pointer transition-all duration-300 ${
            isDragActive
              ? 'border-cyan-400 bg-cyan-400/10'
              : 'border-gray-600 hover:border-cyan-400'
          }`}
        >
          <input {...getInputProps()} />

          <h2 className='text-2xl font-bold text-cyan-300'>
            Drag & Drop Spectrogram
          </h2>

          <p className='text-gray-400 mt-3'>
            or click to browse image
          </p>
        </div>

        {preview && (
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            src={preview}
            alt='preview'
            className='mt-8 w-full rounded-3xl border border-cyan-400/30'
          />
        )}

        <button
          onClick={handleUpload}
          className='mt-8 w-full py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition-all text-xl font-bold shadow-[0_0_30px_rgba(0,255,255,0.4)]'
        >
          Analyze Target
        </button>

        {loading && <Loader />}

        {result && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className='mt-10 bg-black/30 border border-cyan-400/20 rounded-3xl p-8'
          >
            <h2 className='text-4xl font-bold mb-8 text-cyan-300'>
              Prediction Result
            </h2>

            <div className='grid md:grid-cols-2 gap-8'>
              <div>
                <p className='text-gray-400'>Target Type</p>

                <h3 className='text-5xl font-bold text-white mt-2'>
                  {result.prediction}
                </h3>
              </div>

              <div>
                <p className='text-gray-400'>Confidence</p>

                <h3 className='text-5xl font-bold text-cyan-400 mt-2'>
                  {result.confidence}%
                </h3>
              </div>
            </div>

            <div className='mt-8'>
              <div className='w-full bg-gray-800 rounded-full h-5 overflow-hidden'>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${result.confidence}%` }}
                  transition={{ duration: 1 }}
                  className='bg-cyan-400 h-5 rounded-full shadow-[0_0_20px_rgba(0,255,255,0.6)]'
                />
              </div>
            </div>
          </motion.div>
        )}

        {history.length > 0 && (
          <div className='mt-10'>
            <h2 className='text-3xl font-bold text-cyan-300 mb-6'>
              Detection History
            </h2>

            <div className='space-y-4'>
              {history.map((item, index) => (
                <div
                  key={index}
                  className='bg-black/30 border border-cyan-400/10 rounded-2xl p-5 flex justify-between items-center'
                >
                  <div>
                    <h3 className='text-xl font-bold'>
                      {item.prediction}
                    </h3>

                    <p className='text-gray-400 text-sm'>
                      {item.time}
                    </p>
                  </div>

                  <div className='text-cyan-400 font-bold text-2xl'>
                    {item.confidence}%
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </div>
  )
}

export default UploadCard
