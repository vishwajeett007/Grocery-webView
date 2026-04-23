import { Routes, Route, Navigate } from 'react-router-dom';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Store, Search, ShoppingCart, Heart, LogOut } from 'lucide-react';
import { useAuthStore } from './store/useAuthStore';
import logo from './assets/logo.png';
import { SplashPage } from './pages/SplashPage';
import { LoadingPage } from './pages/LoadingPage';
import { OnboardingPage } from './pages/OnboardingPage';
import { LoginPage } from './pages/LoginPage';
import { SignUpPage } from './pages/SignUpPage';
import { OtpPage } from './pages/OtpPage';
import { LocationPage } from './pages/LocationPage';
import { HomePage } from './pages/HomePage';
import { ExplorePage } from './pages/ExplorePage';
import { CategoryPage } from './pages/CategoryPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { SearchPage } from './pages/SearchPage';
import { FiltersPage } from './pages/FiltersPage';
import { CartPage } from './pages/CartPage';
import { FavoritesPage } from './pages/FavoritesPage';
import { OrderSuccessPage } from './pages/OrderSuccessPage';
import { OrderFailurePage } from './pages/OrderFailurePage';

function AppRoutes() {
  return (
    <div className="h-dvh w-full overflow-y-auto overflow-x-hidden hide-scrollbar bg-white relative lg:h-full">
      <Routes>
        <Route path="/" element={<SplashPage />} />
        <Route path="/loading" element={<LoadingPage />} />
        <Route path="/onboarding" element={<OnboardingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/otp" element={<OtpPage />} />
        <Route path="/location" element={<LocationPage />} />
        
        <Route path="/home" element={<HomePage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/category/:categoryName" element={<CategoryPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/filters" element={<FiltersPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        
        <Route path="/order-success" element={<OrderSuccessPage />} />
        <Route path="/order-failure" element={<OrderFailurePage />} />
        
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const logout = useAuthStore((state) => state.logout);
  const isAuthFlow = ['/', '/loading', '/onboarding', '/login', '/signup', '/otp', '/location', '/order-success', '/order-failure'].includes(location.pathname);

  const desktopNavItems = [
    { icon: Store, label: 'Shop', path: '/home' },
    { icon: Search, label: 'Explore', path: '/explore' },
    { icon: ShoppingCart, label: 'Cart', path: '/cart' },
    { icon: Heart, label: 'Favorites', path: '/favorites' }
  ];

  return (
    <div className="min-h-dvh w-full bg-[#f3f7f1] overflow-hidden font-sans relative">
      <div className="hidden lg:block absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-15%] left-[-5%] w-140 h-140 bg-[#d8f0de] rounded-full blur-3xl opacity-70"></div>
        <div className="absolute bottom-[-20%] right-[-5%] w-lg h-lg bg-[#c7e7d1] rounded-full blur-3xl opacity-70"></div>
      </div>

      <div className="hidden lg:flex relative z-10 h-dvh w-full p-6 gap-6">
        {!isAuthFlow && (
          <aside className="w-72 rounded-3xl border border-[#dfe8de] bg-white/80 backdrop-blur-md p-6 flex flex-col shadow-[0_16px_40px_rgba(24,23,37,0.08)]">
            <div className="flex items-center gap-3 mb-10">
              <img src={logo} alt="Nectar logo" className="w-10 h-10 object-contain" />
              <div>
                <p className="text-[#181725] font-bold text-lg leading-tight">Nectar</p>
                <p className="text-[#7C7C7C] text-xs">Groceries, but smarter</p>
              </div>
            </div>

            <nav className="space-y-2">
              {desktopNavItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname.startsWith(item.path);

                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center gap-3 rounded-2xl px-4 py-3 transition-all ${isActive ? 'bg-[#53B175] text-white shadow-md' : 'text-[#4C4F4D] hover:bg-[#EEF6F0]'}`}
                  >
                    <Icon size={20} />
                    <span className="font-semibold">{item.label}</span>
                  </Link>
                );
              })}
            </nav>

            <div className="mt-auto rounded-2xl bg-[#f4faf5] border border-[#dcecdc] p-4">
              <p className="text-sm font-semibold text-[#181725]">Freshness Delivered</p>
              <p className="text-xs text-[#7C7C7C] mt-1">Browse seasonal picks and quick reorders from your desktop.</p>
            </div>

            <button
              type="button"
              onClick={() => {
                logout();
                navigate('/login');
              }}
              className="mt-4 flex items-center justify-center gap-2 rounded-2xl border border-[#dfe8de] px-4 py-3 text-[#181725] font-semibold hover:bg-[#f4faf5] transition-colors"
            >
              <LogOut size={18} />
              Logout
            </button>
          </aside>
        )}

        <main className={`${isAuthFlow ? 'w-full' : 'flex-1'} rounded-3xl border border-[#dfe8de] bg-white shadow-[0_20px_50px_rgba(24,23,37,0.08)] overflow-hidden`}>
          <AppRoutes />
        </main>
      </div>

      <div className="lg:hidden h-dvh w-full bg-white relative">
        <AppRoutes />
      </div>
    </div>
  );
}

export default App;
