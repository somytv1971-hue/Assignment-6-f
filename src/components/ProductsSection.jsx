import { useState } from 'react'
import ProductCard from './ProductCard'
import CartSection from './CartSection'
import { toast } from 'react-toastify'
import PRODUCTS from '../data/products'

export default function ProductsSection({ cartItems, setCartItems }) {
  const [activeTab, setActiveTab] = useState('products')

  // ── Add to cart (returns true if duplicate) ──
  function handleAddToCart(product) {
    if (cartItems.find((i) => i.id === product.id)) {
      toast.info(`"${product.name}" is already in your cart!`, {
        position: 'top-right',
        autoClose: 3000,
      })
      return true // signal: duplicate
    }
    setCartItems((prev) => [...prev, product])
    return false
  }

  // ── Remove from cart ──
  function handleRemove(id) {
    setCartItems((prev) => prev.filter((i) => i.id !== id))
  }

  // ── Checkout ──
  function handleCheckout() {
    setCartItems([])
  }

  return (
    <section className="py-16 px-4 bg-gray-50" id="main-section">
      <div className="max-w-6xl mx-auto">
{/* ── Section heading ── */}
        {activeTab === 'products' && (
          <div className="text-center mb-10">
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-gray-900">
              Premium <span className="gradient-text">Digital Tools</span>
            </h2>
            <p className="text-gray-500 mt-2 text-sm">
              Choose from our curated collection of premium digital products designed <br />to boost your productivity and creativity.
            </p>
          </div>
        )}

        {activeTab === 'cart' && (
          <div className="text-center mb-10">
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-gray-900">
              Your <span className="gradient-text">Shopping Cart</span>
            </h2>
            {cartItems.length > 0 && (
              <p className="text-gray-500 mt-2 text-sm">
                {cartItems.length} item{cartItems.length > 1 ? 's' : ''} selected
              </p>
            )}
          </div>
        )}
        {/* ── Toggle buttons ── */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex gap-2 bg-white rounded-full p-1.5 shadow-sm border border-gray-100">

            <button
              onClick={() => setActiveTab('products')}
              className={`px-8 py-2.5 rounded-full font-semibold text-sm transition-all ${
                activeTab === 'products'
                  ? 'toggle-btn-active'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              📦 Products
            </button>

            <button
              onClick={() => setActiveTab('cart')}
              className={`px-8 py-2.5 rounded-full font-semibold text-sm transition-all flex items-center gap-2 ${
                activeTab === 'cart'
                  ? 'toggle-btn-active'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              🛒 Cart
              {cartItems.length > 0 && (
                <span
                  className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                    activeTab === 'cart'
                      ? 'bg-white/30 text-white'
                      : 'bg-purple-100 text-purple-600'
                  }`}
                >
                  {cartItems.length}
                </span>
              )}
            </button>

          </div>
        </div>

        

        {/* ── Products grid ── */}
        {activeTab === 'products' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        )}

        {/* ── Cart ── */}
        {activeTab === 'cart' && (
          <CartSection
            cartItems={cartItems}
            onRemove={handleRemove}
            onCheckout={handleCheckout}
          />
        )}
      </div>
    </section>
  )
}
