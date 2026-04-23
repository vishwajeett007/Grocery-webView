import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function LoadingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/onboarding');
    }, 1600);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-dvh bg-[#53B175] flex items-center justify-center px-6">
      <div className="flex flex-col items-center gap-5 text-center">
        <img
          src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
          alt="Loading"
          className="w-28 h-28 object-contain"
        />
        <p className="text-white text-sm font-semibold tracking-[0.3em] uppercase">
          Loading
        </p>
      </div>
    </div>
  );
}