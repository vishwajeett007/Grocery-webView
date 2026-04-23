import { Store, Search, ShoppingCart, Heart, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useCartStore } from '../store/useCartStore';

export function BottomNav() {
  const location = useLocation();
  const cartItems = useCartStore((state) => state.items);
  
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const navItems = [
    { icon: Store, label: 'Shop', path: '/home' },
    { icon: Search, label: 'Explore', path: '/explore' },
    { icon: ShoppingCart, label: 'Cart', path: '/cart', badge: cartCount },
    { icon: Heart, label: 'Favourite', path: '/favorites' },
    { icon: User, label: 'Account', path: '/account' }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#E2E2E2] px-6 py-4 rounded-t-3xl shadow-[0_-4px_10px_rgba(0,0,0,0.05)] md:hidden z-50">
      <div className="flex justify-between items-center max-w-md mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname.startsWith(item.path);
          
          return (
            <Link 
              key={item.path} 
              to={item.path}
              className={`flex flex-col items-center gap-1 ${isActive ? 'text-[#53B175]' : 'text-[#181725]'}`}
            >
              <div className="relative">
                <Icon size={24} strokeWidth={isActive ? 2.5 : 2} className={!isActive ? 'opacity-80' : ''} />
                {item.badge && item.badge > 0 && (
                  <span className="absolute -top-1 -right-2 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                    {item.badge}
                  </span>
                )}
              </div>
              <span className={`text-[10px] font-medium ${isActive ? 'text-[#53B175]' : 'text-[#181725]'}`}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
