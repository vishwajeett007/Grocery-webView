import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { Button } from '../components/Button';
import { ProductCategory } from '../types';

export function FiltersPage() {
  const navigate = useNavigate();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const toggleCategory = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  return (
    <div className="min-h-dvh bg-white flex flex-col relative">
      <div className="flex items-center justify-center p-4 border-b border-[#E2E2E2] relative">
        <button aria-label="Go back" title="Go back" onClick={() => navigate(-1)} className="p-2 hover:bg-gray-100 rounded-full absolute left-4">
          <ChevronLeft size={24} />
        </button>
        <h1 className="text-xl font-bold text-[#181725]">Filters</h1>
      </div>

      <div className="flex-1 overflow-y-auto p-6 bg-[#F2F3F2] lg:px-10">
        <div className="bg-white p-6 rounded-t-[30px] rounded-b-[30px] shadow-sm mb-24 lg:max-w-4xl lg:mx-auto lg:p-8 lg:mb-8">
          <h2 className="text-2xl font-bold text-[#181725] mb-6">Categories</h2>
          
          <div className="flex flex-col gap-4">
            {Object.values(ProductCategory).map((category) => (
              <label key={category} className="flex items-center gap-3 cursor-pointer">
                <div className={`w-6 h-6 rounded-lg flex items-center justify-center border transition-colors ${
                  selectedCategories.includes(category) 
                    ? 'bg-[#53B175] border-[#53B175]' 
                    : 'border-[#B1B1B1]'
                }`}>
                  {selectedCategories.includes(category) && (
                    <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 4.5L4.5 8L11 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </div>
                <input 
                  type="checkbox" 
                  className="hidden"
                  checked={selectedCategories.includes(category)}
                  onChange={() => toggleCategory(category)}
                />
                <span className={`text-base font-medium ${selectedCategories.includes(category) ? 'text-[#53B175]' : 'text-[#181725]'}`}>
                  {category}
                </span>
              </label>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-[#181725] mb-6 mt-10">Brand</h2>
          <div className="flex flex-col gap-4">
            {['Individual Collection', 'Cocola', 'Ifad', 'Kazi Farmas'].map((brand) => (
              <label key={brand} className="flex items-center gap-3 cursor-pointer">
                <div className="w-6 h-6 rounded-lg border border-[#B1B1B1]"></div>
                <input type="checkbox" className="hidden" />
                <span className="text-base font-medium text-[#181725]">
                  {brand}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-6 bg-white border-t border-[#E2E2E2] lg:static lg:border-t-0 lg:bg-transparent lg:pt-0 lg:max-w-4xl lg:w-full lg:mx-auto">
        <Button fullWidth onClick={() => navigate(-1)} className="lg:max-w-sm lg:ml-auto">
          Apply Filter
        </Button>
      </div>
    </div>
  );
}
