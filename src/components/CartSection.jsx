import { toast } from 'react-toastify'
import { TrashIcon, EmptyCartIllustration } from './Icons'
import { ICON_MAP } from '../data/products'

// ─── Single cart item row ─────────────────────────────────────────────
function CartItem({ item, onRemove }) {
  const iconSrc = ICON_MAP[item.icon]

  function handleRemove() {
    onRemove(item.id)
    toast.error(`"${item.name}" removed from cart.`, {
      position: 'top-right',
      autoClose: 3000,
    })
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5 flex items-center gap-4 shadow-sm hover:border-purple-200 transition-colors">

      {/* Icon */}
      <div className="w-12 h-12 flex-shrink-0">
        {iconSrc ? (
          <img src={iconSrc} alt={item.name} className="w-12 h-12 object-contain" />
        ) : (
          <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-xl">
            📦
          </div>
        )}
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <h4 className="font-display font-bold text-gray-900 truncate">{item.name}</h4>
        <p className="text-gray-400 text-xs mt-0.5">{item.period}</p>
      </div>

      {/* Price + remove */}
      <div className="flex items-center gap-3">
        <span className="font-display font-extrabold text-purple-600 text-lg">
          ${item.price}
        </span>
        <button
          onClick={handleRemove}
          className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          title="Remove item"
        >
          <TrashIcon />
        </button>
      </div>
    </div>
  )
}

// ─── Full cart section ────────────────────────────────────────────────
export default function CartSection({ cartItems, onRemove, onCheckout }) {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0)

  function handleCheckout() {
    onCheckout()
    toast.success('🎉 Order placed! Cart cleared.', {
      position: 'top-right',
      autoClose: 3000,
    })
  }

  // ── Empty state ──
  if (cartItems.length === 0) {
    return (
      <div className="py-16 flex flex-col items-center justify-center text-center cart-empty">
        <EmptyCartIllustration />
        <h3 className="font-display font-bold text-gray-400 text-xl mb-2">
          Your cart is empty
        </h3>
        <p className="text-gray-400 text-sm">
          Browse our products and add items to get started.
        </p>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto">

      {/* ── Item list ── */}
      <div className="space-y-3 mb-6">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} onRemove={onRemove} />
        ))}
      </div>

      {/* ── Summary & checkout ── */}
      <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm mb-4">
        <div className="flex justify-between items-center mb-3 text-gray-500 text-sm">
          <span>
            Subtotal ({cartItems.length} item{cartItems.length !== 1 ? 's' : ''})
          </span>
          <span className="font-semibold text-gray-700">${total}</span>
        </div>

        <div className="flex justify-between items-center mb-4 font-display font-extrabold text-lg">
          <span className="text-gray-900">Total</span>
          <span className="text-purple-600">${total}</span>
        </div>

        <button
          onClick={handleCheckout}
          className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-purple-400 hover:from-purple-500 hover:to-purple-300 text-white font-semibold transition-all shadow-md shadow-purple-300/40"
        >
          Proceed to Checkout →
        </button>
      </div>
    </div>
  )
}
