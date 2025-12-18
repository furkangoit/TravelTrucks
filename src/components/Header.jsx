import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
  const favorites = useSelector(state => state.favorites.items);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="text-3xl font-bold text-[#E1644E]">🚐</div>
            <div>
              <h1 className="text-xl font-bold text-[#101010]">TravelTrucks</h1>
              <p className="text-xs text-gray-500">Karavan Kiralama</p>
            </div>
          </Link>

          <nav className="hidden md:flex gap-8">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-[#E1644E] font-medium transition"
            >
              Ana Sayfa
            </Link>
            <Link 
              to="/catalog" 
              className="text-gray-700 hover:text-[#E1644E] font-medium transition"
            >
              Katalog
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link 
              to="/catalog" 
              className="relative flex items-center gap-2 px-4 py-2 rounded-lg bg-[#E1644E] text-white hover:bg-[#c94a37] transition"
            >
              <span>❤️</span>
              <span className="font-medium">{favorites.length}</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}