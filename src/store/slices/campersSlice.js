import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const MOCK_CAMPERS = [
  {
    id: '1',
    name: 'Mavericks',
    price: 8000,
    rating: 4.5,
    reviewsCount: 2,
    location: 'Kyiv, Ukraine',
    description: 'Embrace simplicity and freedom with the Mavericks panel truck.',
    gallery: ['/images/1.png', '/images/2.png', '/images/3.png', '/images/4.png'],
    transmission: 'Automatic',
    engine: 'Petrol',
    kitchen: true,
    ac: true,
    radio: true,
    automatic: true,
    tv: false,
    bathroom: true,
    refrigerator: true,
    microwave: false,
    gas: true,
    water: true,
    form: 'Van',
    length: '5.4 m',
    width: '2.01 m',
    height: '2.05 m',
    tank: '132 l',
    consumption: '12.40 l/100km'
  },
  {
    id: '2',
    name: 'Kuga Camper',
    price: 8000,
    rating: 4.2,
    reviewsCount: 10,
    location: 'Kyiv, Ukraine',
    description: 'The Kuga Camper combines comfort and adventure.',
    gallery: ['/images/7.png', '/images/2.png', '/images/3.png', '/images/1.png'],
    transmission: 'Automatic',
    engine: 'Petrol',
    kitchen: true,
    ac: true,
    radio: false,
    automatic: true,
    tv: true,
    bathroom: true,
    refrigerator: true,
    microwave: true,
    gas: false,
    water: true,
    form: 'Fully Integrated',
    length: '4.8 m',
    width: '1.9 m',
    height: '1.8 m',
    tank: '100 l',
    consumption: '10.5 l/100km'
  },
  {
    id: '3',
    name: 'Road Bear C 23-25',
    price: 8000,
    rating: 4.1,
    reviewsCount: 1,
    location: 'Kyiv, Ukraine',
    description: 'Experience the ultimate road trip with the Road Bear.',
    gallery: ['/images/6.png', '/images/2.png', '/images/3.png', '/images/1.png'],
    transmission: 'Automatic',
    engine: 'Petrol',
    kitchen: true,
    ac: true,
    radio: true,
    automatic: true,
    tv: true,
    bathroom: true,
    refrigerator: true,
    microwave: true,
    gas: true,
    water: true,
    form: 'Alcove',
    length: '7.3 m',
    width: '2.4 m',
    height: '3.2 m',
    tank: '150 l',
    consumption: '14.2 l/100km'
  },
  {
    id: '4',
    name: 'Mighty Class C Medium',
    price: 8000,
    rating: 4.0,
    reviewsCount: 1,
    location: 'Kyiv, Ukraine',
    description: 'The Mighty Class C offers luxury camping experience.',
    gallery: ['/images/5.png', '/images/2.png', '/images/3.png', '/images/1.png'],
    transmission: 'Automatic',
    engine: 'Petrol',
    kitchen: true,
    ac: true,
    radio: true,
    automatic: true,
    tv: true,
    bathroom: true,
    refrigerator: true,
    microwave: false,
    gas: true,
    water: true,
    form: 'Van',
    length: '7.0 m',
    width: '2.3 m',
    height: '3.1 m',
    tank: '140 l',
    consumption: '13.5 l/100km'
  }
];

export const fetchCampers = createAsyncThunk(
  'campers/fetchCampers',
  async (filters) => {
    let filtered = MOCK_CAMPERS;

    if (filters.location) {
      filtered = filtered.filter(c => 
        c.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }

    if (filters.type) {
      filtered = filtered.filter(c => c.form === filters.type);
    }

    if (filters.features) {
      Object.keys(filters.features).forEach(key => {
        if (filters.features[key]) {
          filtered = filtered.filter(c => c[key] === true);
        }
      });
    }

    return filtered;
  }
);

export const fetchCamperById = createAsyncThunk(
  'campers/fetchCamperById',
  async (id) => {
    return MOCK_CAMPERS.find(camper => camper.id === id);
  }
);

const initialState = {
  list: [],
  selectedCamper: null,
  loading: false,
  error: null
};

const campersSlice = createSlice({
  name: 'campers',
  initialState,
  reducers: {
    clearCampers: (state) => {
      state.list = [];
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.loading = false;
        state.list = Array.isArray(action.payload) ? action.payload : [];
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchCamperById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCamperById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedCamper = action.payload;
      })
      .addCase(fetchCamperById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export const { clearCampers } = campersSlice.actions;
export default campersSlice.reducer;