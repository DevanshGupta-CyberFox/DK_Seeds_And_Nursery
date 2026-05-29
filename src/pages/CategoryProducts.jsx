import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

const CategoryProducts = () => {
  const { categoryName } = useParams()

  const filteredProducts = products.filter(
    (item) => item.category.toLowerCase() === categoryName.toLowerCase()
  )

  return (
    <>
      <Navbar />

      <section className='min-h-screen bg-[#f6f1e9] pt-36 pb-20 px-6'>
        <div className='max-w-7xl mx-auto'>
          <h1 className='text-6xl font-black text-primary mb-16'>
            {categoryName}
          </h1>
           <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default CategoryProducts