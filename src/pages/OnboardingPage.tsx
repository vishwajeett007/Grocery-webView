import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';

export function OnboardingPage() {
  const navigate = useNavigate();

  return (
    <div 
      className="min-h-[100dvh] flex flex-col justify-end pb-12 px-6 bg-cover bg-center bg-no-repeat relative"
      style={{ 
        backgroundImage: 'url(https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1000)',
      }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Carrot Icon */}
        <div className="mb-6">
          <svg width="48" height="56" viewBox="0 0 48 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.0298 55.4542C22.0298 55.4542 15.9463 49.7788 9.07342 39.4624C2.2005 29.1459 -0.718873 20.1983 0.161827 12.9515C1.04253 5.7047 5.03816 0.572111 11.0889 0.0333202C17.1396 -0.505471 22.8988 3.5262 26.2312 9.41217C29.5636 15.2981 30.0418 22.4862 27.3243 29.0743C24.6067 35.6624 22.0298 55.4542 22.0298 55.4542Z" fill="white"/>
            <path d="M32.8252 36.4861C40.7299 34.3917 46.2505 28.8953 48.8198 21.0371C51.389 13.179 50.5213 4.98188 46.5165 0.0631626C42.5118 -4.85556 34.6787 -0.768652 29.3477 4.90151C24.0166 10.5717 22.3155 17.9351 24.673 24.7275C27.0305 31.5199 32.8252 36.4861 32.8252 36.4861Z" fill="white"/>
          </svg>
        </div>

        <h1 className="text-white text-5xl font-bold leading-tight mb-4">
          Welcome<br/>to our store
        </h1>
        <p className="text-white/80 text-base mb-10">
          Get your groceries in as fast as one hour
        </p>

        <Button 
          fullWidth 
          onClick={() => navigate('/login')}
          className="text-lg py-5"
        >
          Get Started
        </Button>
      </div>
    </div>
  );
}
