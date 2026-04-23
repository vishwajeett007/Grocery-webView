import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

export function SplashPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/loading');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-dvh bg-[#53B175] flex items-center justify-center">
      <div className="flex items-center gap-4">
        <img src={logo} alt="Nectar logo" className="w-12 h-12 object-contain" />
        <div className="flex flex-col">
          <h1 className="text-white text-5xl font-bold tracking-tight">nectar</h1>
          <p className="text-white text-sm tracking-[0.3em]">online grocer</p>
        </div>
      </div>
    </div>
  );
}
