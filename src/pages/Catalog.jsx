import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampers, clearCampers } from '../store/slices/campersSlice';
import CamperCard from '../components/CamperCard';
import FilterPanel from '../components/FilterPanel';

export default function Catalog() {
  const dispatch = useDispatch();
  const { list: campers, loading, error } = useSelector(state => state.campers);
  const filters = useSelector(state => state.filters);
  const [displayCount, setDisplayCount] = useState(8);

  useEffect(() => {
    const filterParams = {
      location: filters.location || '',
      type: filters.type || '',
      features: filters.features || {}
    };

    dispatch(clearCampers());
    dispatch(fetchCampers(filterParams));
    setDisplayCount(8);
  }, [filters, dispatch]);

  const safeCampers = Array.isArray(campers) ? campers : [];
  const displayedCampers = safeCampers.slice(0, displayCount);
  const hasMore = displayCount < safeCampers.length;

  const handleLoadMore = () => {
    setDisplayCount(prev => prev + 4);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-12 text-[#101010]">Campers Catalog</h1>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <aside className="lg:col-span-1">
            <FilterPanel />
          </aside>

          <div className="lg:col-span-4">
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
                Error: {error}
              </div>
            )}

            {loading && displayCount === 8 ? (
              <div className="flex justify-center items-center h-64">
                <div className="loading-spinner"></div>
              </div>
            ) : safeCampers.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-2xl text-gray-500">No campers found</p>
              </div>
            ) : (
              <>
                <div className="space-y-6">
                  {displayedCampers.map(camper => (
                    <CamperCard key={camper.id} camper={camper} />
                  ))}
                </div>

                {hasMore && (
                  <div className="flex justify-center mt-8">
                    <button
                      onClick={handleLoadMore}
                      disabled={loading}
                      className="px-12 py-3 bg-[#E1644E] text-white rounded-full font-bold hover:bg-[#c94a37] transition disabled:opacity-50 cursor-pointer"
                    >
                      {loading ? 'Loading...' : 'Load more'}
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}