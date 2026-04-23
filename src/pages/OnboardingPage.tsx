import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import logo from '../assets/logo.png';

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
          <img src={logo} alt="Nectar logo" className="w-14 h-14 object-contain" />
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
