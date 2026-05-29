import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import CategoriesPage from './pages/CategoriesPage'
import CategoryProducts from './pages/CategoryProducts'
import ProductDetails from './pages/ProductDetails'

function App() {
  return (
    <BrowserRouter basename="/DK_Seeds_And_Nursery">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/categories' element={<CategoriesPage />} />
        <Route path='/category/:categoryName' element={<CategoryProducts />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App