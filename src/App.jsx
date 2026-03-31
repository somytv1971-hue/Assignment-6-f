import { useState } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import ProductsSection from './components/ProductsSection'
import Steps from './components/Steps'
import Pricing from './components/Pricing'
import Workflow from './components/Workflow'
import Footer from './components/Footer'

export default function App() {
  const [cartItems, setCartItems] = useState([])

  return (
    <>
      {/* ── React-Toastify global container ── */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />

      {/* ── Page layout ── */}
      <Navbar cartCount={cartItems.length} />
      <Hero />
      <Stats />
      <ProductsSection cartItems={cartItems} setCartItems={setCartItems} />
      <Steps />
      <Pricing />
      <Workflow />
      <Footer />
    </>
  )
}
