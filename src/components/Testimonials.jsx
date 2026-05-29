const testimonials = [
  {
    name: 'Rahul Sharma',
    review: 'Amazing quality plants and fast service.',
  },
  {
    name: 'Sneha Gupta',
    review: 'Healthy seedlings and beautiful packaging.',
  },
]

const Testimonials = () => {
  return (
    <section className='py-20 px-6 bg-primary text-white'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-4xl font-bold text-center mb-12'>Testimonials</h2>

        <div className='grid md:grid-cols-2 gap-8'>
          {testimonials.map((item, index) => (
            <div key={index} className='bg-white/10 p-8 rounded-3xl'>
              <p className='text-lg mb-4'>"{item.review}"</p>
              <h4 className='font-bold'>{item.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials