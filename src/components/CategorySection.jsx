import ProductCard from './ProductCard'
import { products } from '../data/products'

const CategorySection = () => {
  const categories = ['Seeds', 'Seedlings', 'Plants']

  return (
    <section className='py-24 px-6 bg-[#f6f1e9]'>
      <div className='max-w-7xl mx-auto'>
        {categories.map((category) => (
          <div key={category} className='mb-24'>
            <h2 className='text-5xl font-black text-primary mb-10'>
              {category}
            </h2>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
              {products
                .filter((item) => item.category === category)
                .map((product) => (
                  <ProductCard key={product.id} product={product} />
                   ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CategorySection