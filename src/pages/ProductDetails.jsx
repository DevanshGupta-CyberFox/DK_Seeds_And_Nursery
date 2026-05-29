import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { products } from '../data/products'

const ProductDetails = () => {
  const { id } = useParams()

  const product = products.find((item) => item.id === Number(id))

  return (
    <>
      <Navbar />

      <section className='min-h-screen bg-[#f6f1e9] pt-36 pb-20 px-6'>
        <div className='max-w-7xl mx-auto grid lg:grid-cols-2 gap-16'>
          <div className='space-y-6'>
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={product.title}
                className='rounded-[28px] shadow-2xl w-full'
              />
               ))}
          </div>

          <div>
            <span className='bg-secondary px-5 py-2 rounded-full font-bold'>
              {product.category}
            </span>

            <h1 className='text-6xl font-black mt-6 mb-8'>
              {product.title}
            </h1>

            <p className='text-xl text-gray-700 leading-9 mb-10'>
              {product.description}
            </p>

            <div className='bg-white rounded-[28px] p-8 shadow-xl'>
              <h2 className='text-3xl font-bold mb-8'>Specifications</h2>

              <div className='space-y-5'>
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div
                    key={key}
                    className='flex justify-between border-b pb-4'
                  >
                    <span className='font-semibold capitalize'>{key}</span>
                    <span>{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className='bg-white rounded-[28px] p-8 shadow-xl mt-10'>
              <h2 className='text-3xl font-bold mb-6'>Plant Care</h2>

              <p className='text-gray-700 leading-8'>
                Water regularly, maintain proper sunlight, and use nutrient-rich soil for optimal growth. Placeholder content for now.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
      )
}

export default ProductDetails