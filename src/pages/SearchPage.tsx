import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Search as SearchIcon, SlidersHorizontal, X } from 'lucide-react';
import { mockProducts } from '../data/mock';
import { ProductCard } from '../components/ProductCard';

export function SearchPage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');

  // Debounce logic
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 500);

    return () => clearTimeout(handler);
  }, [searchQuery]);

  const results = mockProducts.filter(p => 
    p.name.toLowerCase().includes(debouncedQuery.toLowerCase()) || 
    p.category.toLowerCase().includes(debouncedQuery.toLowerCase())
  );

  return (
    <div className="min-h-dvh bg-white flex flex-col">
      <div className="flex items-center gap-4 p-4 border-b border-[#E2E2E2] lg:max-w-7xl lg:w-full lg:mx-auto lg:px-10">
        <button aria-label="Go back" title="Go back" onClick={() => navigate(-1)} className="p-2 hover:bg-gray-100 rounded-full">
          <ChevronLeft size={24} />
        </button>
        
        <div className="flex-1 bg-[#F2F3F2] flex items-center gap-2 px-4 py-3 rounded-[15px]">
          <SearchIcon size={20} className="text-[#181725]" />
          <input
            type="text"
            placeholder="Search Store"
            className="flex-1 bg-transparent outline-none font-semibold text-[#181725] placeholder:text-[#7C7C7C]"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            autoFocus
          />
          {searchQuery && (
            <button aria-label="Clear search" title="Clear search" onClick={() => setSearchQuery('')} className="p-1">
              <X size={16} className="text-[#7C7C7C]" />
            </button>
          )}
        </div>
        
        <button aria-label="Open filters" title="Open filters" onClick={() => navigate('/filters')} className="p-2 hover:bg-gray-100 rounded-full">
          <SlidersHorizontal size={24} />
        </button>
      </div>

      <div className="flex-1 p-6 lg:max-w-7xl lg:w-full lg:mx-auto lg:px-10">
        {debouncedQuery === '' ? (
          <div className="h-full flex flex-col items-center justify-center text-center mt-20">
            <SearchIcon size={48} className="text-[#E2E2E2] mb-4" />
            <h2 className="text-xl font-bold text-[#181725] mb-2">Search for products</h2>
            <p className="text-[#7C7C7C]">Start typing to find what you're looking for</p>
          </div>
        ) : results.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
            {results.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onClick={() => navigate(`/product/${product.id}`)}
              />
            ))}
          </div>
        ) : (
          <div className="h-full flex flex-col items-center justify-center text-center mt-20">
            <div className="mb-4 text-[#E2E2E2]">
              <SearchIcon size={64} />
            </div>
            <h2 className="text-xl font-bold text-[#181725] mb-2">Item not found</h2>
            <p className="text-[#7C7C7C]">Try searching with a different keyword</p>
          </div>
        )}
      </div>
    </div>
  );
}
