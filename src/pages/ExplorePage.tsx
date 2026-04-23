import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { mockCategories } from '../data/mock';
import { BottomNav } from '../components/BottomNav';

export function ExplorePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-[100dvh] bg-white flex flex-col pb-20 lg:pb-10">
      <div className="pt-8 pb-4 text-center border-b border-[#E2E2E2] lg:pt-10">
        <h1 className="text-xl font-bold text-[#181725]">Find Products</h1>
      </div>

      <div className="px-6 mt-6 mb-6 lg:max-w-7xl lg:w-full lg:mx-auto lg:px-10">
        <div 
          onClick={() => navigate('/search')}
          className="w-full bg-[#F2F3F2] flex items-center gap-3 px-4 py-4 rounded-2xl cursor-text"
        >
          <Search size={20} className="text-[#181725]" />
          <span className="text-[#7C7C7C] font-semibold">Search Store</span>
        </div>
      </div>

      <div className="px-6 grid grid-cols-2 gap-4 lg:max-w-7xl lg:w-full lg:mx-auto lg:px-10 lg:grid-cols-4 lg:gap-6">
        {mockCategories.map((category) => (
          <div 
            key={category.id}
            onClick={() => navigate(`/category/${category.name}`)}
            className={`p-4 rounded-[18px] border ${category.borderColor} ${category.color} flex flex-col items-center justify-center gap-4 cursor-pointer hover:shadow-sm transition-all h-[190px]`}
          >
            <img 
              src={category.image} 
              alt={category.name} 
              className="w-20 h-20 object-contain mix-blend-multiply"
            />
            <h3 className="font-bold text-[#181725] text-center px-2 leading-tight">
              {category.name}
            </h3>
          </div>
        ))}
      </div>

      <BottomNav />
    </div>
  );
}
