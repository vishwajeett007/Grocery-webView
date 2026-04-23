import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function SplashPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/onboarding');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-[100dvh] bg-[#53B175] flex items-center justify-center">
      <div className="flex items-center gap-4">
        {/* Carrot Icon SVG */}
        <svg width="43" height="49" viewBox="0 0 43 49" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.8286 48.0645C18.8286 48.0645 13.626 43.1492 7.74797 34.2081C1.86994 25.2669 -0.62776 17.5134 0.126487 11.2335C0.880735 4.95358 4.2985 0.505504 9.47545 0.0381643C14.6524 -0.429175 19.5779 3.06733 22.4285 8.16782C25.2792 13.2683 25.6882 19.4975 23.3649 25.2053C21.0416 30.913 18.8286 48.0645 18.8286 48.0645Z" fill="white"/>
          <path d="M28.0583 31.6214C34.8217 29.8066 39.5447 25.0441 41.7423 18.2323C43.9399 11.4206 43.1979 4.31682 39.7712 0.0531818C36.3446 -4.21045 29.6433 -0.669819 25.0833 4.24867C20.5233 9.16717 19.068 15.5457 21.0851 21.4332C23.1023 27.3208 28.0583 31.6214 28.0583 31.6214Z" fill="white"/>
        </svg>
        <div className="flex flex-col">
          <h1 className="text-white text-5xl font-bold tracking-tight">nectar</h1>
          <p className="text-white text-sm tracking-[0.3em]">online grocer</p>
        </div>
      </div>
    </div>
  );
}
