import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Eye, EyeOff } from 'lucide-react';
import logo from '../assets/logo.png';
import { AuthSplitLayout } from '../components/AuthSplitLayout';

export function SignUpPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/otp');
  };

  const formContent = (
    <>
      <div>
        <img src={logo} alt="Nectar logo" className=" w-14 h-14 object-contain" />

        <h1 className="text-[26px] font-semibold text-[#181725] mb-2">Sign Up</h1>
        <p className="text-[#7C7C7C] text-base">Enter your credentials to continue</p>
      </div>

      <form onSubmit={handleSignUp} className="flex flex-col gap-4 p-0 m-0">
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
            aria-label="Toggle password visibility"
            title="Toggle password visibility"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-0 top-9.5 text-[#7C7C7C]"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        <div className="text-sm text-[#7C7C7C] tracking-wide mt-2">
          By continuing you agree to our <span className="text-[#53B175]">Terms of Service</span> and <span className="text-[#53B175]">Privacy Policy</span>.
        </div>

        <Button type="submit" fullWidth className="mt-2 py-5">
          Sign Up
        </Button>
      </form>

      <div className="mt-6 text-center text-sm font-semibold text-[#181725] tracking-wide">
        Already have an account? <Link to="/login" className="text-[#53B175]">Login</Link>
      </div>
    </>
  );

  return (
    <AuthSplitLayout
      desktopContent={<div className="w-full max-w-md">{formContent}</div>}
      mobileContent={<div className="flex-1 flex flex-col justify-center p-6">{formContent}</div>}
    />
  );
}
