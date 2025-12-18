import { useDispatch, useSelector } from 'react-redux';
import { setLocation, setType, setFeature, resetFilters } from '../store/slices/filtersSlice';

export default function FilterPanel() {
  const dispatch = useDispatch();
  const filters = useSelector(state => state.filters);

  const handleLocationChange = (e) => {
    dispatch(setLocation(e.target.value));
  };

  const handleTypeChange = (type) => {
    dispatch(setType(type === filters.type ? '' : type));
  };

  const handleFeatureToggle = (feature) => {
    dispatch(setFeature(feature));
  };

  const handleReset = () => {
    dispatch(resetFilters());
  };

  const vehicleTypes = [
    { id: 'Van', label: 'Van', icon: '📦' },
    { id: 'Fully Integrated', label: 'Fully Integrated', icon: '⬜' },
    { id: 'Alcove', label: 'Alcove', icon: '⊞' }
  ];

  const equipmentFeatures = [
    { id: 'ac', label: 'AC', icon: '❄️' },
    { id: 'automatic', label: 'Automatic', icon: '⚙️' },
    { id: 'kitchen', label: 'Kitchen', icon: '🍳' },
    { id: 'tv', label: 'TV', icon: '📺' },
    { id: 'bathroom', label: 'Bathroom', icon: '🚽' },
    { id: 'refrigerator', label: 'Refrigerator', icon: '❄️' },
    { id: 'microwave', label: 'Microwave', icon: '🍲' },
    { id: 'gas', label: 'Gas', icon: '🔥' },
    { id: 'water', label: 'Water', icon: '💧' }
  ];

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h2 className="text-2xl font-bold mb-6 text-[#101010]">Filters</h2>

      {/* Location */}
      <div className="mb-8">
        <label className="block text-sm font-semibold mb-3 text-[#101010]">Location</label>
        <input
          type="text"
          placeholder="Enter location"
          value={filters.location}
          onChange={handleLocationChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E1644E]"
        />
      </div>

      {/* Vehicle Type - Button Group */}
      <div className="mb-8">
        <label className="block text-sm font-semibold mb-3 text-[#101010]">Vehicle type</label>
        <div className="grid grid-cols-3 gap-3">
          {vehicleTypes.map(type => (
            <button
              key={type.id}
              onClick={() => handleTypeChange(type.id)}
              className={`py-3 px-2 rounded-lg border-2 transition text-center ${
                filters.type === type.id
                  ? 'border-[#E1644E] bg-red-50'
                  : 'border-gray-300 hover:border-[#E1644E]'
              }`}
            >
              <div className="text-2xl mb-1">{type.icon}</div>
              <div className="text-xs font-medium text-[#101010]">{type.label}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Equipment - Button Group */}
      <div className="mb-8">
        <label className="block text-sm font-semibold mb-3 text-[#101010]">Vehicle equipment</label>
        <div className="grid grid-cols-2 gap-3">
          {equipmentFeatures.map(feature => (
            <button
              key={feature.id}
              onClick={() => handleFeatureToggle(feature.id)}
              className={`py-3 px-2 rounded-lg border-2 transition text-center ${
                filters.features[feature.id]
                  ? 'border-[#E1644E] bg-red-50'
                  : 'border-gray-300 hover:border-[#E1644E]'
              }`}
            >
              <div className="text-2xl mb-1">{feature.icon}</div>
              <div className="text-xs font-medium text-[#101010]">{feature.label}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Reset Button */}
      <button
        onClick={handleReset}
        className="w-full py-2 border-2 border-[#E1644E] text-[#E1644E] font-bold rounded-lg hover:bg-[#E1644E] hover:text-white transition"
      >
        Reset Filters
      </button>
    </div>
  );
}