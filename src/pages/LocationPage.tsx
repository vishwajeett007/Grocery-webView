import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronDown } from 'lucide-react';
import { Button } from '../components/Button';
import { useAuthStore } from '../store/useAuthStore';
import { AuthSplitLayout } from '../components/AuthSplitLayout';

export function LocationPage() {
  const navigate = useNavigate();
  const updateLocation = useAuthStore(state => state.updateLocation);
  
  const [zone, setZone] = useState('');
  const [area, setArea] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (zone && area) {
      updateLocation(`${area}, ${zone}`);
      navigate('/home');
    }
  };

  const locationContent = (
    <>
      <div>
        <button aria-label="Go back" title="Go back" onClick={() => navigate(-1)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <ChevronLeft size={24} />
        </button>
      </div>

      <div className="flex-1 flex flex-col items-center">
        <div className="w-20 h-20">
          <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M100 180C100 180 160 120 160 80C160 46.8629 133.137 20 100 20C66.8629 20 40 46.8629 40 80C40 120 100 180 100 180Z" fill="#FDEFEA" stroke="#FDEFEA"/>
            <path d="M100 100C111.046 100 120 91.0457 120 80C120 68.9543 111.046 60 100 60C88.9543 60 80 68.9543 80 80C80 91.0457 88.9543 100 100 100Z" fill="#F3603F"/>
            <circle cx="100" cy="80" r="12" fill="white"/>
            <path d="M60 160L80 180" stroke="#E2E2E2" strokeWidth="4" strokeLinecap="round"/>
            <path d="M140 160L120 180" stroke="#E2E2E2" strokeWidth="4" strokeLinecap="round"/>
          </svg>
        </div>

        <h1 className="text-[26px] font-semibold text-[#181725] mb-2 text-center">Select Your Location</h1>
        <p className="text-[#7C7C7C] text-base text-center mb-10 px-4">
          Switch on your location to stay in tune with what's happening in your area
        </p>

        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">
          <div className="flex flex-col gap-2 relative">
            <label htmlFor="zone" className="text-sm font-semibold text-[#7C7C7C]">Your Zone</label>
            <select
              id="zone"
              title="Your Zone"
              value={zone}
              onChange={(e) => setZone(e.target.value)}
              className="w-full py-4 bg-transparent border-b border-[#E2E2E2] focus:border-[#53B175] focus:outline-none appearance-none text-[#181725] font-medium"
              required
            >
              <option value="" disabled>Select your zone</option>
              <option value="Banasree">Banasree</option>
              <option value="Gulshan">Gulshan</option>
              <option value="Dhanmondi">Dhanmondi</option>
            </select>
            <ChevronDown size={20} className="absolute right-0 bottom-4 text-gray-400 pointer-events-none" />
          </div>

          <div className="flex flex-col gap-2 relative">
            <label htmlFor="area" className="text-sm font-semibold text-[#7C7C7C]">Your Area</label>
            <select
              id="area"
              title="Your Area"
              value={area}
              onChange={(e) => setArea(e.target.value)}
              className="w-full py-4 bg-transparent border-b border-[#E2E2E2] focus:border-[#53B175] focus:outline-none appearance-none text-[#181725] font-medium"
              required
            >
              <option value="" disabled>Select your area</option>
              <option value="Dhaka">Dhaka</option>
              <option value="Chittagong">Chittagong</option>
              <option value="Sylhet">Sylhet</option>
            </select>
            <ChevronDown size={20} className="absolute right-0 bottom-4 text-gray-400 pointer-events-none" />
          </div>

          <Button type="submit" fullWidth className="mt-4 py-5">
            Submit
          </Button>
        </form>
      </div>
    </>
  );

  return (
    <AuthSplitLayout
      desktopContent={<div className="w-full max-w-md min-h-full flex flex-col">{locationContent}</div>}
      mobileContent={<div className="min-h-dvh bg-white flex flex-col">{locationContent}</div>}
    />
  );
}
