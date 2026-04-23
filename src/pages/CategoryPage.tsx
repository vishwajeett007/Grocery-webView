import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, SlidersHorizontal } from 'lucide-react';
import { mockProducts } from '../data/mock';
import { ProductCard } from '../components/ProductCard';

export function CategoryPage() {
  const { categoryName } = useParams();
  const navigate = useNavigate();

  const products = mockProducts.filter(p => p.category === categoryName);

  return (
    <div className="min-h-dvh bg-white flex flex-col">
      <div className="flex items-center justify-between p-4 border-b border-[#E2E2E2]">
        <button aria-label="Go back" title="Go back" onClick={() => navigate(-1)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <ChevronLeft size={24} />
        </button>
        <h1 className="text-xl font-bold text-[#181725]">{categoryName}</h1>
        <button aria-label="Open filters" title="Open filters" onClick={() => navigate('/filters')} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <SlidersHorizontal size={24} />
        </button>
      </div>

      <div className="flex-1 p-6 grid grid-cols-2 gap-4 lg:max-w-7xl lg:w-full lg:mx-auto lg:px-10 lg:grid-cols-4 lg:gap-6">
        {products.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onClick={() => navigate(`/product/${product.id}`)}
          />
        ))}
        {products.length === 0 && (
          <div className="col-span-2 flex flex-col items-center justify-center mt-20">
            <p className="text-[#7C7C7C]">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
