// import { useState } from 'react'
// import { Link } from 'react-router-dom'
// import { Menu, X } from 'lucide-react'

// const Navbar = () => {
//   const [open, setOpen] = useState(false)

//   return (
//     <nav className='fixed top-0 w-full z-50 backdrop-blur-xl bg-black/20 border-b border-white/10'>
//       <div className='max-w-7xl mx-auto px-6 py-4 flex justify-between items-center'>
//         <Link to='/' className='text-3xl font-bold text-white'>
//           DK Seeds & Nursery
//         </Link>

//         <div className='hidden md:flex gap-8 text-white text-lg'>
//           <Link to='/'>Home</Link>
//           <Link to='/categories'>Categories</Link>
//           <Link to='/about'>About</Link>
//           <Link to='/contact'>Contact</Link>
//         </div>

//         <button
//           className='md:hidden text-white'
//           onClick={() => setOpen(!open)}
//         >
//           {open ? <X size={30} /> : <Menu size={30} />}
//         </button>
//       </div>

//       {open && (
//         <div className='md:hidden bg-black/90 text-white px-6 py-6 flex flex-col gap-6'>
//           <Link to='/'>Home</Link>
//           <Link to='/about'>About</Link>
//           <Link to='/contact'>Contact</Link>
//         </div>
//       )}
//     </nav>
//   )
// }

// export default Navbar

import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav className='fixed top-0 w-full z-50 backdrop-blur-xl bg-black/20 border-b border-white/10'>
      
      <div className='max-w-7xl mx-auto px-6 py-4 flex justify-between items-center'>

        {/* Logo */}
        <Link to='/' className='text-3xl font-bold text-white'>
          DK Seeds & Nursery
        </Link>

        {/* Desktop Menu */}
        <div className='hidden md:flex gap-8 text-white text-lg'>
          <Link to='/'>Home</Link>
          <Link to='/categories'>Categories</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
        </div>

        {/* Mobile Button */}
        <button
          className='md:hidden text-white'
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className='md:hidden bg-black/90 text-white px-6 py-6 flex flex-col gap-6'>

          <Link to='/' onClick={() => setOpen(false)}>
            Home
          </Link>

          <Link to='/categories' onClick={() => setOpen(false)}>
            Categories
          </Link>

          <Link to='/about' onClick={() => setOpen(false)}>
            About
          </Link>

          <Link to='/contact' onClick={() => setOpen(false)}>
            Contact
          </Link>

        </div>
      )}

    </nav>
  )
}

export default Navbar