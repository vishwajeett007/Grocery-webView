import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Eye, EyeOff } from 'lucide-react';

export function SignUpPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/otp');
  };

  return (
    <div className="min-h-[100dvh] bg-white flex flex-col p-6">
      <div className="flex-1 flex flex-col justify-center">
        <div className="mb-10">
          <svg width="48" height="56" viewBox="0 0 48 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-10 mx-auto">
             <path d="M22.0298 55.4542C22.0298 55.4542 15.9463 49.7788 9.07342 39.4624C2.2005 29.1459 -0.718873 20.1983 0.161827 12.9515C1.04253 5.7047 5.03816 0.572111 11.0889 0.0333202C17.1396 -0.505471 22.8988 3.5262 26.2312 9.41217C29.5636 15.2981 30.0418 22.4862 27.3243 29.0743C24.6067 35.6624 22.0298 55.4542 22.0298 55.4542Z" fill="#F3603F"/>
            <path d="M32.8252 36.4861C40.7299 34.3917 46.2505 28.8953 48.8198 21.0371C51.389 13.179 50.5213 4.98188 46.5165 0.0631626C42.5118 -4.85556 34.6787 -0.768652 29.3477 4.90151C24.0166 10.5717 22.3155 17.9351 24.673 24.7275C27.0305 31.5199 32.8252 36.4861 32.8252 36.4861Z" fill="#53B175"/>
          </svg>

          <h1 className="text-[26px] font-semibold text-[#181725] mb-2">Sign Up</h1>
          <p className="text-[#7C7C7C] text-base">Enter your credentials to continue</p>
        </div>

        <form onSubmit={handleSignUp} className="flex flex-col gap-6">
          <Input 
            label="Username"
            type="text"
            placeholder="Afsar Hossen"
            required
          />

          <Input 
            label="Email"
            type="email"
            placeholder="imshuvo97@gmail.com"
            required
          />

          <div className="relative">
            <Input 
              label="Password"
              type={showPassword ? 'text' : 'password'}
              placeholder="••••••••"
              required
            />
            <button 
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-0 top-[38px] text-[#7C7C7C]"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <div className="text-sm text-[#7C7C7C] tracking-wide mt-2">
            By continuing you agree to our <span className="text-[#53B175]">Terms of Service</span> and <span className="text-[#53B175]">Privacy Policy</span>.
          </div>

          <Button type="submit" fullWidth className="mt-4 py-5">
            Sign Up
          </Button>
        </form>

        <div className="mt-6 text-center text-sm font-semibold text-[#181725] tracking-wide">
          Already have an account? <Link to="/login" className="text-[#53B175]">Signup</Link>
        </div>
      </div>
    </div>
  );
}
