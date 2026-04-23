import { MapPin, Search, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore';
import { useCartStore } from '../store/useCartStore';
import { mockProducts } from '../data/mock';
import { ProductCard } from '../components/ProductCard';
import { BottomNav } from '../components/BottomNav';

export function HomePage() {
  const navigate = useNavigate();
  const location = useAuthStore(state => state.user?.location || 'Dhaka, Banasree');
  const cartItems = useCartStore(state => state.items);

  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  
  const exclusiveOffers = mockProducts.slice(0, 4);
  const bestSelling = mockProducts.slice(4, 8);
  const exclusiveCategory = exclusiveOffers[0]?.category;
  const bestSellingCategory = bestSelling[0]?.category;

  return (
    <div className="min-h-dvh bg-white flex flex-col pb-20 lg:pb-10">
      {/* Header */}
      <div className="pt-8 pb-4 px-6 lg:max-w-7xl lg:w-full lg:mx-auto lg:px-10 lg:pt-10">
        <div className="flex flex-col items-center gap-2 lg:flex-row lg:justify-between">
          <div className="flex flex-col items-center gap-2 lg:items-start">
            <svg width="26" height="31" viewBox="0 0 26 31" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.0163 30.2477C12.0163 30.2477 8.69796 27.1521 4.94914 21.5249C1.20032 15.8978 -0.39211 11.0118 0.0877239 7.58645C0.567558 4.16113 2.74281 1.7351 5.56631 1.48002C8.38981 1.22493 11.077 3.12946 12.6319 5.91154C14.1868 8.69363 14.4502 12.0914 13.1829 15.2047C11.9157 18.318 12.0163 30.2477 12.0163 30.2477Z" fill="#F3603F"/>
              <path d="M17.9046 21.2844C21.6027 20.2945 24.1804 17.6963 25.3797 13.9818C26.579 10.2673 26.1741 6.39209 24.305 4.06646C22.4359 1.74083 18.7797 3.67137 16.292 6.35382C13.8043 9.03627 13.0108 12.5152 14.1111 15.7261C15.2114 18.9371 17.9046 21.2844 17.9046 21.2844Z" fill="#53B175"/>
            </svg>

            <div className="flex items-center gap-2 text-[#4C4F4D] font-semibold">
              <MapPin size={20} />
              <span>{location}</span>
            </div>
          </div>

          <div className="hidden lg:block text-right">
            <h1 className="text-3xl font-bold text-[#181725]">Welcome Back</h1>
            <p className="text-[#7C7C7C] mt-1">Find the freshest picks for today.</p>
          </div>
        </div>
      </div>

      <div className="px-6 mb-8 lg:max-w-7xl lg:w-full lg:mx-auto lg:px-10 lg:grid lg:grid-cols-3 lg:gap-6 lg:items-stretch">
        <div 
          onClick={() => navigate('/search')}
          className="w-full bg-[#F2F3F2] flex items-center gap-3 px-4 py-4 rounded-2xl cursor-text lg:col-span-2"
        >
          <Search size={20} className="text-[#181725]" />
          <span className="text-[#7C7C7C] font-semibold">Search Store</span>
        </div>
        <div className="w-full h-32 rounded-2xl bg-[#E8F5ED] flex items-center justify-between p-6 relative overflow-hidden">
          <div className="flex flex-col z-10">
            <span className="text-[#181725] text-2xl font-bold">Fresh Vegetables</span>
            <span className="text-[#53B175] text-sm font-semibold mt-1">Get Up To 40% OFF</span>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=300" 
            alt="Vegetables"
            className="absolute right-0 top-0 h-full w-40 object-cover rounded-l-full mix-blend-multiply opacity-80"
          />
        </div>
      </div>

      {cartItemCount > 0 && (
        <div className="px-6 mb-8 lg:max-w-7xl lg:w-full lg:mx-auto lg:px-10">
          <button
            onClick={() => navigate('/cart')}
            className="w-full bg-[#53B175] text-white rounded-2xl px-5 py-4 flex items-center justify-between shadow-[0_10px_25px_rgba(83,177,117,0.28)] hover:bg-[#489d67] transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                <ShoppingCart size={20} />
              </div>
              <div className="text-left">
                <p className="text-sm text-white/90">{cartItemCount} item{cartItemCount > 1 ? 's' : ''} in cart</p>
                <p className="text-lg font-bold">${cartTotal.toFixed(2)}</p>
              </div>
            </div>
            <span className="font-semibold">View Cart</span>
          </button>
        </div>
      )}

      {/* Exclusive Offer */}
      <div className="mb-10 lg:max-w-7xl lg:w-full lg:mx-auto lg:px-10">
        <div className="flex justify-between items-center px-6 mb-4 lg:px-0">
          <h2 className="text-[#181725] text-2xl font-bold">Exclusive Offer</h2>
          <button
            className="text-[#53B175] font-semibold"
            onClick={() => exclusiveCategory && navigate(`/category/${exclusiveCategory}`)}
            disabled={!exclusiveCategory}
          >
            See all
          </button>
        </div>
        
        <div className="flex gap-4 overflow-x-auto px-6 pb-4 hide-scrollbar snap-x lg:px-0 lg:overflow-visible lg:grid lg:grid-cols-4">
          {exclusiveOffers.map(product => (
            <div key={product.id} className="min-w-40 snap-start lg:min-w-0" onClick={() => navigate(`/product/${product.id}`)}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>

      {/* Best Selling */}
      <div className="mb-8 lg:max-w-7xl lg:w-full lg:mx-auto lg:px-10">
        <div className="flex justify-between items-center px-6 mb-4 lg:px-0">
          <h2 className="text-[#181725] text-2xl font-bold">Best Selling</h2>
          <button
            className="text-[#53B175] font-semibold"
            onClick={() => bestSellingCategory && navigate(`/category/${bestSellingCategory}`)}
            disabled={!bestSellingCategory}
          >
            See all
          </button>
        </div>
        
        <div className="flex gap-4 overflow-x-auto px-6 pb-4 hide-scrollbar snap-x lg:px-0 lg:overflow-visible lg:grid lg:grid-cols-4">
          {bestSelling.map(product => (
            <div key={product.id} className="min-w-40 snap-start lg:min-w-0" onClick={() => navigate(`/product/${product.id}`)}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
