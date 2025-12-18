import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCamperById } from '../store/slices/campersSlice';
import { toggleFavorite } from '../store/slices/favoritesSlice';
import ReservationForm from '../components/ReservationForm';
import ReviewSection from '../components/ReviewSection';

export default function CamperDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { selectedCamper, loading } = useSelector(state => state.campers);
  const favorites = useSelector(state => state.favorites.items);
  const isFavorite = favorites.some(fav => fav.id === selectedCamper?.id);
  
  const [activeTab, setActiveTab] = useState('features');
  const [mainImage, setMainImage] = useState(null);

  useEffect(() => {
    dispatch(fetchCamperById(id));
  }, [id, dispatch]);

  useEffect(() => {
    if (selectedCamper?.gallery && selectedCamper.gallery.length > 0) {
      setMainImage(selectedCamper.gallery[0]);
    }
  }, [selectedCamper]);

  if (loading) {
    return <div className="flex justify-center items-center h-screen"><div className="loading-spinner"></div></div>;
  }

  if (!selectedCamper) {
    return <div className="text-center py-12"><p className="text-gray-500 text-xl">Camper not found</p></div>;
  }

  const camper = selectedCamper;
  const formattedPrice = typeof camper.price === 'number' 
    ? camper.price.toFixed(2) 
    : parseFloat(camper.price).toFixed(2);

  const handleFavoriteToggle = () => {
    dispatch(toggleFavorite(camper));
  };

  return (
    <div className="min-h-screen bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button onClick={() => navigate('/catalog')} className="mb-6 text-[#E1644E] font-semibold hover:underline">
          ← Back to Catalog
        </button>

        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-4xl font-bold text-[#101010] mb-2">{camper.name}</h1>
            <div className="flex items-center gap-4 text-gray-600">
              <div>⭐ {camper.rating || '4.5'}({camper.reviewsCount || '2'} Reviews)</div>
              <div>📍 {camper.location || 'Kyiv, Ukraine'}</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-3xl font-bold text-[#101010]">€{formattedPrice}</p>
            <button onClick={handleFavoriteToggle} className="text-3xl hover:scale-110 transition">
              {isFavorite ? '❤️' : '🤍'}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-8">
              <div className="mb-4">
                {mainImage ? (
                  <img src={mainImage} alt={camper.name} className="w-full h-96 object-cover rounded-2xl" />
                ) : (
                  <div className="w-full h-96 flex items-center justify-center bg-gray-200 rounded-2xl text-6xl">🚐</div>
                )}
              </div>

              {camper.gallery && camper.gallery.length > 1 && (
                <div className="grid grid-cols-4 gap-3">
                  {camper.gallery.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`Thumbnail ${idx}`}
                      onClick={() => setMainImage(img)}
                      className={`h-24 object-cover rounded-lg cursor-pointer border-2 transition ${
                        mainImage === img ? 'border-[#E1644E]' : 'border-gray-300'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>

            <div className="mb-8">
              <p className="text-gray-600 leading-relaxed">{camper.description || 'Embrace simplicity and freedom...'}</p>
            </div>

            <div className="border-b border-gray-200 mb-8">
              <div className="flex gap-8">
                <button
                  onClick={() => setActiveTab('features')}
                  className={`pb-4 text-lg font-semibold transition ${
                    activeTab === 'features'
                      ? 'text-[#101010] border-b-2 border-[#E1644E]'
                      : 'text-gray-600 hover:text-[#101010]'
                  }`}
                >
                  Features
                </button>
                <button
                  onClick={() => setActiveTab('reviews')}
                  className={`pb-4 text-lg font-semibold transition ${
                    activeTab === 'reviews'
                      ? 'text-[#101010] border-b-2 border-[#E1644E]'
                      : 'text-gray-600 hover:text-[#101010]'
                  }`}
                >
                  Reviews
                </button>
              </div>
            </div>

            {activeTab === 'features' && (
              <div>
                <div className="mb-8">
                  <div className="flex flex-wrap gap-3 mb-8">
                    {camper.transmission && <span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium">⚙️ {camper.transmission}</span>}
                    {camper.ac && <span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium">❄️ AC</span>}
                    {camper.engine && <span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium">🔧 {camper.engine}</span>}
                    {camper.kitchen && <span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium">🍳 Kitchen</span>}
                    {camper.radio && <span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium">📻 Radio</span>}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-6 text-[#101010]">Vehicle details</h3>
                  <div className="space-y-4">
                    {camper.form && <div className="flex justify-between border-b pb-4"><span className="text-gray-700">Form</span><span className="font-semibold text-[#101010]">{camper.form}</span></div>}
                    {camper.length && <div className="flex justify-between border-b pb-4"><span className="text-gray-700">Length</span><span className="font-semibold text-[#101010]">{camper.length}</span></div>}
                    {camper.width && <div className="flex justify-between border-b pb-4"><span className="text-gray-700">Width</span><span className="font-semibold text-[#101010]">{camper.width}</span></div>}
                    {camper.height && <div className="flex justify-between border-b pb-4"><span className="text-gray-700">Height</span><span className="font-semibold text-[#101010]">{camper.height}</span></div>}
                    {camper.tank && <div className="flex justify-between border-b pb-4"><span className="text-gray-700">Tank</span><span className="font-semibold text-[#101010]">{camper.tank}</span></div>}
                    {camper.consumption && <div className="flex justify-between pb-4"><span className="text-gray-700">Consumption</span><span className="font-semibold text-[#101010]">{camper.consumption}</span></div>}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && <ReviewSection camper={camper} />}
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <ReservationForm camperId={camper.id} camperName={camper.name} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}