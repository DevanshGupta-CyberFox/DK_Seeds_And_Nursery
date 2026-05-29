import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % product.images.length)
    }, 2500)

    return () => clearInterval(interval)
  }, [product.images.length])

  return (
    <Link to={`/product/${product.id}`}>
      <motion.div
        whileHover={{ y: -10, scale: 1.02 }}
        className='bg-white rounded-[32px] overflow-hidden shadow-2xl group'
      >
        <div className='relative h-80 overflow-hidden'>
          <img
            src={product.images[current]}
            alt={product.title}
            className='w-full h-full object-cover transition duration-700 group-hover:scale-110'
          />

          <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent'></div>

          <div className='absolute bottom-6 left-6 text-white'>
            <span className='bg-secondary text-black px-4 py-1 rounded-full text-sm font-bold'>
              {product.category}
            </span>
          </div>
        </div>
        <div className='p-6'>
          <h3 className='text-2xl font-bold mb-3'>{product.title}</h3>
          <p className='text-gray-600 leading-7'>{product.description}</p>
        </div>
      </motion.div>
    </Link>
  )
}

export default ProductCard