import { ChevronRight } from 'lucide-react';
import { useProductStore } from '../store/useProductStore';
import { useCartStore } from '../store/useCartStore';
import { mockProducts } from '../data/mock';
import { BottomNav } from '../components/BottomNav';
import { Button } from '../components/Button';

export function FavoritesPage() {
  const { favorites } = useProductStore();
  const addItem = useCartStore(state => state.addItem);
  
  const favoriteProducts = mockProducts.filter(p => favorites.includes(p.id));

  const addAllToCart = () => {
    favoriteProducts.forEach(product => addItem(product, 1));
  };

  return (
    <div className="min-h-[100dvh] bg-white flex flex-col pb-40 lg:pb-10">
      <div className="py-6 text-center border-b border-[#E2E2E2]">
        <h1 className="text-xl font-bold text-[#181725]">Favorite</h1>
      </div>

      <div className="flex-1 overflow-y-auto lg:max-w-5xl lg:w-full lg:mx-auto lg:px-10">
        {favoriteProducts.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-center mt-20">
            <h2 className="text-xl font-bold text-[#181725] mb-2">No favorites yet</h2>
            <p className="text-[#7C7C7C]">Items you favorite will appear here.</p>
          </div>
        ) : (
          favoriteProducts.map((product) => (
            <div key={product.id} className="flex items-center p-4 border-b border-[#E2E2E2] cursor-pointer hover:bg-gray-50">
              <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center mr-4">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              
              <div className="flex-1">
                <h3 className="font-bold text-[#181725]">{product.name}</h3>
                <p className="text-sm text-[#7C7C7C] mt-1">{product.unit}</p>
              </div>

              <div className="flex items-center gap-4">
                <span className="font-bold text-[#181725]">${product.price.toFixed(2)}</span>
                <ChevronRight size={20} className="text-[#181725]" />
              </div>
            </div>
          ))
        )}
      </div>

      {favoriteProducts.length > 0 && (
        <div className="fixed bottom-[80px] left-0 right-0 p-6 bg-white border-t border-[#E2E2E2] z-20 lg:static lg:border-t-0 lg:bg-transparent lg:max-w-5xl lg:w-full lg:mx-auto lg:px-10">
          <Button fullWidth onClick={addAllToCart} className="lg:max-w-sm lg:ml-auto">
            Add All To Cart
          </Button>
        </div>
      )}

      <BottomNav />
    </div>
  );
}
