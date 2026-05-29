import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section
      className='h-[90vh] bg-cover bg-center flex items-center justify-center text-white relative'
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=1600&auto=format&fit=crop')",
      }}
    >
      <div className='absolute inset-0 bg-black/50'></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className='relative z-10 text-center px-4'
      >
        <h1 className='text-5xl md:text-7xl font-bold mb-6'>
          Fresh Plants & Healthy Seedlings
        </h1>
        <p className='text-lg md:text-2xl mb-8'>
          Bringing Nature Closer To Your Home
        </p>

        <button className='bg-accent px-8 py-3 rounded-full text-black font-semibold hover:scale-105 transition'>
          Explore Nursery
        </button>
      </motion.div>
    </section>
  )
}

export default Hero