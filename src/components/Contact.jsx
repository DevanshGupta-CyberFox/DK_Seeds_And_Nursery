const Contact = () => {
  return (
    <section className='py-20 px-6 bg-white'>
      <div className='max-w-4xl mx-auto'>
        <h2 className='text-4xl font-bold text-center mb-12'>Contact Us</h2>

        <form className='grid gap-6'>
          <input
            type='text'
            placeholder='Your Name'
            className='p-4 border rounded-xl'
          />

          <input
            type='email'
            placeholder='Your Email'
            className='p-4 border rounded-xl'
          />

          <textarea
            rows='5'
            placeholder='Your Message'
            className='p-4 border rounded-xl'
          ></textarea>
          <button className='bg-primary text-white py-4 rounded-xl hover:bg-green-900 transition'>
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact