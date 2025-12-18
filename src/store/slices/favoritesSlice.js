import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    items: JSON.parse(localStorage.getItem('favorites')) || [],
  },
  reducers: {
    addToFavorites: (state, action) => {
      const item = action.payload;
      const exists = state.items.find(fav => fav.id === item.id);
      if (!exists) {
        state.items.push(item);
        localStorage.setItem('favorites', JSON.stringify(state.items));
      }
    },
    removeFromFavorites: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      localStorage.setItem('favorites', JSON.stringify(state.items));
    },
    toggleFavorite: (state, action) => {
      const item = action.payload;
      const exists = state.items.find(fav => fav.id === item.id);
      if (exists) {
        state.items = state.items.filter(fav => fav.id !== item.id);
      } else {
        state.items.push(item);
      }
      localStorage.setItem('favorites', JSON.stringify(state.items));
    },
    isFavorite: (state, action) => {
      return state.items.some(item => item.id === action.payload);
    },
  },
});

export const { addToFavorites, removeFromFavorites, toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;