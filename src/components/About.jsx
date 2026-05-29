const About = () => {
  return (
    <section className='py-20 bg-secondary/30 px-6'>
      <div className='max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center'>
        <img
          src='https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=1200&auto=format&fit=crop'
          alt='Nursery'
          className='rounded-3xl shadow-xl'
        />

        <div>
          <h2 className='text-4xl font-bold mb-6'>About DK Seeds & Nursery</h2>

          <p className='text-lg leading-8 text-gray-700'>
            We provide healthy plants, premium seedlings, flowering plants,
            and gardening solutions for homes, balconies, terraces, and farms.
            Our goal is to help people connect with nature through high-quality
            nursery products.
          </p>
        </div>
      </div>
    </section>
  )
}
export default About