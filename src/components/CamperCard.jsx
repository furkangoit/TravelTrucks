import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../store/slices/favoritesSlice';
import { useNavigate } from 'react-router-dom';

export default function CamperCard({ camper }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const favorites = useSelector(state => state.favorites.items);
  const isFavorite = favorites.some(fav => fav.id === camper.id);

  const handleShowMore = () => {
    navigate(`/catalog/${camper.id}`);
  };

  const handleFavoriteToggle = (e) => {
    e.stopPropagation();
    dispatch(toggleFavorite(camper));
  };

  // Format price (8000 -> 8000.00)
  const formattedPrice = typeof camper.price === 'number'
    ? camper.price.toFixed(2)
    : parseFloat(camper.price).toFixed(2);

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition p-6 flex gap-6">
      {/* Image - Sol taraf */}
      <div className="flex-shrink-0 w-64 h-48">
        {camper.gallery && camper.gallery[0] ? (
          <img
            src={camper.gallery[0]}
            alt={camper.name}
            className="w-full h-full object-cover rounded-xl"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl">
            <span className="text-6xl">🚐</span>
          </div>
        )}
      </div>

      {/* Content - Sağ taraf */}
      <div className="flex-grow flex flex-col">
        {/* Title & Favorite & Price */}
        <div className="flex justify-between items-start mb-2">
          <div className="flex-grow">
            <h3 className="text-2xl font-bold text-[#101010]">{camper.name}</h3>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-2xl font-bold text-[#101010]">€{formattedPrice}</p>
            <button
              onClick={handleFavoriteToggle}
              className="text-2xl hover:scale-110 transition"
            >
              {isFavorite ? '❤️' : '🤍'}
            </button>
          </div>
        </div>

        {/* Rating & Location */}
        <div className="flex items-center gap-4 mb-3 text-gray-600">
          <div className="flex items-center gap-1">
            <span>⭐ {camper.rating || '4.5'}</span>
            <span className="text-sm">({camper.reviewsCount || '2'} Reviews)</span>
          </div>
          <span>📍 {camper.location || 'Konum Bilgisi Yok'}</span>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {camper.description || 'Embrace simplicity and freedom with this panel truck...'}
        </p>

        {/* Features - Icons */}
        <div className="flex flex-wrap gap-6 mb-4">
          {camper.transmission && (
            <div className="flex items-center gap-2">
              <span className="text-lg">⚙️</span>
              <span className="text-sm">{camper.transmission}</span>
            </div>
          )}
          {camper.engine && (
            <div className="flex items-center gap-2">
              <span className="text-lg">🔧</span>
              <span className="text-sm">{camper.engine}</span>
            </div>
          )}
          {camper.kitchen && (
            <div className="flex items-center gap-2">
              <span className="text-lg">🍳</span>
              <span className="text-sm">Kitchen</span>
            </div>
          )}
          {camper.ac && (
            <div className="flex items-center gap-2">
              <span className="text-lg">❄️</span>
              <span className="text-sm">AC</span>
            </div>
          )}
        </div>

        {/* Show More Button */}
        <div className="flex justify-start">
          <button
            onClick={handleShowMore}
            className="px-8 py-3 bg-[#E1644E] text-white rounded-full font-bold hover:bg-[#c94a37] transition cursor-pointer"
          >
            Show more
          </button>
        </div>
      </div>
    </div>
  );
}
