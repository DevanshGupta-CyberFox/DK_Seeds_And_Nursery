const plants = [
  {
    name: 'Peace Lily',
    image:
      'https://images.unsplash.com/photo-1463154545680-d59320fd685d?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Succulents',
    image:
      'https://images.unsplash.com/photo-1459156212016-c812468e2115?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Rose Plants',
    image:
      'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?q=80&w=1200&auto=format&fit=crop',
  },
]

const PlantShowcase = () => {
  return (
    <section className='py-20 px-6 bg-light'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-4xl font-bold text-center mb-12'>Featured Plants</h2>
                <div className='grid md:grid-cols-3 gap-8'>
          {plants.map((plant, index) => (
            <div key={index} className='bg-white rounded-3xl shadow-xl overflow-hidden'>
              <img
                src={plant.image}
                alt={plant.name}
                className='h-80 w-full object-cover'
              />

              <div className='p-6'>
                <h3 className='text-2xl font-semibold'>{plant.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PlantShowcase