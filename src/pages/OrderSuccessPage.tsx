import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';

export function OrderSuccessPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-[100dvh] bg-white flex flex-col items-center justify-center p-6 text-center">
      <div className="w-48 h-48 mb-10 flex items-center justify-center">
        <svg width="267" height="267" viewBox="0 0 267 267" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="133.5" cy="133.5" r="133.5" fill="#E8F5ED" opacity="0.5"/>
          <path d="M133.5 204C172.436 204 204 172.436 204 133.5C204 94.5639 172.436 63 133.5 63C94.5639 63 63 94.5639 63 133.5C63 172.436 94.5639 204 133.5 204Z" fill="#53B175"/>
          <path d="M105.857 132.88L122.924 150.04L161.143 111.96" stroke="white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      <h1 className="text-3xl font-bold text-[#181725] leading-tight mb-4 px-4">
        Your Order has been accepted
      </h1>
      <p className="text-base text-[#7C7C7C] mb-12 px-6">
        Your items has been placcd and is on it's way to being processed
      </p>

      <div className="w-full flex flex-col gap-4 mt-auto pb-10">
        <Button fullWidth onClick={() => navigate('/home')} className="py-5">
          Track Order
        </Button>
        <Button variant="ghost" fullWidth onClick={() => navigate('/home')} className="py-5 font-bold text-[#181725] hover:bg-gray-50">
          Back to home
        </Button>
      </div>
    </div>
  );
}
