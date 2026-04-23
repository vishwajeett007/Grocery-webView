import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { AuthSplitLayout } from '../components/AuthSplitLayout';

export function OtpPage() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    inputs.current[0]?.focus();
  }, []);

  const handleChange = (index: number, value: string) => {
    if (isNaN(Number(value))) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value !== '' && index < 3) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && otp[index] === '' && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  const handleNext = () => {
    if (otp.join('').length === 4) {
      navigate('/location');
    }
  };

  const otpContent = (
    <>
      <div className="p-4">
        <button aria-label="Go back" title="Go back" onClick={() => navigate(-1)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <ChevronLeft size={24} />
        </button>
      </div>

      <div className="flex-1 flex flex-col p-6 mt-4">
        <h1 className="text-[26px] font-semibold text-[#181725] mb-2">Enter your 4-digit code</h1>
        <p className="text-[#7C7C7C] text-base mb-10">Code</p>

        <div className="flex gap-4 mb-8">
          {otp.map((digit, index) => (
            <input
              key={index}
              aria-label={`OTP digit ${index + 1}`}
              title={`OTP digit ${index + 1}`}
              ref={el => { inputs.current[index] = el; }}
              type="text"
              maxLength={1}
              value={digit}
              onChange={e => handleChange(index, e.target.value)}
              onKeyDown={e => handleKeyDown(index, e)}
              className="w-16 h-16 text-center text-2xl font-semibold border-b-2 border-[#E2E2E2] focus:border-[#53B175] focus:outline-none bg-transparent"
            />
          ))}
        </div>

        <div className="mt-auto pb-10 flex justify-between items-center">
          <button aria-label="Resend code" title="Resend code" className="text-[#53B175] font-semibold">Resend Code</button>

          <button
            aria-label="Continue"
            title="Continue"
            onClick={handleNext}
            disabled={otp.join('').length !== 4}
            className={`w-16 h-16 rounded-full flex items-center justify-center transition-colors ${
              otp.join('').length === 4 ? 'bg-[#53B175] text-white hover:bg-[#489d67]' : 'bg-gray-200 text-gray-400'
            }`}
          >
            <ChevronLeft size={24} className="rotate-180" />
          </button>
        </div>
      </div>
    </>
  );

  return (
    <AuthSplitLayout
      desktopContent={<div className="w-full max-w-md min-h-full flex flex-col">{otpContent}</div>}
      mobileContent={<div className="min-h-dvh bg-white flex flex-col">{otpContent}</div>}
    />
  );
}
