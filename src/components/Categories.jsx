const categories = [
  {
    title: 'Flower Plants',
    image:
      'https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Vegetable Seedlings',
    image:
      'https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Indoor Plants',
    image:
      'https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=1200&auto=format&fit=crop',
  },
]

const Categories = () => {
  return (
    <section className='py-20 px-6 bg-white'>
        <div className='max-w-7xl mx-auto'>
        <h2 className='text-4xl font-bold text-center mb-12'>Categories</h2>

        <div className='grid md:grid-cols-3 gap-8'>
          {categories.map((item, index) => (
            <div
              key={index}
              className='rounded-3xl overflow-hidden shadow-xl hover:scale-105 transition duration-300'
            >
              <img
                src={item.image}
                alt={item.title}
                className='h-72 w-full object-cover'
              />

              <div className='p-6'>
                <h3 className='text-2xl font-semibold'>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      </section>
  )
}

export default Categories