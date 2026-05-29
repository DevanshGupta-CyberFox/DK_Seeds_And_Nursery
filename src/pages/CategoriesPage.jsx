import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const categories = [
  {
    name: 'Seeds',
    image:
      'https://images.unsplash.com/photo-1592841200221-a6898f307baa?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Seedlings',
    image:
      'https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Plants',
    image:
      'https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=1200&auto=format&fit=crop',
  },
  ]

const CategoriesPage = () => {
  return (
    <>
      <Navbar />

      <section className='min-h-screen bg-[#f6f1e9] pt-36 pb-20 px-6'>
        <div className='max-w-7xl mx-auto'>
          <h1 className='text-6xl font-black text-primary mb-16 text-center'>
            Categories
          </h1>

          <div className='grid md:grid-cols-3 gap-10'>
            {categories.map((category, index) => (
              <Link key={index} to={`/category/${category.name}`}>
                <div className='group rounded-[32px] overflow-hidden shadow-2xl bg-white'>
                  <div className='overflow-hidden h-[500px]'>
                    <img
                      src={category.image}
                      alt={category.name}
                      className='w-full h-full object-cover group-hover:scale-110 transition duration-700'
                    />
                     </div>

                  <div className='p-8'>
                    <h2 className='text-4xl font-black'>{category.name}</h2>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default CategoriesPage