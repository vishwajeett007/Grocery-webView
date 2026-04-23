import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, Share2, Heart, Minus, Plus, ChevronRight } from 'lucide-react';
import { mockProducts } from '../data/mock';
import { Button } from '../components/Button';
import { useCartStore } from '../store/useCartStore';
import { useProductStore } from '../store/useProductStore';
import { useState } from 'react';

export function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [expandedSection, setExpandedSection] = useState<string | null>('detail');
  
  const product = mockProducts.find(p => p.id === id);
  const addItem = useCartStore(state => state.addItem);
  const { toggleFavorite, isFavorite } = useProductStore();

  if (!product) {
    return <div className="p-8 text-center">Product not found</div>;
  }

  const handleAddToCart = () => {
    addItem(product, quantity);
    navigate('/cart');
  };

  const isFav = isFavorite(product.id);

  return (
    <div className="min-h-dvh bg-white flex flex-col pb-24 lg:pb-10">
      {/* Header & Image */}
      <div className="bg-[#F2F3F2] rounded-b-[40px] relative lg:max-w-7xl lg:w-full lg:mx-auto lg:rounded-3xl">
        <div className="flex items-center justify-between p-4 absolute top-0 left-0 right-0 z-10">
          <button aria-label="Go back" title="Go back" onClick={() => navigate(-1)} className="p-2 bg-white/50 backdrop-blur-md rounded-full transition-colors">
            <ChevronLeft size={24} />
          </button>
          <button aria-label="Share product" title="Share product" className="p-2 bg-white/50 backdrop-blur-md rounded-full transition-colors">
            <Share2 size={24} />
          </button>
        </div>
        <div className="h-[350px] w-full flex items-center justify-center p-8 mt-10">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-contain mix-blend-multiply"
          />
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col gap-6 lg:max-w-7xl lg:w-full lg:mx-auto lg:px-10">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-[#181725] mb-2">{product.name}</h1>
            <p className="text-base text-[#7C7C7C] font-semibold">{product.unit}</p>
          </div>
          <button
            aria-label={isFav ? 'Remove from favorites' : 'Add to favorites'}
            title={isFav ? 'Remove from favorites' : 'Add to favorites'}
            onClick={() => toggleFavorite(product.id)}
            className="p-2"
          >
            <Heart 
              size={28} 
              className={isFav ? 'fill-red-500 text-red-500' : 'text-[#7C7C7C]'} 
            />
          </button>
        </div>

        {/* Quantity and Price */}
        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center gap-4">
            <button
              aria-label="Decrease quantity"
              title="Decrease quantity"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-11 h-11 rounded-[17px] flex items-center justify-center text-[#7C7C7C] border border-[#E2E2E2]"
            >
              <Minus size={20} />
            </button>
            <span className="text-lg font-semibold text-[#181725] w-6 text-center">{quantity}</span>
            <button
              aria-label="Increase quantity"
              title="Increase quantity"
              onClick={() => setQuantity(quantity + 1)}
              className="w-11 h-11 rounded-[17px] flex items-center justify-center text-[#53B175] border border-[#E2E2E2]"
            >
              <Plus size={20} />
            </button>
          </div>
          <span className="text-2xl font-bold text-[#181725]">
            ${(product.price * quantity).toFixed(2)}
          </span>
        </div>

        {/* Accordions */}
        <div className="border-t border-[#E2E2E2] mt-4 pt-4">
          <div 
            className="flex justify-between items-center py-4 cursor-pointer"
            onClick={() => setExpandedSection(expandedSection === 'detail' ? null : 'detail')}
          >
            <h3 className="text-base font-semibold text-[#181725]">Product Detail</h3>
            <ChevronRight size={20} className={`transition-transform ${expandedSection === 'detail' ? 'rotate-90' : ''}`} />
          </div>
          {expandedSection === 'detail' && (
            <p className="text-[13px] text-[#7C7C7C] leading-[21px] pb-4">
              {product.description}
            </p>
          )}

          <div className="border-t border-[#E2E2E2]">
            <div 
              className="flex justify-between items-center py-4 cursor-pointer"
              onClick={() => setExpandedSection(expandedSection === 'nutrition' ? null : 'nutrition')}
            >
              <h3 className="text-base font-semibold text-[#181725]">Nutritions</h3>
              <div className="flex items-center gap-2 text-[#7C7C7C]">
                <span className="bg-[#EBEBEB] text-[9px] px-2 py-1 rounded-[5px]">100gr</span>
                <ChevronRight size={20} className={`transition-transform ${expandedSection === 'nutrition' ? 'rotate-90' : ''}`} />
              </div>
            </div>
            {expandedSection === 'nutrition' && (
              <p className="text-[13px] text-[#7C7C7C] leading-[21px] pb-4">
                {product.nutritionalInfo || 'Nutrition information not available.'}
              </p>
            )}
          </div>

          <div className="border-t border-b border-[#E2E2E2]">
            <div 
              className="flex justify-between items-center py-4 cursor-pointer"
              onClick={() => setExpandedSection(expandedSection === 'review' ? null : 'review')}
            >
              <h3 className="text-base font-semibold text-[#181725]">Review</h3>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1,2,3,4,5].map(star => (
                    <svg key={star} width="16" height="15" viewBox="0 0 16 15" fill={star <= (product.rating || 0) ? "#F3603F" : "#E2E2E2"} xmlns="http://www.w3.org/2000/svg" className="mr-1">
                      <path d="M7.96865 0L10.0212 5.09355L15.4957 5.5186L11.2982 9.04944L12.5936 14.3976L7.96865 11.4935L3.34368 14.3976L4.63914 9.04944L0.44165 5.5186L5.91614 5.09355L7.96865 0Z" />
                    </svg>
                  ))}
                </div>
                <ChevronRight size={20} className={`text-[#181725] transition-transform ${expandedSection === 'review' ? 'rotate-90' : ''}`} />
              </div>
            </div>
            {expandedSection === 'review' && (
              <p className="text-[13px] text-[#7C7C7C] leading-[21px] pb-4">
                Based on {product.reviews} reviews.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Fixed Bottom Button */}
      <div className="fixed bottom-0 left-0 right-0 p-6 bg-white border-t border-[#E2E2E2] z-20 lg:static lg:border-t-0 lg:bg-transparent lg:p-0 lg:max-w-7xl lg:w-full lg:mx-auto lg:px-10 lg:pb-8">
        <Button fullWidth onClick={handleAddToCart} className="lg:max-w-sm lg:ml-auto">
          Add To Basket
        </Button>
      </div>
    </div>
  );
}
