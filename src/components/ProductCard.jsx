import { useState } from 'react'
import { toast } from 'react-toastify'
import { CheckIcon } from './Icons'
import { ICON_MAP } from '../data/products'

const TAG_CLASSES = {
  popular:    'tag-popular',
  new:        'tag-new',
  bestseller: 'tag-bestseller',
}

export default function ProductCard({ product, onAddToCart }) {
  const [added, setAdded] = useState(false)

  function handleBuy() {
    const alreadyInCart = onAddToCart(product)
    if (alreadyInCart) return // toast shown by parent/cart logic

    setAdded(true)
    toast.success(`"${product.name}" added to cart! 🛒`, {
      position: 'top-right',
      autoClose: 3000,
    })
    setTimeout(() => setAdded(false), 2000)
  }

  const iconSrc = ICON_MAP[product.icon]

  return (
    <div className="product-card bg-white rounded-2xl border border-gray-100 p-6 flex flex-col shadow-sm hover:border-purple-200 relative overflow-hidden">

      {/* ── Tag badge ── */}
      <span
        className={`absolute top-4 right-4 text-xs font-bold px-2.5 py-1 rounded-full ${
          TAG_CLASSES[product.tagType] || 'tag-new'
        }`}
      >
        {product.tag}
      </span>

      {/* ── Product icon ── */}
      <div className="w-12 h-12 mb-4">
        {iconSrc ? (
          <img src={iconSrc} alt={product.name} className="w-12 h-12 object-contain" />
        ) : (
          <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-2xl">
            📦
          </div>
        )}
      </div>

      {/* ── Name & description ── */}
      <h3 className="font-display font-bold text-gray-900 text-lg mb-1 pr-16">
        {product.name}
      </h3>
      <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">
        {product.description}
      </p>

      {/* ── Feature list ── */}
      <ul className="space-y-1.5 mb-5">
        {product.features.map((feature) => (
          <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
            <CheckIcon />
            {feature}
          </li>
        ))}
      </ul>

      {/* ── Price ── */}
      <div className="flex items-baseline gap-1 mb-4">
        <span className="font-display font-extrabold text-2xl text-gray-900">
          ${product.price}
        </span>
        <span className="text-gray-400 text-sm">/{product.period}</span>
      </div>

      {/* ── Buy Now button ── */}
      <button
        onClick={handleBuy}
        className={`w-full py-2.5 rounded-xl font-semibold text-sm transition-all ${
          added
            ? 'bg-green-500 text-white'
            : 'bg-gradient-to-r from-purple-600 to-purple-400 hover:from-purple-500 hover:to-purple-300 text-white shadow-md shadow-purple-300/40 hover:shadow-purple-400/50'
        }`}
      >
        {added ? '✓ Added to Cart' : 'Buy Now'}
      </button>
    </div>
  )
}
