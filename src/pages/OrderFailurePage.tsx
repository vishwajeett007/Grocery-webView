import { useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';
import { Button } from '../components/Button';

export function OrderFailurePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-[100dvh] bg-white flex flex-col items-center justify-center p-6 text-center relative">
      <button 
        onClick={() => navigate('/cart')}
        className="absolute top-6 left-6 p-2"
      >
        <X size={24} className="text-[#181725]" />
      </button>

      <div className="w-48 h-48 mb-10 flex items-center justify-center">
        <svg width="267" height="267" viewBox="0 0 267 267" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="133.5" cy="133.5" r="133.5" fill="#FFEAE8" opacity="0.5"/>
          <path d="M133.5 204C172.436 204 204 172.436 204 133.5C204 94.5639 172.436 63 133.5 63C94.5639 63 63 94.5639 63 133.5C63 172.436 94.5639 204 133.5 204Z" fill="#F45A5A"/>
          <path d="M115 115L152 152M152 115L115 152" stroke="white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      <h1 className="text-3xl font-bold text-[#181725] leading-tight mb-4">
        Oops! Order Failed
      </h1>
      <p className="text-base text-[#7C7C7C] mb-12">
        Something went terribly wrong.
      </p>

      <div className="w-full flex flex-col gap-4 mt-auto pb-10">
        <Button fullWidth onClick={() => navigate('/cart')} className="py-5">
          Please Try Again
        </Button>
        <Button variant="ghost" fullWidth onClick={() => navigate('/home')} className="py-5 font-bold text-[#181725] hover:bg-gray-50">
          Back to home
        </Button>
      </div>
    </div>
  );
}
