import { Plus } from 'lucide-react';
import type { Product } from '../types';
import { useCartStore } from '../store/useCartStore';

interface ProductCardProps {
  product: Product;
  onClick?: () => void;
}

export function ProductCard({ product, onClick }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    addItem(product, 1);
  };

  return (
    <div 
      onClick={onClick}
      className="flex flex-col p-4 bg-white border border-[#E2E2E2] rounded-2xl cursor-pointer hover:shadow-md transition-shadow h-full"
    >
      <div className="h-36 w-full overflow-hidden rounded-xl bg-[#F8F9F8]">
        <img 
          src={product.image} 
          alt={product.name} 
          className="h-full w-full object-cover"
        />
      </div>
      
      <div className="mt-4 flex flex-col gap-1">
        <h3 className="font-bold text-[#181725] line-clamp-1">{product.name}</h3>
        <p className="text-sm text-[#7C7C7C]">{product.unit}</p>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <span className="font-bold text-lg text-[#181725]">${product.price.toFixed(2)}</span>
        <button 
          onClick={handleAdd}
          className="bg-[#53B175] text-white p-3 rounded-2xl hover:bg-[#489d67] transition-colors active:scale-95"
        >
          <Plus size={20} strokeWidth={3} />
        </button>
      </div>
    </div>
  );
}
