import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  location: '',
  type: '',
  features: {
    ac: false,
    automatic: false,
    kitchen: false,
    tv: false,
    radio: false,
    refrigerator: false,
    microwave: false,
    gas: false,
    water: false
  }
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setType: (state, action) => {
      state.type = action.payload;
    },
    setFeature: (state, action) => {
      const feature = action.payload;
      state.features[feature] = !state.features[feature];
    },
    resetFilters: (state) => {
      state.location = '';
      state.type = '';
      Object.keys(state.features).forEach(key => {
        state.features[key] = false;
      });
    }
  }
});

export const { setLocation, setType, setFeature, resetFilters } = filtersSlice.actions;
export default filtersSlice.reducer;