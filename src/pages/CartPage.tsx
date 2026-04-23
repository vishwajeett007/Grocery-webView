import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Minus, Plus, X, ChevronRight } from 'lucide-react';
import { useCartStore } from '../store/useCartStore';
import { BottomNav } from '../components/BottomNav';
import { Button } from '../components/Button';

export function CartPage() {
  const navigate = useNavigate();
  const { items, updateQuantity, removeItem, getCartTotal, clearCart } = useCartStore();
  const [showCheckout, setShowCheckout] = useState(false);

  const handleCheckout = () => {
    setShowCheckout(true);
  };

  const handlePlaceOrder = () => {
    // Simulate order placement
    clearCart();
    navigate('/order-success');
  };

  if (items.length === 0) {
    return (
      <div className="min-h-[100dvh] bg-white flex flex-col">
        <div className="py-6 text-center border-b border-[#E2E2E2]">
          <h1 className="text-xl font-bold text-[#181725]">My Cart</h1>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center p-6 text-center lg:max-w-4xl lg:mx-auto">
          <div className="mb-6 opacity-30">
            <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
          </div>
          <h2 className="text-xl font-bold text-[#181725] mb-2">Your cart is empty</h2>
          <p className="text-[#7C7C7C] mb-8">Looks like you haven't added anything to your cart yet.</p>
          <Button onClick={() => navigate('/home')}>Start Shopping</Button>
        </div>
        <BottomNav />
      </div>
    );
  }

  return (
    <div className="min-h-[100dvh] bg-white flex flex-col pb-40 lg:pb-10">
      <div className="py-6 text-center border-b border-[#E2E2E2]">
        <h1 className="text-xl font-bold text-[#181725]">My Cart</h1>
      </div>

      <div className="flex-1 overflow-y-auto lg:max-w-7xl lg:w-full lg:mx-auto lg:px-10">
        {items.map((item) => (
          <div key={item.product.id} className="flex p-4 border-b border-[#E2E2E2]">
            <div className="w-20 h-20 flex-shrink-0 flex items-center justify-center">
              <img 
                src={item.product.image} 
                alt={item.product.name} 
                className="max-w-full max-h-full object-contain"
              />
            </div>
            
            <div className="flex-1 pl-4 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-[#181725]">{item.product.name}</h3>
                  <p className="text-sm text-[#7C7C7C] mt-1">{item.product.unit}</p>
                </div>
                <button 
                  aria-label={`Remove ${item.product.name}`}
                  title={`Remove ${item.product.name}`}
                  onClick={() => removeItem(item.product.id)}
                  className="p-1 text-[#7C7C7C] hover:text-red-500 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="flex justify-between items-center mt-3">
                <div className="flex items-center gap-3">
                  <button 
                    aria-label={`Decrease quantity of ${item.product.name}`}
                    title={`Decrease quantity of ${item.product.name}`}
                    onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                    className="w-10 h-10 rounded-[15px] flex items-center justify-center text-[#7C7C7C] border border-[#E2E2E2]"
                  >
                    <Minus size={18} />
                  </button>
                  <span className="font-semibold text-[#181725] w-4 text-center">{item.quantity}</span>
                  <button 
                    aria-label={`Increase quantity of ${item.product.name}`}
                    title={`Increase quantity of ${item.product.name}`}
                    onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                    className="w-10 h-10 rounded-[15px] flex items-center justify-center text-[#53B175] border border-[#E2E2E2]"
                  >
                    <Plus size={18} />
                  </button>
                </div>
                <span className="font-bold text-[#181725] text-[18px]">
                  ${(item.product.price * item.quantity).toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="fixed bottom-[80px] left-0 right-0 p-6 bg-white z-20 lg:static lg:p-6 lg:max-w-7xl lg:w-full lg:mx-auto lg:px-10 lg:bg-transparent">
        <Button fullWidth onClick={handleCheckout} className="relative justify-center lg:max-w-sm lg:ml-auto">
          <span>Go to Checkout</span>
          <span className="absolute right-6 bg-[#489E67] px-2 py-1 rounded-[4px] text-[12px]">
            ${getCartTotal().toFixed(2)}
          </span>
        </Button>
      </div>

      <BottomNav />

      {/* Checkout Bottom Sheet */}
      {showCheckout && (
        <>
          <div 
            className="fixed inset-0 bg-black/40 z-50" 
            onClick={() => setShowCheckout(false)}
          ></div>
          <div className="fixed bottom-0 left-0 right-0 bg-[#F2F3F2] rounded-t-[30px] z-50 transition-transform lg:max-w-2xl lg:left-auto lg:right-10 lg:bottom-10 lg:rounded-[24px] lg:border lg:border-[#E2E2E2]">
            <div className="p-6 pb-8 bg-white rounded-t-[30px]">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-[#181725]">Checkout</h2>
                <button aria-label="Close checkout" title="Close checkout" onClick={() => setShowCheckout(false)}>
                  <X size={24} className="text-[#181725]" />
                </button>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center py-4 border-t border-[#E2E2E2] cursor-pointer">
                  <span className="text-lg font-semibold text-[#7C7C7C]">Delivery</span>
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-[#181725]">Select Method</span>
                    <ChevronRight size={20} className="text-[#181725]" />
                  </div>
                </div>

                <div className="flex justify-between items-center py-4 border-t border-[#E2E2E2] cursor-pointer">
                  <span className="text-lg font-semibold text-[#7C7C7C]">Payment</span>
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-[#181725]">Credit Card</span>
                    <ChevronRight size={20} className="text-[#181725]" />
                  </div>
                </div>

                <div className="flex justify-between items-center py-4 border-t border-[#E2E2E2] cursor-pointer">
                  <span className="text-lg font-semibold text-[#7C7C7C]">Promo Code</span>
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-[#181725]">Pick discount</span>
                    <ChevronRight size={20} className="text-[#181725]" />
                  </div>
                </div>

                <div className="flex justify-between items-center py-4 border-t border-[#E2E2E2]">
                  <span className="text-lg font-semibold text-[#7C7C7C]">Total Cost</span>
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-[#181725]">${getCartTotal().toFixed(2)}</span>
                    <ChevronRight size={20} className="text-[#181725]" />
                  </div>
                </div>

                <p className="text-[12px] text-[#7C7C7C] mt-2 mb-4 leading-relaxed">
                  By placing an order you agree to our <span className="text-[#181725] font-semibold">Terms</span> And <span className="text-[#181725] font-semibold">Conditions</span>
                </p>

                <Button fullWidth onClick={handlePlaceOrder}>
                  Place Order
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
