import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Eye, EyeOff } from 'lucide-react';
import logo from '../assets/logo.png';
import { AuthSplitLayout } from '../components/AuthSplitLayout';

export function LoginPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/location');
  };

  const formContent = (
    <>
      <div className="mb-10">
        <img src={logo} alt="Nectar logo" className="mb-10 w-14 h-14 object-contain" />

        <h1 className="text-[26px] font-semibold text-[#181725] mb-2">Login</h1>
        <p className="text-[#7C7C7C] text-base">Enter your email and password</p>
      </div>

      <form onSubmit={handleLogin} className="flex flex-col gap-6">
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

        <div className="flex justify-end">
          <Link to="#" className="text-sm text-[#181725] font-medium tracking-wide">
            Forgot Password?
          </Link>
        </div>

        <Button type="submit" fullWidth className="mt-4 py-5">
          Log In
        </Button>
      </form>

      <div className="mt-6 text-center text-sm font-semibold text-[#181725] tracking-wide">
        Don't have an account? <Link to="/signup" className="text-[#53B175]">Signup</Link>
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
