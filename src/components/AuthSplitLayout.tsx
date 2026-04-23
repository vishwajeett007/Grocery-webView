import type { ReactNode } from 'react';
import logo from '../assets/logo.png';

interface AuthSplitLayoutProps {
  desktopContent: ReactNode;
  mobileContent: ReactNode;
}

export function AuthSplitLayout({ desktopContent, mobileContent }: AuthSplitLayoutProps) {
  return (
    <div className="relative h-full p-6 overflow-hidden bg-white flex flex-col lg:bg-[#dfe8de]">
        <div className="w-full h-full max-h-[calc(100vh - 300px)]overflow-hidden rounded-[36px] border border-[#dfe8de] bg-white shadow-[0_24px_80px_rgba(24,23,37,0.12)] grid lg:grid-cols-2">
          <div className="h-full bg-[#53B175] p-10 rounded-2xl z-10 text-white flex flex-col justify-between overflow-hidden">
            <div className="relative z-10 flex items-center gap-3">
              <img src={logo} alt="Nectar logo" className="w-12 h-12 object-contain" />
              <div>
                <p className="text-2xl font-bold leading-tight">Nectar</p>
                <p className="text-white/80 text-sm">Premium grocery delivery</p>
              </div>
            </div>

            <div className="relative z-10 max-w-md">
              <h1 className="text-5xl font-extrabold leading-tight mb-4">Fresh groceries, delivered smarter.</h1>
              <p className="text-white/85 text-lg leading-relaxed">
                Shop fresh produce, pantry staples, and daily essentials from a desktop experience inspired by the mobile app.
              </p>
            </div>

            <div className="relative z-10 rounded-[28px] bg-white/12 border border-white/20 p-4 backdrop-blur-sm">
              <img src={"https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1000"} alt="Grocery illustration" className="w-full h-65 object-cover rounded-[22px]" />
            </div>
          </div>

          <div className="flex items-center justify-center p-10 bg-white rounded-2xl">{desktopContent}</div>
        </div>

      <div className="flex-1 lg:hidden">{mobileContent}</div>
    </div>
  );
}
